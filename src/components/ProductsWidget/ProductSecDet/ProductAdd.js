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

const ProductAdd = ({ productSectionManeger, setProductsDetails }) => {
  const [name, setName] = useState("");
  const [salePrice, setPrice] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [customerReviewAverage, setCustomerReviewAverage] = useState("");
  const classes = useStyles();
  const addProduct = useCallback((item) => {
    let s = JSON.parse(localStorage.getItem("products"));
    let productsAFterAdd = s.products;
    productsAFterAdd.push(item);
    s["products"] = productsAFterAdd;
    localStorage.setItem("products", JSON.stringify(s));
    setProductsDetails(JSON.parse(localStorage.getItem("products")));
  }, []);
  const handleClickAdd = () => {
    let p = {};
    p["name"] = name;
    p["salePrice"] = salePrice;
    p["shortDescription"] = shortDescription;
    p["customerReviewAverage"] = 0;
    p["sku"] = Math.floor(100000000 + Math.random() * 900000000);
    addProduct(p);
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
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <AddBoxIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add New Product
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={() => handleClickAdd()}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="Price"
              label="Price"
              value={salePrice}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="descripton"
              label="Descripton"
              value={shortDescription}
              onChange={(e) => setshortDescription(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
        >
          Add Product
        </Button>
      </Box>
    </Box>
  );
};

export default ProductAdd;
