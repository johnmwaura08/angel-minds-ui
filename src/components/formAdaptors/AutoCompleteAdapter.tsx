/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from "react";
import type { FieldRenderProps } from "react-final-form";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  TextField as MuiTextField,
  FormControl,
  FormHelperText,
  Chip,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import type { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { ControlLabel } from "components/InputControls/ControlLabel";
import { AngelMindsRequiredAsteriskColor } from "theme";

export type SelectValue = { id: number; name: string };
interface IProps extends FieldRenderProps<number, any> {
  disabled?: boolean;
  label: string;
  options: SelectValue[];
  value: SelectValue[] | undefined;
  htmlId: string;
  helperText?: string;
  helpTooltipText?: string;
  isRequired?: boolean;
  onBlur?: (event?: React.FocusEvent<any, Element> | undefined) => void;
}

export const AutoCompleteAdapter: FC<IProps> = ({
  input,
  meta,
  onBlur,
  ...rest
}) => {
  const classes = useStyles();
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  return (
    <div className={classes.select}>
      <ControlLabel isRequired={rest.isRequired} inputLabel={rest.label} />
      <FormControl fullWidth error={meta.error && meta.touched}>
        <Autocomplete
          onBlur={onBlur}
          disabled={rest.disabled}
          multiple
          id={rest.htmlId}
          value={rest.value}
          options={rest.options ?? []}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(e, value) => {
            input.onChange(value);
          }}
          renderOption={(props, option) => (
            <li {...props} key={option?.id}>
              <Checkbox
                onBlur={onBlur}
                color="secondary"
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={rest.value?.map((v) => v.id)?.includes(option.id)}
              />
              {option.name}
            </li>
          )}
          renderInput={(params) => (
            <MuiTextField
              {...params}
              variant="outlined"
              placeholder=""
              className={meta.error && meta.touched ? classes.errorBorder : ""}
              error={meta.error && meta.touched}
            />
          )}
          renderTags={(value: readonly SelectValue[], getTagProps) =>
            value.map((option: SelectValue, index: number) => (
              <Chip
                label={option.name}
                {...getTagProps({ index })}
                onDelete={(e) => {
                  getTagProps({ index }).onDelete(e);
                  onBlur && onBlur(e);
                }}
              />
            ))
          }
        />
        <FormHelperText error={meta.error && meta.touched}>
          {rest.helperText}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      minWidth: 250,
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
    errorBorder: {
      border: "1px solid red",
      borderRadius: "5px",
    },
    listItem: {
      display: "flex",
      width: "100%",
    },
  })
);
