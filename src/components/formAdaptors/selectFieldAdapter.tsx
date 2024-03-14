import Select, { ISelectProps } from "components/InputControls/Select";
import type { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<number, any> & ISelectProps;

export const SelectFieldAdapter = ({ input, meta, ...rest }: Props) => {
  return (
    <Select
      {...input}
      {...rest}
      helperText={meta.error && meta.touched ? meta.error : ""}
      error={meta.error && meta.touched}
      onBlur={(event) => input.onBlur(event)}
    />
  );
};
