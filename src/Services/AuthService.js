import http from './http-common';

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