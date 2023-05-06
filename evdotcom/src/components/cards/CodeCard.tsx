import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { sx } from "../../assets";

interface CardProps {
  title: string;
  subtitle: string;
  stack: string;
  info: string;
  repo: string;
  link: string;
  image: any[];
}

export const CodeCard = ({
  title,
  subtitle,
  stack,
  info,
  repo,
  link,
  image,
}: CardProps) => {
  return (
    <Box sx={sx.code.card}>
      <Box sx={sx.code.title}>{title}</Box>
      <Box sx={sx.code.subtitle}>{subtitle}</Box>
      <Box sx={sx.code.stack}>{info}</Box>
      <Box sx={{ ...sx.code.stack, mt: "-0.4vw" }}>{stack}</Box>
      {image.map((image: any, index: number) => {
        return (
          <Box
            key={index}
            onClick={() => console.log(link)}
            sx={{ ...sx.code.image, backgroundImage: `url(${image})` }}
          />
        );
      })}
      <Box sx={sx.code.links}>
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <LaunchIcon
              sx={{ ...sx.code.links.icon, mt: "0.12vw", mr: "1.39vw" }}
            />
          </Link>
        )}
        <Link href={repo} target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={sx.code.links.icon} />
        </Link>
      </Box>
    </Box>
  );
};
