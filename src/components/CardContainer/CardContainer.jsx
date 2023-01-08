import { Grid } from "@mui/material";
import CardPokemon from "./Card/Card";

const CardContainer = ({ pokemonList }) => {

  return (
    <Grid
      justifyContent={"center"}
      container
      spacing={2}
      columns={{ sm: "auto", xs: "auto", md: "auto" }}
      columnSpacing={{ xs: 1, md: 3 }}
      marginTop={"3em"}
    >
      {pokemonList.map((pokemon) => {
        return (
          <Grid item xs={2} md={2} sm={3} key={pokemon.name}>
            <CardPokemon pokemon={pokemon}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardContainer;
