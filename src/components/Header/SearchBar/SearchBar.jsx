import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#0075BE",

  "&:hover": {
    backgroundColor: "#0A285F",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Searcher = ({ pokemonList, setPokemonList }) => {
  const [currentSearch, setCurrenSearch] = useState("");
  const originalPokemonList = useRef(pokemonList);
   //To determine while the user is writing
  const [keyboard, setKeyboard] = useState({
      isWriting : false,
      isDeleting: false,
      searchOnline: false
  });


  //To determine while the user is writing
  // let isWriting = useRef(false);
  // let isDeleting = useRef(false);
  // let searchOnline = useRef(false);

  function getSinglePokemon(url) {
    return axios
      .get(url)
      .then((pokemon) => {
        const pokemonData = {
          sprites: pokemon.data.sprites,
          height: pokemon.data.height,
          weight: pokemon.data.weight,
          abilities: pokemon.data.abilities,
          statistics: pokemon.data.stats.map((stat) => {
            return determineStat(stat.stat.name, stat.base_stat);
          }),
        };
        return pokemonData;
      })
      .catch((error) => {
        console.log(error)
      });
  }
  useEffect(() => {

    if (keyboard.searchOnline && !keyboard.isWriting && !keyboard.isDeleting) {
      const searchedPokemon = getSinglePokemon(
        `https://pokeapi.co/api/v2/pokemon/${currentSearch}`
      );
      setPokemonList([searchedPokemon])
   
    }
  },[keyboard]);

  function handleSearch({ target }) {
    setCurrenSearch(target.value.trim());
    pokemonList.map((currentSearchedPokemon) => {
      if (currentSearchedPokemon.name.includes(currentSearch)) {
        setKeyboard({...keyboard, searchOnline:false})
        setPokemonList(
          pokemonList.filter((pokemon) => pokemon.name.includes(currentSearch))
        );

      } else {
       

        if(originalPokemonList.current.filter((pokemon)=> pokemon.name.includes(currentSearch)).length > 0 && !keyboard.isWriting)
        {
        setKeyboard({...keyboard, searchOnline:true})
        }
      }
    });
    
  }

  //To determine while the user is writing
  function startTimer() {
    setTimeout(() => {
      setKeyboard({...keyboard, isWriting:false})
      console.log("is settet to false")
    }, 2000);
  }

  // const stopTimer = () => {
  //   clearInterval(interval);
  // };

  function handleKeys(event) {
    setKeyboard({...keyboard, isWriting:true})
    setKeyboard({...keyboard, isDeleting:false})
    setKeyboard({...keyboard, searchOnline:false})
    startTimer();
    if (event.key === "Backspace") {
      setPokemonList(originalPokemonList.current);
      setKeyboard({...keyboard, isWriting:false})
      setKeyboard({...keyboard, isDeleting:true})

    }
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Catch it"
        inputProps={{
          "aria-label": "search",
        }} /*Remember to get data from Value */
        value={currentSearch}
        onChange={handleSearch}
        onKeyDown={handleKeys}
      />
    </Search>
  );
};

export default Searcher;
