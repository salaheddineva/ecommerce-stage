<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product";
import productsService from "@/services/api/products.service.js";
import { onMounted, reactive } from "vue";

const { products, loading, error } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

// const listProducts = reactive([]);
onMounted(() => {
    fetchProducts({
        search: "test",
        page: 1,
    });
    // productsService
    //     .getProducts({
    //         search: "test",
    //         page: 1,
    //     })
    //     .then((response) => {
    //         listProducts.push(...response);
    //     })
    //     .catch((error) => {
    //         console.log(error.response);
    //     });
});
</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">
                    Products
                </h1>
                <p class="mt-2 text-sm text-gray-700">
                    A list of all the Products
                </p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <router-link
                    :to="{ name: 'product.create' }"
                    type="button"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add product
                </router-link>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <p v-if="loading">Loading products...</p>
                <p v-if="error">{{ error.message }}</p>
                <div
                    class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                >
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    SKU
                                </th>
                                <th
                                    scope="col"
                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    actions
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="p in products" :key="p.uuid">
                                <td
                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                                >
                                    {{ p.name }}
                                </td>
                                <td
                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                >
                                    {{ p.sku }}
                                </td>
                                <td
                                    class="flex justify-center items-center space-x-2 whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                >
                                    <router-link
                                        :to="{
                                            name: 'product.show.details',
                                            params: { uuid: p.uuid },
                                        }"
                                        type="button"
                                        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        show
                                    </router-link>

                                    <router-link
                                        :to="{
                                            name: 'product.update',
                                            params: { id: p.uuid },
                                        }"
                                        type="button"
                                        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        update
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
