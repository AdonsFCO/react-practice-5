import { Grid } from "@mui/material";
import CardPokemon from "./Card/Card";

const CardContainer = () => {
  return (
    <Grid
      justifyContent={"center"}
      container
      spacing={2}
      columns={{ sm: "auto", xs: "auto", md: "auto" }}
      columnSpacing={{ xs: 1, md: 3 }}
      marginTop={"3em"}
    >
      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>
      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>

      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>

      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>

      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>

      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>
      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>
      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>

      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>

      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>
      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>
      <Grid item xs={2} md={2} sm={3}>
        <CardPokemon />
      </Grid>
    </Grid>
  );
};

export default CardContainer;
