import { Box } from "@mui/material";
import { CodeCard } from "./cards/";
import { sx } from "../assets";
import { codeCardData } from "../assets/cardData";

export const Code = () => {
  return (
    <Box>
      <Box sx={sx.code.cardDiv}>
        <Box>
          {codeCardData.map((card: any) => {
            return (
              <CodeCard
                key={card.key}
                title={card.title}
                subtitle={card.subtitle}
                info={card.info}
                stack={card.stack}
                repo={card.repo}
                link={card.link}
                image={card.image}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
