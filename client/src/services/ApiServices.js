import axios from 'axios'

//USER
export const registerServiceApi = async (name, email, password, phoneNumber) => {
    console.log(name, email, password, phoneNumber);
    try {
        const response = await axios.post("http://localhost:5000/api/user/register", { name, email, password, phoneNumber })


        return response
    } catch (error) {
        console.log(error);
    }

}

export const loginServiceApi = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/user/login', { email, password })
        return response
    }
    catch (error) {
        console.log(error);
    }
}

export const findUserByApi = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/user/${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}


//ADMIN


export const addProductServiceApi = async (name, price, description, image) => {
    try {
        const response = await axios.post('http://localhost:5000/api/admin/addProduct', { name, price, description, image })
        return response
    }
    catch (error) {
        console.log(error);
    }
}