<script lang="ts" setup>
    const props = defineProps({
        product: {
            type: Object,
            default: {},
        }
    })
     
    const { baseStorageUrl } = useAppConfig();
</script>

<template> 

    <div class="dash-card bg-white shadow-xl p-6 rounded-xl flex gap-4 items-center">
        <div class="h-[150px] w-[130px] bg-gray-300 rounded-xl ">
            <img :src="baseStorageUrl + props.product.image" class="h-full w-full object-fill rounded-xl " />
        </div>
        <div class="w-full">
            <h5 class="text-xl font-semibold mb-2">{{ props.product.name }}</h5>
            <p class="text-lg font-light mb-3">Rp. {{ props.product.price }}</p>
            <div class="flex items-center justify-between">

                <div class="flex items-center border border-gray-300 w-max rounded-full">
                    <button class="cursor-pointer py-1 pl-4 pr-2 text-lg flex items-center justify-center">-</button>

                    <div class="py-1 px-2 text-lg flex items-center justify-center">1</div>

                    <button class="cursor-pointer py-1 pl-2 pr-4 text-lg flex items-center justify-center">+</button>

                </div> 
                <div class="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-full cursor-pointer" @click="$emit('removeCart', props.product.id)">
                    <i class="ri-delete-bin-7-fill text-sm text-gray-600"></i>
                    <span class="text-sm text-gray-500">Delete</span>
                </div>
                
            </div>
        </div>
    </div> 
</template>

<style scoped>
.dash-card{
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.2); /* Sesuaikan bayangan di sini */
}
</style>