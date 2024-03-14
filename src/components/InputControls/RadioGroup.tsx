import type { FC } from 'react';

import {
  FormControl,
  FormControlLabel,
  InputLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import type { Theme } from 'theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      marginBottom: 20,
      width: '100%',
      '& div': {
        width: '100%',
      },
      '& > label': {
        color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: '5px',
        display: 'block',
      },
    },
  })
);

interface Options {
  label: string;
  value: string | boolean;
}

interface IProps {
  name: string;
  inputLabel: string;
  options: Array<Options>;
  value: string | number | boolean;
  onChange: (e) => void;
}

const RadioGroup: FC<IProps> = ({ name, inputLabel, options, value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.field}>
      <InputLabel>{inputLabel}</InputLabel>
      <FormControl size="small">
        <MuiRadioGroup
          row
          aria-label="design-authority"
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((opt) => (
            <FormControlLabel
              key={opt.label}
              value={opt.value}
              control={<Radio color="primary" />}
              label={opt.label}
            />
          ))}
        </MuiRadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioGroup;
