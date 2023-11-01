import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:9000" });
export const logIn = (formData) => API.post("/auth/login", formData);
// export const signUp = (formData) => API.post("/auth/register", formData);
export const signUp = async (formData) => {
  try {
    const response = await API.post("/auth/register", formData);
    return response.data;
  } catch (error) {
    // Handle signup error
    if (error.response) {
      console.error("Signup Failed with Status Code: ", error.response.status);
      console.error("Error Data: ", error.response.data);
    } else if (error.request) {
      console.error("No Response Received");
    } else {
      console.error("Error Message: ", error.message);
    }
    throw error;
  }
};
