<script lang="ts" setup>
    import { useCategoryStore } from '~/stores/category'; 
    // import { eventBus } from '~/state/eventBus'; 
    

    const categoryStore = useCategoryStore();
    const categoryDelete = useCategoryStore();
    const { categories } = storeToRefs(categoryStore);
    categoryStore.getAllCategory();

    const isSuccess = ref(false);
    const isShowAlert = ref(false);
    const message = ref(""); 

    const deleteCategory = async (id: number) => {
        try { 
        await categoryDelete.deleteCategoryById(id); 
            if(!categoryDelete.status){
                isSuccess.value = categoryDelete.status;
                message.value = categoryDelete.message;
                isShowAlert.value = true; 
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }else{
                isSuccess.value = categoryDelete.status;
                message.value = categoryDelete.message;
                isShowAlert.value = true; 
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                }); 
                categoryStore.getAllCategory(); 
            } 

            setTimeout(async () => {
                isShowAlert.value = false; 
            }, 3000);

        } catch (error) { 
        console.error(error);
        }
    }

    // const categories = ref([]);

    // // Listen for the 'categoryCreated' event
    // eventBus.component.provide.onMounted(() => {
    //     eventBus.component.provide.on('categoryCreated', async () => {
    //         // Refresh categories after a delay
    //         setTimeout(async () => {
    //         await categoryStore.getAllCategory();
    //         categories.value = categoryStore.categories; // Update local categories
    //         }, 1000);
    //     });
    // });
</script>

<template>
    <section class="flex justify-center w-400px py-5">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div v-if="isShowAlert" :class="`p-4 mb-4 text-sm rounded-lg ${isSuccess ? 'bg-green-100 text-green-800' : 'text-red-800 bg-red-100'}`" role="alert">
          {{ message }}
        </div>

            <table class="min-w-full border p-4">
                <thead>
                    <tr>
                        <th class="border p-2">No</th>
                        <th class="border p-2">Nama</th>
                        <th class="border p-2">ID Unik</th>
                        <th class="border p-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in categories" :key="index">
                        <td class="border p-2 text-center">{{ index + 1 }}</td>
                        <td class="border p-2 text-center">{{ item?.name }}</td>
                        <td class="border p-2 text-center">{{ item?.id }}</td>
                        <td class="border p-2 flex justify-center items-center">
                            <button @click="deleteCategory(item.id)" class="bg-red-500 text-white px-4 py-2 mr-2 rounded">Hapus</button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>