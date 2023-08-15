import axios from "axios";

export default {
  async getProducts(payload) {
    const query = payload.search
      ? `products?page=${payload.page}&search=${payload.search}`
      : `products?page=${payload.page}`;
    return await axios.get(query).then((response) => response.data.payload || []);
  },
  getAllProducts() {
    return axios
      .get("products/all")
      .then((response) => response.data.payload || []);
  },
  async getProductByUuid(uuid) {
    return await axios
      .get(`products/uuid/${uuid}`)
      .then((response) => response.data.payload || []);
  },
  getProductById(id) {
    return axios
      .get(`products/${id}`)
      .then((response) => response.data.payload || []);
  },
  deleteProduct(id) {
    return axios.delete(`products/${id}`);
  },
  addProduct(product) {
    return axios
      .post("products", product)
      .then((response) => response.data.payload || null);
  },
  editProduct(product) {
    return axios
      .put(`products/${product.id}`, product)
      .then((response) => response.data.payload || null);
  },
};
