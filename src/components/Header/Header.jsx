import { AppBar, TextField, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Searcher from "./SearchBar/SearchBar";

const Header = () => {
  return (
    <AppBar sx={{bgcolor:"#FFDE00"}}
 
      position={"fixed"}
      //   style={{ marginBottom: "10px", height: "2em", padding: "3px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
          <Typography  varaiant="h1"color={"#0075BE"} fontFamily ={"'Press Start 2P', cursive;"}>PokeAPP</Typography>
          <CatchingPokemonIcon style={{color:"ED1729"}}/>
        </div>
        <Searcher />
      </div>
    </AppBar>
  );
};

export default Header;
