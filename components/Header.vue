<template>
<!--  versi normal " w-full border-b border-slate-200 py-4" -->
<header class="w-full border-b border-slate-200 py-4"> 

<!-- <header class="fixed top-0 bg-white z-50   w-full border-b border-slate-200 py-4">   -->

    <div class="container">
        <div class="flex justify-between items-center">
            <div>
                <NuxtLink to="/" class="text-xl font-bold mr-4 ml-4">E-Commerce</NuxtLink>
            </div>
            <nav class="flex items-center gap-6">
                <NuxtLink to="/" class="text-base">Beranda</NuxtLink>

                <NuxtLink to="/products/" class="text-base">Produk-produk</NuxtLink>

                <NuxtLink to="/product/" class="text-base"> Produk </NuxtLink>

                <NuxtLink to="/profil/test/" class="text-base">Profile</NuxtLink>
            </nav>
        </div>
    </div>
</header>
</template>
