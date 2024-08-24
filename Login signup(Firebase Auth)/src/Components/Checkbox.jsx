import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes({checkline}) {
  return (
    <div>
      <Typography fontSize={13}>
      <Checkbox {...label} />{checkline}
      </Typography>
      
 
    </div>
  );
}