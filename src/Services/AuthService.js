import http from './http-common';

const API_URL = "localhost:3001/api/v1" ;

/**
 * Class for login and logout services
 *
 */
class AuthService {
    login(data) {
        return (
            http.post('/user/login', data)
                .then((response) => {

                if (response.data.body.token) {
                    localStorage.setItem('token', JSON.stringify(response.data.body.token));
                }
            })
        )
    }

    logout() {
        localStorage.removeItem('token');
    }
}

export default new AuthService();