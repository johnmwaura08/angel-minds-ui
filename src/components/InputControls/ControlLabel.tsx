import { InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledHoverContainer = styled("div")(({ theme }) => ({
  display: "flex",
  "& > label": {
    color: theme.palette.common.black,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: "5px",
    display: "block",
  },
  "& .input-label": {
    paddingRight: "5px",
  },
  "& > svg": {
    color: theme.palette.primary.main,
  },
}));

export interface ControlLableProps {
  required?: boolean;
  inputLabel: string;
  isRequired?: boolean;
}

export const ControlLabel = ({
  required,
  inputLabel,
  isRequired,
}: ControlLableProps) => {
  return (
    <StyledHoverContainer>
      <InputLabel className="input-label" required={required || isRequired}>
        {inputLabel}
      </InputLabel>
    </StyledHoverContainer>
  );
};
