import { useState } from "react";
import { Box } from "@mui/material";
import { Header, WorkNav } from "./";
import { sx } from "../assets";

export const Home = () => {
  const [nav, toggleNav] = useState<string>("work");
  const [portfolio, togglePortfolio] = useState<string>("code");

  return (
    <Box sx={sx.container}>
      <Box sx={sx.column}>
        <Header nav={nav} toggleNav={toggleNav} />
        <Box sx={sx.header.divider} />
        {nav === "work" && (
          <WorkNav portfolio={portfolio} togglePortfolio={togglePortfolio} />
        )}
      </Box>
    </Box>
  );
};
