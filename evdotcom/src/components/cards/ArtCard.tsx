import { Box } from "@mui/material";
import { sx } from "../../assets";

interface CardProps {
  title: string;
  subtitle: string;
  stack: string;
  image: any[];
}

export const ArtCard = ({ title, subtitle, stack, image }: CardProps) => {
  return (
    <Box sx={sx.art.card}>
      <Box sx={sx.art.title}>{title}</Box>
      <Box sx={sx.art.subtitle}>{subtitle}</Box>
      <Box sx={sx.art.stack}>{stack}</Box>
      {image.map((image: any, index: number) => {
        return (
          <Box
            key={index}
            sx={{ ...sx.art.image, backgroundImage: `url(${image})` }}
          />
        );
      })}
    </Box>
  );
};
