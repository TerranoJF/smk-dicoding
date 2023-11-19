<!-- <script lang="ts" setup>
    import { products } from '~/composables/constants/products';
    
    const selectedCategory = ref("");
    
    const allProducts = computed(() => {
            if (selectedCategory.value) {
                return products.filter((item) => item.category === selectedCategory.value);
        }
        return products;
    });
</script> -->

<script lang="ts" setup>
    import { useProductsStore } from "~/stores/products";

    const productStore = useProductsStore();
    const allProducts = ref([]);

    productStore.getAllProducts().then(() => {
        allProducts.value = productStore.products;
    });

    const selectedCategory = ref("");
    console.log(allProducts);
    
</script>

<template>
    <section>
        <div class="container">
            <div class="py-5">
                <div class="mb-6 flex justify-end gap-6">
                    <NuxtLink to="/product/create" class="bg-green-500 text-white flex justify-center items-center px-3 rounded-lg">Create Products</NuxtLink>
                    <NuxtLink to="/category/create" class="bg-orange-500 text-white flex justify-center items-center px-3 rounded-lg">Create Category</NuxtLink>
                    <Dropdown @selected-category="selectedCategory = $event" />
                </div>
                <div class="flex gap-6 flex-wrap mx-auto">
                    <template v-for="(item, index) in allProducts" :key="index">
                        <CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]"/>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>