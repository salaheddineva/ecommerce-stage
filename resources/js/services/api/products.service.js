import axios from "axios";

export default {
  async getProducts(payload) {
    const query = payload.search
      ? `products?page=${payload.page}&search=${payload.search}`
      : `products?page=${payload.page}`;
    // return await axios.get(query).then((response) => response.data.payload || []).catch((error)=>error);
    return await new Promise((resolve, reject) => {
      axios.get(query).then((response) => resolve(response.data.payload || [])).catch((error) => reject(error));
    });
  },
  async getAllProducts() {
    return await new Promise((resolve, reject) => {
      axios.get(`products/all`).then((response) => resolve(response.data.payload || [])).catch((error) => reject(error));
    });
  },
  async getProductByUuid(uuid) {
    return await new Promise((resolve, reject) => {
      axios.get(`products/uuid/${uuid}`).then((response) => resolve(response.data.payload || null)).catch((error) => reject(error));
    });
  },
  async getProductById(id) {
    return await new Promise((resolve, reject) => {
      axios.get(`products/${id}`).then((response) => resolve(response.data.payload || null)).catch((error) => reject(error));
    });
  },
  async deleteProduct(id) {
    return await new Promise((resolve, reject) => {
      axios.delete(`products/${id}`).then((response) => resolve(response.data.payload || null)).catch((error) => reject(error));
    });
  },
  async addProduct(product) {
    return await new Promise((resolve, reject) => {
      axios.post("products", product).then((response) => resolve(response.data.payload || null)).catch((error) => reject(error));
    });
  },
  async editProduct(product) {
    return await new Promise((resolve, reject) => {
      axios.put(`products/${product.id}`, product).then((response) => resolve(response.data.payload || null)).catch((error) => reject(error));
    });
  },
};
