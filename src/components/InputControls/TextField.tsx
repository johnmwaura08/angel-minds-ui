import type { FC } from "react";

import type { InputBaseComponentProps } from "@mui/material";
import { TextField as MuiTextField } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { AngelMindsRequiredAsteriskColor, type Theme } from "theme";

import { ControlLabel } from "./ControlLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      // marginRight: 19.4,
      paddingBottom: 20,
      "& > label": {
        // color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: "5px",
        display: "block",
      },
      "& .MuiInputLabel-asterisk": {
        color: AngelMindsRequiredAsteriskColor,
      },
    },
    fieldWidth: {
      "& > div": {
        width: 361,
      },
    },
    errorBorder: {
      border: "1px solid red",
      borderRadius: "5px",
    },
  })
);

export interface IAngelMindsTextFieldProps {
  required?: boolean;
  name: string;
  placeholder?: string;
  multiline?: boolean;
  label?: string;
  inputLabel: string;
  size?: "small" | "medium";
  value: any;
  disabled?: boolean;
  error?: boolean;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  style?: React.CSSProperties | undefined;
  helperText?: string;
  inputProps?: InputBaseComponentProps | undefined;
  // work around the browser required attibute
  isRequired?: boolean;
  fullWidth?: boolean;
  type?: string;
  defaultValue?: string;
  helpTooltipText?: string;
  color?: string;
  onBlur?: (event?: React.FocusEvent<any, Element> | undefined) => void;
}

const TextField: FC<IAngelMindsTextFieldProps> = ({
  required = false,
  name,
  placeholder = "",
  label = "",
  inputLabel,
  size = "small",
  value,
  disabled,
  error,
  onChange,
  multiline,
  style,
  helperText = "",
  fullWidth = false,
  inputProps,
  isRequired,
  type = "text",
  defaultValue = "",
  onBlur,
}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.field} ${!fullWidth ? classes.fieldWidth : ""}`}>
      <ControlLabel
        required={required}
        isRequired={isRequired}
        inputLabel={inputLabel}
      />
      <MuiTextField
        fullWidth={fullWidth}
        error={error}
        // className={error ? classes.errorBorder : ''}
        name={name}
        placeholder={placeholder}
        label={label}
        value={value}
        required={required}
        size={size}
        disabled={disabled}
        multiline={multiline}
        variant="outlined"
        onChange={onChange}
        style={style}
        helperText={helperText}
        inputProps={inputProps}
        type={type}
        defaultValue={defaultValue}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextField;
