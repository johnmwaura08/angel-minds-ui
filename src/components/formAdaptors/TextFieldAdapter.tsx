import TextField, {
  IAngelMindsTextFieldProps,
} from "components/InputControls/TextField";
import type { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<any, any> & IAngelMindsTextFieldProps;

export const TextFieldAdapter = ({ input, meta, ...rest }: Props) => {
  return (
    <TextField
      {...input}
      {...rest}
      onChange={(event) => input.onChange(event.target.value)}
      error={meta.error && meta.touched}
      helperText={meta.error && meta.touched ? meta.error : ""}
      onBlur={(event) => input.onBlur(event)}
    />
  );
};
