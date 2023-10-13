import axios from 'axios';
// let api_url = process.env.REACT_APP_BASE_URL;

let base_url ="http://localhost:5000";

export let emp_create = async (create)=>{
    console.log(`${base_url + '/create'}`,'create');
    return  await axios.post(`${base_url+'/create'}`,create );
}
export let emp_list = async ()=>{
    return await axios.get(`${base_url + '/employees'}`);
}
export const emp_get_id =(id)=>{
    return axios.get(`${base_url + '/' + id}`);
}
// export const emp_update =(id, update)=>{
//     return axios.put(`${api_url}/${id}`,update);
// }
// export const emp_delete =(id)=>{
//     return axios.delete(`${api_url}/${id}`);
// }