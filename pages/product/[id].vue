<script lang="ts" setup> 
    import { useProductsStore } from "~/stores/products";

    const route = useRoute();
    const id = typeof route.params.id === 'string' ? parseInt(route.params.id) : null;
    const filteredProduct = useProductsStore();
    const product = ref([]); 

    onMounted(async () => {
        if (id) {
            await filteredProduct.getFilterProduct(id);
            product.value = toRaw(filteredProduct.products);
            // console.log(product.value);
            // console.log(product);
        }
    });

</script>

<template>
    <DetailProduct :product="product[0]"/>
</template>