export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie("access_token").value;

    // Handle case when token is not present
    if (!token) {
        // if (to.path !== "/login") {
        //     await navigateTo("/login");
        //     return false; // Hindari pengalihan tak terbatas dengan mengembalikan false
        // }
        if (to.path !== "/login") {
            return navigateTo("/login")
            }
    }

    // Lanjutkan dengan navigasi normal jika tidak ada kondisi yang terpenuhi
    return true;
});
