import { Box } from "@mui/material";
import { AudioCard } from "./cards";
import { sx } from "../assets";
import { audioCardData } from "../assets/cardData/audioCardData";

export const Audio = () => {
  return (
    <Box>
      <Box sx={sx.audio.cardDiv}>
        <Box>
          {audioCardData.map((card: any) => {
            return (
              <AudioCard
                key={card.key}
                title={card.title}
                subtitle={card.subtitle}
                stack={card.stack}
                image={card.image}
                link={card.link}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
