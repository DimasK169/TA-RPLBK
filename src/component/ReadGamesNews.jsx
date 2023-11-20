import axios from "axios";
import { useEffect } from "react";
import { useGamesNews } from "../useGamesNews";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const ReadGamesNews = () => {
  const { gamesNews } = useGamesNews();
  console.log(gamesNews);

  return (
    <div>
      <Box
        sx={{ width: "100%", maxWidth: 800, borderBottom: "1px solid white" }}
      >
        {gamesNews.map((gn) => (
          <div key={gn.key}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              <Link to={`/gamesNews/${gn.key}`}>{gn.title}</Link>
            </Typography>

            <Typography variant="h6" gutterBottom>
              <h3>Author : {gn.author}</h3>
            </Typography>

            <Typography variant="body1" gutterBottom>
              <h3>{gn.desc}</h3>
            </Typography>

            <Typography variant="h4" gutterBottom>
              <img src={gn.thumb} />
            </Typography>

            <Divider />
          </div>
        ))}
      </Box>
    </div>
  );
};

export default ReadGamesNews;
