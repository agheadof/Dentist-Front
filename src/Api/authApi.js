/* eslint-disable */
import api from "./Api";

class AuthService {
    login(payload) {
        return api
            .post("/login", payload)
            .then((response) => {
                if (response && response.data) {
                    console.log(response.data);
                    // Store login state and basic user data
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("user", JSON.stringify(response.data));
                    return response.data.user;
                }
            });
    }

    logout() {
        // Remove login state and user data
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

        // You can add any additional logic here, such as redirecting the user
        // window.location.href = '/login';

        return Promise.resolve();
    }

    getCurrentUser() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            const user = JSON.parse(localStorage.getItem("user"));
            return user;
        }
        return null;
    }

    isLoggedIn() {
        return localStorage.getItem("isLoggedIn") === "true";
    }
}

const authService = new AuthService();
export default authService;