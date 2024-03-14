import type { ReactNode } from 'react';
import { Field } from 'react-final-form';

interface ConditionalFieldProps<T> {
  when: string;
  is?: T;
  isIn?: T[];
  children: ReactNode;
}

export const ConditionalField = <T,>({ when, is, children, isIn }: ConditionalFieldProps<T>) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => {
      if (is) {
        return value === is ? children : null;
      }
      if (isIn) {
        return isIn.includes(value) ? children : null;
      }

      return children;
    }}
  </Field>
);
