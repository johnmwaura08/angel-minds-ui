import type { FC } from "react";

import { TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { AngelMindsRequiredAsteriskColor, type Theme } from "theme";

import { ControlLabel } from "./ControlLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      paddingBottom: 20,
      width: "100%",
      "& div": {
        width: "100%",
      },
      "& > label": {
        color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: "5px",
        display: "block",
      },
      "& .MuiInputLabel-asterisk": {
        color: AngelMindsRequiredAsteriskColor,
      },
    },
  })
);

interface IProps {
  name: string;
  placeholder?: string;
  inputLabel: string;
  className?: string;
  multiline?: boolean;
  value: string | number;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  inputProps?: any;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  helpTooltipText?: string;
  required?: boolean;
  maxRows?: number;
  style?: React.CSSProperties | undefined;
}

const TextArea: FC<IProps> = ({
  name,
  placeholder = "",
  inputLabel,
  className,
  multiline,
  value,
  onChange,
  inputProps,
  disabled,
  error,
  helperText,
  required,
  maxRows,
  style,
}) => {
  const classes = useStyles();
  // TODO: CHANGE TEXTAREA COMPONENT TO USE TEXTFIELD WITH MULTILINE=TRUE AND ROWSMAX=4

  return (
    <div className={classes.field}>
      <ControlLabel inputLabel={inputLabel} required={required} />
      <TextField
        name={name}
        className={className}
        multiline={multiline}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="outlined"
        inputProps={inputProps}
        disabled={disabled}
        maxRows={maxRows}
        error={error}
        helperText={helperText}
        style={style}
      />
    </div>
  );
};

export default TextArea;
