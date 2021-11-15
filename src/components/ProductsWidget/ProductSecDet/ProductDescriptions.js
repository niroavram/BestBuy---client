import React from "react";
import useStyles from "../style";
import { COLORS, images } from "../../../constants";
import { Typography, IconButton } from "@mui/material";
import BaseButton from "../../Buttons/BaseButton";
import EditIcon from "@mui/icons-material/Edit";

const ProductDescriptions = ({
  selectedProduct,
  setProductType,
  productType,
  deleteProduct,
  productSectionManeger
}) => {
  const classes = useStyles();
  const handleClickEdit = () => {
    productSectionManeger('edit');
  };
  const handleClickDeleteItem = (p) => {
    deleteProduct(p);
  };
  return (
    <>
      {selectedProduct ? (
        <div>
          <Typography className={classes.titleA}>
            {" "}
            {selectedProduct.name}
          </Typography>
          <IconButton size="medium" onClick={handleClickEdit}>
            edit <EditIcon />
          </IconButton>
        
          <Typography>
            Reviews Avg {selectedProduct.customerReviewAverage}
          </Typography>
          <Typography>Price {selectedProduct.salePrice}</Typography>
          <Typography> {selectedProduct.shortDescription}</Typography>
          <BaseButton
            text="Delete"
            coolor={COLORS.red}
            onClickB={() => handleClickDeleteItem(selectedProduct)}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDescriptions;
