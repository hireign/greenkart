/**
 * Services for search related REST API calls
 *
 * @author [Hiren Khant](hr266981@dal.ca)
 */
import Axios from "axios";
//returns all the products from the database
async function getAllProducts() {
  let res = await Axios.get("/searchBackend");
  return res.data;
}
//returns products based on provided parameter
export default async function searchProduct(args) {
  // console.log("called searchProduct api: " + args);
  let res = await Axios.get(`/searched/${args}`);
  return res.data;
}

export { getAllProducts, searchProduct };
