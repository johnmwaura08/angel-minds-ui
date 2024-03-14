import TextArea from "components/InputControls/TextArea";
import { IAngelMindsTextFieldProps } from "components/InputControls/TextField";
import type { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<any, any> & IAngelMindsTextFieldProps;

export const TextAreaAdapter = ({ input, meta, ...rest }: Props) => {
  return (
    <TextArea
      {...input}
      {...rest}
      onChange={(event) => input.onChange(event.target.value)}
      error={meta.error && meta.touched}
      helperText={meta.error && meta.touched ? meta.error : ""}
      multiline
    />
  );
};
