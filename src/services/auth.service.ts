import axios from "axios";

export const registerUser = async (data: {
    email: string;
    password: string;
}) => {
    return axios.post("/api/register", data);
};
