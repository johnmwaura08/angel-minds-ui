import type { FC } from "react";

import {
  FormControl,
  MenuItem,
  Select as MuiSelect,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { AngelMindsRequiredAsteriskColor, type Theme } from "theme";

import { ControlLabel } from "./ControlLabel";
import type { InputBaseComponentProps } from "@mui/material/InputBase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      paddingBottom: 20,
      "& > label": {
        // color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: "5px",
        display: "block",
        color: "red",
      },
      "& .MuiInputLabel-asterisk": {
        color: AngelMindsRequiredAsteriskColor,
      },
    },
    fieldWidth: {
      "& > div": {
        width: 361,
        height: 38,
      },
    },
    labelContainer: {
      display: "flex",
    },
  })
);

export interface Option {
  label: string;
  value: any;
}

export interface ISelectProps {
  required?: boolean;
  name: string;
  inputLabel: string;
  size?: "small" | "medium";
  value: any;
  error?: boolean;
  onChange:
    | ((event: SelectChangeEvent<any>, child: React.ReactNode) => void)
    | undefined;
  options?: Array<Option>;
  style?: React.CSSProperties | undefined;
  fullWidth?: boolean;
  helperText?: string;
  // work around the browser required attibute
  isRequired?: boolean;
  disabled?: boolean;
  helpTooltipText?: string;
  inputProps?: InputBaseComponentProps | undefined;
  onBlur?: (event?: React.FocusEvent<any, Element> | undefined) => void;
}

const Select: FC<ISelectProps> = ({
  required = false,
  name,
  inputLabel,
  size = "small",
  value,
  error,
  onChange,
  options,
  style,
  fullWidth = false,
  helperText,
  isRequired,
  disabled,
  onBlur,
  inputProps,
}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.field} ${!fullWidth ? classes.fieldWidth : ""}`}>
      <ControlLabel
        required={required}
        isRequired={isRequired}
        inputLabel={inputLabel}
      />
      <FormControl fullWidth={fullWidth} size={size} error={error}>
        <MuiSelect
          name={name}
          value={value}
          style={style}
          variant="outlined"
          displayEmpty
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
          inputProps={inputProps}
        >
          {options?.map((opt) => (
            <MenuItem key={opt.label + opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </MuiSelect>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Select;
