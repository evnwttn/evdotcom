import { Box } from "@mui/material";
import { sx } from "../../assets";

interface CardProps {
  title: string;
  subtitle: string;
  link: string;
}

export const CodeCard = ({ title, subtitle, link }: CardProps) => {
  return (
    <Box sx={sx.code.card}>
      <Box sx={sx.code.title}>{title}</Box>
      <Box sx={sx.code.subtitle}>{subtitle}</Box>
      <Box onClick={() => console.log(link)} sx={sx.code.image} />
    </Box>
  );
};
