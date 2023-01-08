import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import PokemonDialog from "../Dialog/Dialog";
import "./Card.css";

const CardPokemon = ({ pokemon }) => {
  const [dialogVisible, setDialog] = useState(false);
  function handleClick() {
    setDialog(true);
  }
  return (
    pokemon.data && (
      <>
        <Card className="card" onClick={handleClick}>
          <img src={pokemon.data.sprites.front_default} />
          <CardContent>
            <Typography variant="h5">
              {pokemon.name.replace(/^\w/, (c) => c.toUpperCase())}
            </Typography>
          </CardContent>
        </Card>
        <PokemonDialog
          dialogVisible={dialogVisible}
          setDialog={setDialog}
          pokemon={pokemon}
        />
      </>
    )
  );
};

export default CardPokemon;
