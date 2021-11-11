import * as React from 'react';
import Button from '@mui/material/Button';

const BaseButton=({text,coolor})=> {
  return (
    <Button style={{backgroundColor: coolor,height:'5vh'}} variant="contained" disableElevation>
      {text}
    </Button>
  );
}

export default BaseButton;