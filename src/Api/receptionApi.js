import api from "./Api";


export const addPatient = (data) => {
    return api.post('/addPatient', { data });
};

export const getDoctors = () => {
    return api.get('/getDoctors');
};
