import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      <Box sx={sx.code.stack}>{stack}</Box>
      {image.map((image: any, index: number) => {
        return (
          <Link
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              key={index}
              onClick={() => console.log(link)}
              sx={{ ...sx.code.image, backgroundImage: `url(${image})` }}
            />
          </Link>
        );
      })}
      <Box sx={sx.code.repo}>
        <Link href={repo} target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={sx.code.repo.icon} />
        </Link>
      </Box>
    </Box>
  );
};
