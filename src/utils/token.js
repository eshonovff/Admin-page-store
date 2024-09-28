import { jwtDecode } from "jwt-decode";

 



export const getToken = () => {
    try {
         return jwtDecode(localStorage.getItem("access_token"))
    } catch (error) {
        console.error(error);
        
    }
}

export const romoveToken = () =>
    {
        localStorage.removeItem("access_token")
    }