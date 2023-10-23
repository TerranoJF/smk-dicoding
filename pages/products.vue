<template>
     <section class="py-2"> 
        <div class="container mx-auto">  
            <div class="flex flex-col items-center">

                <h2 class="text-3xl font-semibold mb-6">Produk Terpopuler</h2>

                <div class="dash-card grid md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-8 justify-center items-center">
                    <!-- Produk 1 -->
                    <div class="bg-white p-4 flex flex-col h-full">
                        <img src="/images/dash/hood1.jpeg" alt="Produk 1" class="w-full h-64 object-fill mb-4" />
                        <h3 class="text-xl font-semibold mb-2">5  T-Shirt</h3>
                        <p class="text-gray-700  flex-grow">The humble T-shirt is perhaps the most important staple in any man's wardrobe.Simple, stylish and iconic.</p>
                        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Beli Sekarang</button>
                    </div>

                    <!-- Produk 2 -->
                    <div class="bg-white p-4 flex flex-col h-full">
                        <img src="/images/dash/hood2.jpeg" alt="Produk 2" class="w-contain h-64 object-fill mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Men Floral & Letter Graphic</h3>
                        <p class="text-gray-700  flex-grow"> Men Floral & Letter Graphic Colorblock Drawstring Hoodie at SHEIN.</p>
                        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Beli Sekarang</button>
                    </div>

                    <!-- Produk 3 -->
                    <div class="bg-white p-4 flex flex-col h-full">
                        <img src="/images/dash/hood.jpeg" alt="Produk 3" class="w-contain h-64 object-cover mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Restaint</h3>
                        <p class="text-gray-700  flex-grow">Stylish Hoodie</p>
                        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Beli Sekarang</button>
                    </div>

                    
                    <!-- Produk 2 -->
                    <div class="bg-white p-4 flex flex-col h-full">
                        <img src="/images/dash/hood3.jpeg" alt="Produk 2" class="w-contain h-64 object-fill mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Men Floral & Letter Graphic</h3>
                        <p class="text-gray-700  flex-grow"> Men Floral & Letter Graphic Colorblock Drawstring Hoodie at SHEIN.</p>
                        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Beli Sekarang</button>
                    </div>

                    <!-- Produk 3 -->
                    <div class="bg-white p-4 flex flex-col h-full">
                        <img src="/images/dash/hood.jpeg" alt="Produk 3" class="w-full h-64 object-cover mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Restaint</h3>
                        <p class="text-gray-700  flex-grow">Stylish Hoodie</p>
                        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Beli Sekarang</button>
                    </div>
                </div>

            </div>
        </div>
</section>
</template> 

<style scoped>
.dash-card div{
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.4); /* Sesuaikan bayangan di sini */
}
</style>