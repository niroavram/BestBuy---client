import React,{useCallback,useState} from "react";
import { Box,Typography } from '@mui/material';
import useStyles from "./style";
import BaseButton from "../Buttons/BaseButton";


 const PageAction = ({productsDetails,setElements_by_users,elements_by_users}) => {
    const classes = useStyles();
    const [currentPage,setCurrentPage]=useState(elements_by_users.page)
    const NextPage = useCallback(() => {
    let p = {...elements_by_users}
    p["page"] = currentPage + 1;
    setCurrentPage(currentPage+1)
    console.log(currentPage,elements_by_users)
    setElements_by_users(p);
  }, []);
  
  const PrevPage = useCallback(() => {
    let p = {...elements_by_users};
    p["page"] = p.page - 1;
    setElements_by_users(p);
  }, []);

  return (
    <Box className={classes.pageNextPrev}>
    {productsDetails ? (
      <>
        {productsDetails.currentPage !== 1 ? (
          <BaseButton text="Prev" onClickB={PrevPage} />
        ) : null}
        <Typography>
          {productsDetails.currentPage} of {productsDetails.total}{" "}
        </Typography>

        {productsDetails.currentPage !== productsDetails.total ? (
          <BaseButton text="Next" onClickB={NextPage} />
        ) : null}
      </>
    ) : null}
  </Box>
  );
}

export default PageAction;