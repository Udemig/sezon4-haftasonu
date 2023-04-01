import axios from 'axios'

export default function useApi() {
    axios.defaults.baseURL = 'burayı sonra doldur'

    return axios
}