import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// Interceptor to clean up headers
window.axios.interceptors.request.use((config) => {
    const method = (config.method || "get").toLowerCase();
    const isGet = method === "get";
    const isApi = (config.url || "").startsWith("/api/");

    if (isGet || !isApi) {
        // Remove JSON headers for Inertia/page requests
        delete config.headers["Content-Type"];
        delete config.headers["Accept"];
    } else {
        // Keep JSON headers for API calls
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
    }

    return config;
});
