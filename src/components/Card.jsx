import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const PortfoCard = ({ imageURL, handleClick, title }) => {
  return (
    <Card sx={{ maxWidth: 400, position: "relative", overflow: "hidden", height: 250 }}>
      <CardActionArea
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          "&:hover .overlay": {
            opacity: 1,
          },
        }}
      >
        {/* Image fills the CardActionArea */}
        <CardMedia
          component="img"
          image={imageURL}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay covers the entire Card */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">{title}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

PortfoCard.propTypes = {
  imageURL: PropTypes.any,
  handleClick: PropTypes.any,
  title: PropTypes.string,
};

export default PortfoCard;
