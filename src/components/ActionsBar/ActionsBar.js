import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./style";
import { images } from "../../constants";
import SearchButton from "./SearchButton";
import BaseButton from "../Buttons/BaseButton";
import SortSelect from "./SortSelect";

const ActionsBar = ({
  setElements_by_users,
  setSearch,
  getProductsWithquery,
  elements_by_users,
  productType,
  setProductType
}) => {
  const classes = useStyles();
  const onHandleClick = () => {
    let pages = productType;
    for (let key in pages) {
      if (key === 'add') {
        pages[key] = true;
      } else {
        pages[key] = false;
      }
    }
    setProductType(pages);  
};

  return (
    <div className={classes.header}>
      <BaseButton text="Add" onClickB={()=>onHandleClick()} />
      <SearchButton setSearch={setSearch} />
      <SortSelect
        setElements_by_users={setElements_by_users}
        getProductsWithquery={getProductsWithquery}
        elements_by_users={elements_by_users}
      />
    </div>
  );
};

export default ActionsBar;
