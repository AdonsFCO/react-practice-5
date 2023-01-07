import DummyPokemon from "./DummyPokemon.json";
import { useState } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

  return (
    <div className="App">
      <Header/>
     
      <ThemeProvider theme={theme}>
        <CardContainer className="cardContainer"/>
      </ThemeProvider>
    </div>
  );
};

export default App;
/*
Pokemon image : sprite   
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
