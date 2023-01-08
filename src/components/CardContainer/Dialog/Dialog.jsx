import { Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SkillBar } from "react-skillbars";

const PokemonDialog = ({ dialogVisible, setDialog, pokemon }) => {
  const { statistics, height, weight, abilities, sprites } = pokemon.data;

  function handleClose() {
    setDialog(false);
  }

  //Set the statistics object

  const statisticsLevel = statistics.map((stat) => {
    return { type: Object.keys(stat)[0], level: stat[Object.keys(stat)[0]] };
  });

  //Set colors
  const colorsBar = {
    bar: "#3B4CCA",
    title: {
      text: "#FF0000",
      background: "#FFDE00",
    },
  };

  return (
    pokemon.data && (
      <Dialog
        open={dialogVisible}
        scroll={"body"}
        fullScreen
        fullWidth
        key={pokemon.data.name}
      >
        <IconButton color="primary" onClick={handleClose} edge="end">
          <CloseIcon />
        </IconButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2em",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(255,255,255)",
            background:
              "linear-gradient(5deg, rgba(255,255,255,1) 0%, rgba(255,204,0,1) 50%)",
          }}
        >
          <Typography variant="h4">
            {pokemon.name.replace(/^\w/, (c) => c.toUpperCase())}
          </Typography>

          <img src={sprites.front_default} />
          <div style={{ padding: "10px" }}>
            <div>
              <Typography variant="h5">Description</Typography>

              <Typography variant="p">Weight: {weight} </Typography>
              <Typography variant="p">Height: {height} </Typography>
            </div>
            {dialogVisible && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50vh",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography>Stats</Typography>
                  <div>
                    <SkillBar
                      skills={statisticsLevel}
                      colors={colorsBar}
                      symbol={""}
                      height={"10px"}
                    />
                  </div>
                </div>
                <div>
                  <Typography> Abilities</Typography>
                  {abilities.map((ability) => {
                    return <div>{ability.ability.name}</div>;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    )
  );
};

export default PokemonDialog;
