interface AuthPayload {
    email?: string;
    password?: string;
  }
  
  export const useAuthStore = defineStore("auth", {
    state: () => ({
      status: false,
      message: "",
    }),
    actions: {
      setAccessToken(data: any) {
        const cookie = useCookie("access_token", { maxAge: data.expires_in });
        cookie.value = data.access_token;
      },
      setRefreshToken(data: any) {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const cookie = useCookie("refresh_token", { expires: date });
        cookie.value = data.refresh_token;
      },
      async login(payload: AuthPayload) {
        try {
          const { baseUrl, apikey } = useAppConfig();
          const response: { access_token: string, refresh_token: string, expires_in: number, user?: { id: string } } = await $fetch("/auth/v1/token?grant_type=password", {
            baseURL: baseUrl,
            method: "POST",
            headers: {
              apikey: apikey,
              "Content-Type": "application/json",
            },
            body: payload,
          });
            
          // Cek user ID dan set peran admin jika sesuai
          if (response.user && response.user.id === "56b649c2-3608-41ac-8234-59aaa9b70c9c") {
            // Anda dapat menetapkan peran admin di sini
            const cookie = useCookie("user_role");
            cookie.value = "admin";
          }
          const cookie = useCookie("user_role");
            cookie.value = "user"; 
      
          this.setAccessToken(response);
          this.setRefreshToken(response);
          this.status = true;
          this.message = "Login Successfully !!!";
      
        } catch (error) { 
          this.status = false;
          this.message = "Login Failed !!!";
        }
      },
      async register(payload: AuthPayload) {
        try {
          const { baseUrl, apikey } = useAppConfig();
          const response = await $fetch("/auth/v1/signup", {
            baseURL: baseUrl,
            method: "POST",
            headers: {
              apikey: apikey,
              "Content-Type": "application/json",
            },
            body: payload,
          });
          this.setAccessToken(response);
          this.setRefreshToken(response);
          this.status = true;
          this.message = "Register Successfully !!!";
        } catch (error) {
          this.status = false;
          this.message = "Register Failed !!!";
        }
      },
      async logout() {
        try {
          const { baseUrl, apikey } = useAppConfig();
          const accessToken = useCookie("access_token").value;
          const response = await $fetch("/auth/v1/logout", {
            baseURL: baseUrl,
            method: "POST",
            headers: {
              apikey: apikey,
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });
          this.status = true;
          this.message = "Logout Successfully !!!";
        } catch (error) {
          console.log(error);
          this.status = false;
          this.message = "Logout Failed !!!";
        }
      },
    },
  });