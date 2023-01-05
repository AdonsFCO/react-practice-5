import { Grid } from "@mui/material";
import CardPokemon from "./Card/Card";

const CardContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={3}>
        <CardPokemon />
      </Grid>
      <Grid>
        <CardPokemon />
      </Grid>
    </Grid>
  );
};

export default CardContainer;
