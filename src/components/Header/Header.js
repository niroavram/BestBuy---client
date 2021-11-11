import React from "react";
import { Grid } from '@mui/material';
import useStyles from "./style";
import {images} from "../../constants";



 const Header = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.header} >
    <img src={images.Logo} alt="Logo" width="100vw"  height="90vh"/>
    </Grid>
  );
}

export default Header