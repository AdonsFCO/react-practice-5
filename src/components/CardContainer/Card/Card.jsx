import { Card, CardContent, Typography } from "@mui/material";
import "./Card.css";


const CardPokemon = ({ pokemonName = "ditto" }) => {
    
  return (
    
    <Card className="card" >
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" />

      <CardContent>
        <Typography variant="h5">{pokemonName}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardPokemon;
