import { styled } from '@mui/material/styles';
import { spacer1, spacer2 } from 'theme';

const rteBorderRadius = '5px';
export const StyledFormDiv = styled('div')(({ theme }) => ({
  '& .rt-editor': {
    overflow: 'auto',
    resize: 'vertical',
    maxHeight: '200px',
    border: `1px solid ${theme.palette.secondary.light}`,
    padding: `0 ${spacer2}`,
    borderBottomLeftRadius: rteBorderRadius,
    borderBottomRightRadius: rteBorderRadius,
    marginTop: '-6px',
    lineHeight: '170%',
    '& .DraftEditor-root': {
      margin: '1em 0',
    },
    '& .public-DraftStyleDefault-block': {
      margin: '0 0',
    },
  },
  '& .rt-editor.error': {
    border: `1px solid ${theme.palette.error.main}`,
  },
  '& .error-text': {
    padding: spacer1,
    color: theme.palette.error.main,
  },
  '& > label': {
    color: theme.palette.common.black,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: '5px',
    display: 'block',
  },
}));
