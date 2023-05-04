import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { sx } from "../assets";

export const Contact = () => {
  return (
    <Box sx={sx.contact.container}>
      <Box>
        <Box>
          <Link
            href="mailto:me@evanwatton.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={sx.contact.email}
          >
            me@evanwatton.com
          </Link>
        </Box>
        <Box>
          <Link
            href="https://www.google.com/maps/place/47.5556,-52.7453"
            target="_blank"
            rel="noopener noreferrer"
            sx={sx.contact.coordinates}
          >
            47.5556° N, 52.7453° W
          </Link>
        </Box>
        <Box sx={sx.contact.iconBox}>
          <Link
            href="https://github.com/evnwttn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={sx.contact.icon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/evnwttn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={sx.contact.icon} />
          </Link>
          <Link
            href="https://www.instagram.com/evnwttn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={sx.contact.icon} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
