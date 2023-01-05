import { Grid } from "@mui/material";
import CardPokemon from "./Card/Card";

const CardContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <item>
          <CardPokemon />
        </item>
      </Grid>
      <Grid>
        <item>
          <CardPokemon />
        </item>
      </Grid>
    </Grid>
  );
};

export default CardContainer;
