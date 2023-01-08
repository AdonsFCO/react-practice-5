import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/500.css";
import "./app.css";
import Header from "./components/Header/Header";
import axios from "axios";
const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0A285F",
      },
      secondary: {
        main: "#0075BE",
      },
    },
  });
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  //This should be used on set effect.
  // Les suppose that we have a function that fetch a single pokemon and we got this information:
  useEffect(() => {
    async function getPokemonList(offset = 0) {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      );
      const tempList = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const data = await getSinglePokemon(pokemon.url);
          return {
            name: pokemon.name,
            url: pokemon.url,
            data: data,
          };
        })
      );
      setPokemonList(tempList);
  
    }
    
    getPokemonList(currentPage);

    function getSinglePokemon(url) {
      return axios.get(url).then((pokemon) => {
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
      });
    }
    
    function determineStat(statName, statValue) {
      statName = statName.replace("-", "");
      return { [statName]: statValue };
    }
  }, []);

  return (
    <div className="App">
      <Header pokemonList={pokemonList} />
      <ThemeProvider theme={theme}>
        {pokemonList.length > 0 && (
          <CardContainer className="cardContainer" pokemonList={pokemonList} />
        )}
      </ThemeProvider>
    </div>
  );
};

export default App;
/*
Pokemon image : sprites   
height        : height
Weight        : weight
abilities    : abilities
Statistics   : Stats
  HP         :  > base_stat
  Attack      :  > base_stat
  Defense    :  > base_stat
  Special Attack :  > base_stat
  Defense  : > base_stat 
  Speed    : > base stat





*/
