<script lang="ts" setup>
    import { useAuthStore } from "~/stores/auth"
    const authStore = useAuthStore();
    const isAuthenticated = ref();
    const router = useRouter();

    isAuthenticated.value = useCookie("access_token").value;

    const logout = async () => {
        await authStore.logout();
        const accessToken = useCookie("access_token");
        const refreshToken = useCookie("refresh_token");
        const roleToken = useCookie("user_role");
        roleToken.value = null;
        accessToken.value = null;
        refreshToken.value = null;
        setTimeout(() => { isAuthenticated.value = useCookie("access_token").value;
        }, 100);
        router.push({
            path: "/"
        })
    }
</script>

<template>
<!--  versi normal " w-full border-b border-slate-200 py-4" -->
<header class="w-full border-b border-slate-200 py-4"> 

<!-- <header class="fixed top-0 bg-white z-50   w-full border-b border-slate-200 py-4">   -->

    <div class="container">
        <div class="flex justify-between items-center">
            <div>
                <NuxtLink to="/" class="text-xl font-bold mr-4 ml-4">Terra Shop</NuxtLink>
            </div>
            <nav class="flex items-center gap-6">
                <NuxtLink to="/" class="text-base">Beranda</NuxtLink>

                <!-- <NuxtLink to="/products/" class="text-base">Produk-aing</NuxtLink> -->

                <NuxtLink to="/product/" class="text-base"> Produk </NuxtLink>

                <NuxtLink to="/cart/" class="text-base">Keranjang</NuxtLink>
 
                <NuxtLink v-if="!isAuthenticated" to="/login" class="text-base bg-blue-600
                px-6 py-2 text-white rounded-lg hover:bg-blue-600/80">Masuk</NuxtLink>
                <div v-else class="text-base cursor-pointer bg-red-600 px-6 py-2 text-white
                rounded-lg hover:bg-red-600/80" @click="logout">Keluar</div>
            </nav>
        </div>
    </div>
</header>
</template>
