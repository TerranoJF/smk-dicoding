 <script lang="ts" setup>
    import { useProductsStore } from "~/stores/products";

    definePageMeta({
        middleware: ["user-access"]
    });

    const productStore = useProductsStore();
    const allProducts = ref([]);

    productStore.getAllProducts().then(() => {
        allProducts.value = productStore.products;
    });

    const selectedCategory = ref("");
   
    // Gunakan watch untuk memantau perubahan pada selectedCategory
    watch(() => selectedCategory.value, async (newCategory) => {
        if (newCategory) {
            // Jika selectedCategory memiliki nilai, ambil produk berdasarkan kategori
            await productStore.getFilterProductByCategory(newCategory);
            allProducts.value = toRaw(productStore.products);
        } else {
            // Jika selectedCategory kosong, tampilkan semua produk
            await productStore.getAllProducts();
            allProducts.value = toRaw(productStore.products);
        }
    });
    
    const token = useCookie("user_role").value;

    const isAdmin = computed(() => token === 'admin');

</script>

<template>
    <section>
        <div class="container">
            <div class="py-5">
                <div class="mb-6 flex justify-end gap-6">
                    <NuxtLink  v-if="isAdmin" to="/product/create" class="bg-green-500 text-white flex justify-center items-center px-3 rounded-lg">Tambah Produk</NuxtLink>
                    <NuxtLink v-if="isAdmin" to="/category/create" class="bg-orange-500 text-white flex justify-center items-center px-3 rounded-lg">Tambah Kategori</NuxtLink>
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