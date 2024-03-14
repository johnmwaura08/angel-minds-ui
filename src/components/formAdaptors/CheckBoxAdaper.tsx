import type { CheckboxProps } from "@mui/material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { IAngelMindsTextFieldProps } from "components/InputControls/TextField";
import type { FieldRenderProps } from "react-final-form";

type CheckBoxAdapterProps = Omit<IAngelMindsTextFieldProps, "onChange"> & {
  onChange: (e: any) => void;
};

type Props = FieldRenderProps<any, any> & CheckBoxAdapterProps;

export const CheckBoxAdapter = ({ input, label, color, ...rest }: Props) => {
  return (
    <FormGroup {...rest}>
      <FormControlLabel
        control={
          <Checkbox
            {...input}
            color={color as CheckboxProps["color"]}
            checked={input.value}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};
