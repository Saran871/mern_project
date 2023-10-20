import instance from "./instance";

const getAllEmp =()=>{
    return instance.get('/employees');
}
const getId = id =>{
    return instance.get(`/employees/${id}`);
}
const createEmp = data =>{
    return instance.post('/create', data)
}
const updateEmp = (id,data) =>{
    return instance.put(`/update/${id}`,data)
} 
const deleteEmp = id =>{
    console.log(id)
    return instance.delete(`/delete/${id}`);
}
const Empapi ={
    deleteEmp,
    createEmp,
    updateEmp,
    getId,
    getAllEmp
}
export default Empapi;