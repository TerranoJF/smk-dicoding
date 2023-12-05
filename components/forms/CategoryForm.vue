<script lang="ts" setup> 
import { useCategoryStore } from '~/stores/category'; 
import { FormFieldCategory } from '~/types/category';
// import { eventBus } from '~/state/eventBus'; 
const categoryStore = useCategoryStore();

const isSuccess = ref(false);
const isShowAlert = ref(false);
const message = ref('');  
const isLoading = ref(false);

const formCreateCategory = [
  { name: "name", label: "Nama", type: "text", value: "", placeholder: "Kategori Baru", required: true },
];

const createCategory = async () => {
    isLoading.value = true; 

    const result: { [key: string]: any } = {};
    formCreateCategory.forEach((item: FormFieldCategory) => {
      if(item.name){
        result[item.name] = item.value;
      }
    })  

    await categoryStore.createCategory(result);
    if(!categoryStore.status){
      isSuccess.value = categoryStore.status;
      message.value = categoryStore.message;
      isShowAlert.value = true;
      isLoading.value = false;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }else{
      isSuccess.value = categoryStore.status;
      message.value = categoryStore.message;
      isShowAlert.value = true;
      isLoading.value = false;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => { 
        // eventBus.emit('categoryCreated');
      }, 1000);
    }
  }
 
</script>
<template>
    <section class="flex justify-center py-10">
        <div class="w-[500px]">
            <h1 class="text-2xl mb-7 font-medium">Tambah Kategori</h1>

            <div v-if="isShowAlert" :class="`p-4 mb-4 text-sm rounded-lg ${isSuccess ? 'bg-green-100 text-green-800' : 'text-red-800 bg-red-100'}`" role="alert">
        {{ message }}
            </div>

            <form @submit.prevent="createCategory">
                <div class="mb-6" v-for="(item, index) in formCreateCategory" :key="index">
                    <div class="mb-6">
                        <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-900" >{{ item.label }}</label>

                        <input  :type="item.type" :id="item.name" v-model="item.value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="item.placeholder" :required="item.required" >
 
                    </div>
                    <button type="submit" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        <span v-if="!isLoading">Kirim</span>
                        <div v-else class="flex items-center gap-3">
                            <div class="w-5 h-5 rounded-full border-2 border-t-blue-500 animate-spin"></div>
                            <span>Loading</span>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>