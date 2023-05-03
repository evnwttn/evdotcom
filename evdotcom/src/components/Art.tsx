import { Box } from "@mui/material";
import { ArtCard } from "./cards";
import { sx } from "../assets";
import { artCardData } from "../assets/cardData";

export const Art = () => {
  return (
    <Box>
      <Box sx={sx.art.cardDiv}>
        <Box>
          {artCardData.map((card: any) => {
            return (
              <ArtCard
                key={card.key}
                title={card.title}
                subtitle={card.subtitle}
                stack={card.stack}
                image={card.image}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
