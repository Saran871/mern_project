import { actionType } from './action-type';

import Empapi from '../server/apicalls'


export const listAction = () => async  (dispatch)=>{
    try{
        const res = await Empapi.getAllEmp();

        dispatch({
            type: actionType.LIST_EMP,
            payload: res.data,
        })

    }catch(e){
        console.log(e)
    }
}

export const createAction =(data) => async (dispatch)=>{
    try{
        const res = await Empapi.createEmp(data);
        dispatch({
            type: actionType.CREATE_EMP,
            payload: res.data
        })
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    } 
}

export const updateAction =(id, data)=> async (dispatch)=>{
    try{
        const res = await Empapi.updateEmp(id, data);
        dispatch({
            type: actionType.UPDATE_EMP,
            payload: res.data
        })
        return Promise.resolve(res.data)
    }catch(err){
        return Promise.reject(err)
    }
}

export const deleteAction =(id) => async (dispatch)=>{
    console.log(id)
    try{
        await Empapi.deleteEmp(id);
        dispatch({
            type: actionType.DELETE_EMP,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
}