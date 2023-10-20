import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAction, deleteAction } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const TableData = () => {    
    const state = useSelector(state => state.employee);
    const dispatch = useDispatch();   

    useEffect(()=>{
        dispatch(listAction());
    })

    const onDelete =(id)=>{
        dispatch(deleteAction(id)).then(res =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    }

    return (        
        <tbody>
            {
                state && state.map((dta,ind)=>{                    
                    return(
                        <tr key={ind}>
                            <td>{ind + 1}</td>
                            <td>{dta.name}</td>
                            <td>{dta.age}</td>
                            <td>{dta.country}</td>
                            <td>{dta.position}</td>
                            <td>{dta.wage}</td>
                            <td>
                                <Link className="btn btn-secondary mx-1" state={{dta}} to={`/edit/${dta.id}`} >Edit</Link>
                                <Button className="btn btn-danger mx-1" onClick={()=>onDelete(dta.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}
export default TableData
