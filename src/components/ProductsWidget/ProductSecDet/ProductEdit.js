import React, { useState, useCallback } from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Avatar,
  Link,
  Button,
} from "@mui/material";
import useStyles from "../style";
import ActionsBar from "../../ActionsBar/ActionsBar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BaseButton from "../../Buttons/BaseButton";

const ProductEdit = ({
  selectedProduct,
  setProductsDetails,
  productSectionManeger,
}) => {
  const [name, setName] = useState(selectedProduct.name);
  const [salePrice, setPrice] = useState(selectedProduct.salePrice);
  const [shortDescription, setshortDescription] = useState(
    selectedProduct.shortDescription
  );
  const [product, setProduct] = useState(selectedProduct);
  const classes = useStyles();
  const editProduct = useCallback((item) => {
    let s = JSON.parse(localStorage.getItem("products"));
    let productsAFterDelete = s.products.map((p) => {
      if (p.sku === item.sku) {
        return item;
      }
      return p;
    });
    s["products"] = productsAFterDelete;
    localStorage.setItem("products", JSON.stringify(s));
    setProductsDetails(JSON.parse(localStorage.getItem("products")));
  }, []);
  const handleClickEdit = () => {
    let p = selectedProduct;
    p["name"] = name;
    p["salePrice"] = salePrice;
    p["shortDescription"] = shortDescription;
    editProduct(p);
    productSectionManeger("description");
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Edit Product
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="Name"
              defaultValue={product.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="Price"
              label="Price"
              defaultValue={product.salePrice}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="descripton"
              label="Descripton"
              defaultValue={
                product.shortDescription ? product.shortDescription : ""
              }
              onChange={(e) => setshortDescription(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
          onClick={handleClickEdit}
        >
          Edit Product
        </Button>
      </Box>
    </Box>
  );
};

export default ProductEdit;
