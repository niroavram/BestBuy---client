import React from "react";
import { Grid, Typography, IconButton, Button, Link } from "@mui/material";
import useStyles from "./style";
import BaseButton from "../Buttons/BaseButton";
import EditIcon from "@mui/icons-material/Edit";
import { COLORS } from "../../constants";

const Product = ({ products, setSelectedProduct, selectedProduct }) => {
  const classes = useStyles();
  const onHandleClick = (p) => {
    setSelectedProduct(p);
  };
  // console.log(products)
  return (
    <div className={classes.products}>
      {products.map((product) => {
        return (
          <div
            component="button"
            key={product.sku}
            container
            className={classes.product}
          >
            <Link
              onClick={() => onHandleClick(product)}
              className={classes.productImage}
            >
              <img src={product.image} alt="Logo" width="100vw" height="90vh" />
            </Link>
            <Link
              onClick={() => onHandleClick(product)}
              component="button"
              className={classes.productDesc}
            >
              <Typography>
                {product.name ? product.name.slice(0, 20) : ""}
              </Typography>
              <Typography maxLength={20}>
                {product.shortDescription
                  ? product.shortDescription.slice(0, 19)
                  : ""}
              </Typography>
            </Link>
            <Link
              onClick={() => onHandleClick(product)}
              component="button"
              className={classes.productAction}
            >
              <Typography>Price {product.salePrice}</Typography>
              <Typography>Review {product.customerReviewAverage}</Typography>
            </Link>
            <div className={classes.productAction}>
            <BaseButton text="Delete" coolor={COLORS.red} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
