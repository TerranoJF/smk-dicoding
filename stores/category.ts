import { defineStore } from 'pinia'
export const useCategoryStore = defineStore("category", {
    state: () => ({
        categories: {} as any,
        status: false,
        message: "",
    }),
    actions: {
        async createCategory(payload: any){
            const { baseUrl, apikey } = useAppConfig();
            const {data, error} = await useFetch("/rest/v1/categories", {
                baseURL: baseUrl,
                method: "POST",
                headers: {
                    apikey: apikey,
                },
                body: payload,
            })
            
            if(error.value){
                this.status = false;
                this.message = "Tambah Kategori Gagal !!!";
            }else if(data){
                this.status = true;
                this.message = "Tambah Kategori Berhasil";
                this.categories = data.value;
            }
        },
        async getAllCategory(){
            const { baseUrl, apikey } = useAppConfig();
            const {data, error} = await useFetch("/rest/v1/categories", {
                baseURL: baseUrl,
                method: "GET",
                headers: {
                    apikey: apikey,
                },
            })
            
            if(error.value){
                this.status = false;
                this.message = "Get Products Failed !!!";
            }else if(data){
                this.status = true;
                this.message = "Get Products successfully";
                this.categories = data.value;
            }
        },
        async deleteCategoryById(id: number){
            const { baseUrl, apikey } = useAppConfig();
            const {data, error} = await useFetch(`/rest/v1/categories?id=eq.${id}`, {
                baseURL: baseUrl,
                method: "DELETE",
                headers: {
                    apikey: apikey,
                },
            })
            
            if(error.value){
                this.status = false;
                this.message = "Hapus Kategori Gagal !!!";
            }else if(data){
                this.status = true;
                this.message = "Hapus Kategori Berhasil";
                this.categories = data.value;
            }
        },
    }
})