import api from "./Api";

export const forgetPassword = (email) => {
    return api.post('/forget', { email });
};

export const checkCode = (code) => {
    return api.post('/check', { code });
};

export const resetPassword = (password) => {
    return api.post('/resetPass', { password });
};