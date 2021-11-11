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
}) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <BaseButton text="Add" />
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
