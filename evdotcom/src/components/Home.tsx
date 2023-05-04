import { useState } from "react";
import { Box } from "@mui/material";
import { Header, WorkNav, Art, Audio, Code, Contact } from "./";
import { sx } from "../assets";

export const Home = () => {
  const [nav, toggleNav] = useState<string>("work");
  const [portfolio, togglePortfolio] = useState<string>("code");

  return (
    <Box sx={sx.container}>
      <Box sx={sx.column}>
        <Header nav={nav} toggleNav={toggleNav} />
        <Box sx={sx.header.divider} />
        {nav === "work" ? (
          <Box>
            <WorkNav portfolio={portfolio} togglePortfolio={togglePortfolio} />
            {portfolio === "art" ? (
              <Art />
            ) : portfolio === "audio" ? (
              <Audio />
            ) : (
              <Code />
            )}
          </Box>
        ) : (
          <Contact />
        )}
      </Box>
    </Box>
  );
};
