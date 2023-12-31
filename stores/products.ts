import { defineStore } from 'pinia'
export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [] as any,
        status: false,
        message: "",
    }),
    actions: {
        async createProduct(payload: any){
            const { baseUrl, apikey } = useAppConfig();
            const {data, error} = await useFetch("/rest/v1/products", {
                baseURL: baseUrl,
                method: "POST",
                headers: {
                    apikey: apikey,
                },
                body: payload,
            })
            
            if(error.value){
                this.status = false;
                this.message = "Create Products Failed !!!";
            }else if(data){
                this.status = true;
                this.message = "Create Products successfully";
            }
        },

        async getAllProducts(){
            const { baseUrl, apikey } = useAppConfig();
            const {data, error} = await useFetch("/rest/v1/products", {
                baseURL: baseUrl,
                method: "GET",
                headers: {
                    apikey: apikey,
                },
            });
            
            if(error.value){
                this.status = false;
                this.message = "Get Products Failed !!!";
            }else if(data){
                this.status = true;
                this.message = "Get Products successfully";
                this.products = data.value;
            }
        },

        async getFilterProduct(id : number){
            const { baseUrl, apikey } = useAppConfig();
            const {data, error} = await useFetch(`/rest/v1/products?id=eq.${id}&select=*`, {
                baseURL: baseUrl,
                method: "GET",
                headers: {
                    apikey: apikey,
                },
            });
            
            if(error.value){
                this.status = false;
                this.message = "Get Filtered Product Failed !!!";
            }else if(data){
                this.status = true;
                this.message = "Get Filtered Product successfully";
                this.products = data.value;
                console.log(this.products);
            }
        }, 
        async getFilterProductByCategory(category :string ) {
            const { baseUrl, apikey } = useAppConfig();
            const {data, error} = await useFetch(`/rest/v1/products?category=eq.${category}&select=*`, {
                baseURL: baseUrl,
                method: "GET",
                headers: {
                    apikey: apikey,
                },
            });
            
            if(error.value){
                this.status = false;
                this.message = "Get Filtered Product Failed !!!";
            }else if(data){
                this.status = true;
                this.message = "Get Filtered Product successfully";
                this.products = data.value;
                console.log(this.products);
            }
        },

    }
})