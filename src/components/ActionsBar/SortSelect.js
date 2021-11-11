import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


 const SortSelect= ({setElements_by_users,elements_by_users,getProductsWithquery})=> {
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setElements_by_users({...elements_by_users,sort: event.target.value});
    setSort(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={'salePrice'}>Price</MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={'customerReviewAverage'}>Reviews</MenuItem>
          <MenuItem value={''}>None</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
export default SortSelect