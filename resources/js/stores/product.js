import { defineStore } from 'pinia'
import productsService from "@/services/api/products.service.js";

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    product: null,
    loading: false,
    error: null
  }),
  getters: {
    
  },
  actions: {
    async fetchProducts(payload) {
      this.products = []
      this.loading = true
      try {
        this.products = await productsService.getProducts(payload)
          .then((response) => response)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchProductByUuid(uuid) {
      console.log(uuid)
      this.product = null
      this.loading = true
      try {
        this.product = await productsService.getProductByUuid(uuid)
          .then((response) => response)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})