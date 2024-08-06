import axios, { AxiosResponse } from "axios";

interface UserResponse {
  data: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
  };
}

interface LoginResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
  };
}

export const registerServiceApi = async (
  name: string,
  email: string,
  password: string,
  phoneNumber: string
): Promise<AxiosResponse<any> | void> => {
  console.log(name, email, password, phoneNumber);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/register",
      {
        name,
        email,
        password,
        phoneNumber,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const loginServiceApi = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      "http://localhost:5000/api/user/login",
      { email, password }
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const findUserByApi = async (
  id: string
): Promise<AxiosResponse<UserResponse> | void> => {
  try {
    const response = await axios.get<UserResponse>(
      `http://localhost:5000/api/user/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addProductServiceApi = async (
  name: string,
  price: number,
  description: string,
  image: string
): Promise<AxiosResponse<any> | void> => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/admin/addProduct",
      {
        name,
        price,
        description,
        image,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
