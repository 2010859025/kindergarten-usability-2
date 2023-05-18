import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import theme, { mediumGrey } from "../styles/theme";

export const StyledBackButton = styled(Button)({
  color: theme.palette.secondary.main,
  background: theme.palette.common.white,
  "&:hover": {
    backgroundColor: mediumGrey,
  },
  height: "4em",
  width: "19em",
  marginTop: "1em"
});
