import { Box, Link } from "@mui/material";
import { sx } from "../../assets";

interface CardProps {
  title: string;
  subtitle: string;
  stack: string;
  link: string;
  image: any[];
}

export const CodeCard = ({
  title,
  subtitle,
  stack,
  link,
  image,
}: CardProps) => {
  return (
    <Box sx={sx.code.card}>
      <Box sx={sx.code.title}>{title}</Box>
      <Box sx={sx.code.subtitle}>{subtitle}</Box>
      <Box sx={sx.code.stack}>{stack}</Box>
      {image.map((image: any, index: number) => {
        return (
          <Link href={link}>
            <Box
              key={index}
              onClick={() => console.log(link)}
              sx={{ ...sx.code.image, backgroundImage: `url(${image})` }}
            />
          </Link>
        );
      })}
    </Box>
  );
};
