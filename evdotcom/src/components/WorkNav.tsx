import { Box, Tooltip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { sx } from "../assets";

interface Props {
  portfolio: string;
  togglePortfolio: React.Dispatch<React.SetStateAction<string>>;
}

export const WorkNav = ({ portfolio, togglePortfolio }: Props) => {
  return (
    <Box sx={sx.iconDiv}>
      <Tooltip title="Software" arrow>
        <CodeIcon
          onClick={() => togglePortfolio("code")}
          sx={{
            ...sx.iconDiv.icon,
            color: portfolio === "code" ? sx.palette.yellow : sx.palette.white,
          }}
        />
      </Tooltip>
      <Tooltip title="Artwork" arrow>
        <RemoveRedEyeIcon
          onClick={() => togglePortfolio("art")}
          sx={{
            ...sx.iconDiv.icon,
            color: portfolio === "art" ? sx.palette.yellow : sx.palette.white,
          }}
        />
      </Tooltip>
      <Tooltip title="Audio" arrow>
        <GraphicEqIcon
          onClick={() => togglePortfolio("audio")}
          sx={{
            ...sx.iconDiv.icon,
            color: portfolio === "audio" ? sx.palette.yellow : sx.palette.white,
          }}
        />
      </Tooltip>
    </Box>
  );
};
