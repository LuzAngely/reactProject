// import axios from 'axios';

// const baseURL = 'https://api-colombia.com/api';
// const getPost = axios.get(baseURL+'/v1/IndigenousReservation');

// export default {
//     getPost
// }

import axios from 'axios';

const baseURL = 'https://api-colombia.com/api';
const getPost = () => axios.get(baseURL + '/v1/IndigenousReservation');

export default {
    getPost
};