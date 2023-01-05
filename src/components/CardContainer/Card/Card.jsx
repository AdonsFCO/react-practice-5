import { Card, CardContent, Typography } from "@mui/material";
import "./Card.css";

const CardPokemon = ({ pokemonName = "ditto" }) => {
  return (
    <Card className="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" />

      <CardContent>
        <Typography variant="h5">{pokemonName}</Typography>
        <Typography variant="p">
          Lorem wqererq dolor sit amet consectetur adipisicing elit. Cumque
          numquam maxime blanditiis necessitatibus rerum inventore sequi
          voluptate aperiam quod est? Deleniti reprehenderit officia aspernatur
          aperiam accusantium deserunt ad, sunt maxime.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardPokemon;
