import { AppBar, TextField, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Searcher from "./SearchBar/SearchBar";

const Header = ({pokemonList, setPokemonList}) => {
  return (
    <AppBar sx={{bgcolor:"#FFDE00"}}
      position={"fixed"}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
          <Typography color={"#0075BE"} fontFamily ={"'Press Start 2P', cursive;"}>PokeAPP</Typography>
          <CatchingPokemonIcon style={{color:"ED1729"}}/>
        </div>
        <Searcher pokemonList={pokemonList} setPokemonList={setPokemonList} />
      </div>
    </AppBar>
  );
};

export default Header;
