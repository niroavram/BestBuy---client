import axios from "axios";

export const getProducts = async (elements_by_users,search) => {
    try {
      const res = await axios.post(
        " https://bestbuyserver.herokuapp.com/productsbyquery",
        { elements_by_users,search},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return res;
    } catch (e) {
      throw new Error("error fetching products", e);
    }
  };