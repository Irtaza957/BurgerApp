import axios from "axios"

const instance =axios.create ({
    baseURL: 'https://my-burger-app-b263a-default-rtdb.firebaseio.com/'
})

export default instance


