import React,{useMemo, useEffect, useState} from 'react'
import {Table} from 'react-bootstrap';
import {head} from '../head';
import {emp_list} from '../services/api_call';
import * as Ai from 'react-icons/ai'
import EmpUpdate from './EmpUpdate'
import EmpDelete from './EmpDelete'


const EmpList = () => {
    const [_list,_setList] =useState([]);
    const headers = useMemo(()=> head, [])
    useEffect(()=>{
        emp_list().then(res => {
            console.log(res.data);
            _setList(res.data)
        }).catch(err => console.error(err))
    },[])
    const TableHeader = <thead>
        <tr > 
            {headers.map((hd, idx)=>{ return <td key={idx} className="text-center text-primary fw-bold">{hd.header}</td> })}
        </tr>
    </thead>;

    
    const TableBody = <tbody>
                {_list.map((item, ind)=>{
                    return <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.country}</td>
                        <td>{item.position}</td>
                        <td>{item.wage}</td>
                        <td>
                            <div>  
                                <EmpUpdate ind={ind} />
                                <button className='border border-0 bg-'>
                                    <Ai.AiFillDelete onClick={()=> <EmpDelete id={ind} />} />   
                                </button>         
                            </div>
                        </td>
                    </tr>
                })}
    </tbody>;
    return (
        <Table striped bordered hover variant="light"> 
            {TableHeader}
            {TableBody}
        </Table>
    )
}

export default EmpList
