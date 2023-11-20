import { useLoaderData } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export default function GamesNewsDetail() {
  const detail = useLoaderData();

  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 1000 }}>
        <Typography variant="b1" gutterBottom textAlign="left">
          <Link to={`/`}>Return</Link>
        </Typography>

        <Typography variant="h4" gutterBottom>
          {detail.title}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {detail.author}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {detail.date}
        </Typography>
        {detail.content.map((c) => {
          if (c.endsWith(".png") || c.endsWith(".jpg")) {
            return <img width="500px" src={c} />;
          }
          if (c.endsWith("oembed")) {
            return (
              <iframe
                width="560"
                height="315"
                src={c}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            );
          }
          return (
            <Typography variant="body1" textAlign="justify">
              {c}
            </Typography>
          );
        })}
      </Box>
    </div>
  );
}
