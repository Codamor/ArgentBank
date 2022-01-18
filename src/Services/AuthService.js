import axios from "axios" ;

const API_URL = "localhost:3001/api/v1" ;

/**
 * Class for login and logout services
 *
 */
class AuthService {

    login(userName, password){
        return (
            axios
                .post(API_URL + "user/login", {userName, password})
                .then(response => {
                    if (response.data.accessToken) {
                        localStorage.setItem("user", JSON.stringify(response.data)) ;
                    }

                    return response.data ;
                })
        )
    }
}

export default AuthService ;