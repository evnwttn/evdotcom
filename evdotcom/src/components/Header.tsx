import { Box } from "@mui/material";
import { sx } from "../assets";

interface Props {
  nav: string;
  toggleNav: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ nav, toggleNav }: Props) => {
  return (
    <Box>
      <Box sx={sx.header}>Evan Watton</Box>
      <Box sx={sx.header.nav}>
        <Box
          onClick={() => toggleNav("work")}
          sx={{
            ...sx.header.nav.button,
            color: nav === "work" ? sx.palette.yellow : sx.palette.white,
          }}
        >
          Work
        </Box>
        <Box
          onClick={() => toggleNav("contact")}
          sx={{
            ...sx.header.nav.button,
            color: nav === "contact" ? sx.palette.yellow : sx.palette.white,
            ml: "1.5vw",
          }}
        >
          Contact
        </Box>
      </Box>
    </Box>
  );
};
