/**
 * Created by Dan Stevenson on 7/30/2017.
 */
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class UserApi {
    static getUsername() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('React Developer');
            }, delay);
        });
    }
}

export default UserApi;
