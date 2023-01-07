//Sample of a single pokemon 
import DummyPokemon from "./DummyPokemon.json";
//A sample of a multiple pokemon list
import PokemonGroupDummy from "./PokemonGroupDummy.json";

import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import { createTheme, duration, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/500.css";
import "./app.css";
import Header from "./components/Header/Header";
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

  //This should be used on set effect.
  //First we need to get the list of pokemon for testing proposes we are going to create from the dummy directory and not
  //And not from fetching. The state should receive the list of pokemon

  const [pokemonList, setPokemonList] = useState(PokemonGroupDummy.results);

  //This should be used on set effect.
  // Les suppose that we have a function that fetch a single pokemon and we got this information:
useEffect( ()=>{
  function getFakeSinglePokemon(name) {
    //You should get this data from the fetch but for now let's use the dummy

    if (name === "ditto") {
      return {
        sprites: DummyPokemon.sprites,
        height: DummyPokemon.height,
        height: DummyPokemon.height,
        abilities: DummyPokemon.abilities,
        statistics: DummyPokemon.stats.map((stat) => {
          return determineStat(stat.stat.name, stat.base_stat);
        }),
        abilities: DummyPokemon.abilities,
      };
    } else {
      return null;
    }
  }

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


*/ function determineStat(statName, statValue) {
    return { [statName]: statValue };
  }

  const tempList = pokemonList.map((pokemon) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
      data: getFakeSinglePokemon(pokemon.name),
    };
  });


  setPokemonList(tempList);

},[]);
console.log(pokemonList)

  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}>
        <CardContainer className="cardContainer" pokemon={pokemonList}  />
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
