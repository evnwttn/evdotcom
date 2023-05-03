import { Link, Box } from "@mui/material";
import { sx } from "../../assets";

interface CardProps {
  title: string;
  subtitle: string;
  stack: string;
  image: any[];
  link: string;
}

export const AudioCard = ({
  title,
  subtitle,
  stack,
  image,
  link,
}: CardProps) => {
  return (
    <Box sx={sx.audio.card}>
      <Link href={link}>
        <Box sx={{ ...sx.audio.art, backgroundImage: `url(${image})` }} />
      </Link>
      <Box sx={sx.audio.info}>
        <Box sx={sx.audio.title}>{title}</Box>
        <Box sx={sx.audio.subtitle}>{subtitle}</Box>
        <Box sx={sx.audio.stack}>{stack}</Box>
      </Box>
    </Box>
  );
};
