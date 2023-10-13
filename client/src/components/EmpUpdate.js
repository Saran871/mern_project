import React, {useState} from 'react'
// import {Form, Button} from 'react-bootstrap';
import * as Ai from 'react-icons/ai'
// import {emp_get_id} from '../services/api_call'

const EmpUpdate = ({ind}) => {
    
    console.log(ind, 'editable')
    const [_data,setData] =useState({
        username:'',
        age:'',
        country:'',
        position:'',
        wage:''
    });
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setData({..._data,[name]:value})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        // let _create ={
        //     name: _data.username,
        //     age: _data.age,
        //     country: _data.country,
        //     position: _data.position,
        //     wage: _data.wage,
        // }
            // emp_create(_create).then( res => {
            //     console.log(res)
            //     setData(_create);
            // }).catch( err => {
            //     console.log(err)
            // })
        
        
        console.log('test', _data)
    }
    return (
        <>
            <Ai.AiFillEdit />
        </>
    //     <div >
    //         <h6>Create Employee</h6>
    //         <Form onSubmit={onSubmit}>
    //             <Form.Group>
    //                 <Form.Label>Name</Form.Label>
    //                 <Form.Control type="text" className="form-control" value={_data.name} name="username" onChange={handleChange}/>
    //             </Form.Group>
    //             <Form.Group>
    //                 <Form.Label>Age</Form.Label>
    //                 <Form.Control type="number"  className="form-control" value={_data.age} name="age" onChange={handleChange}/>
    //             </Form.Group>
    //             <Form.Group>
    //                 <Form.Label>Country</Form.Label>
    //                 <Form.Control type="text" className="form-control" value={_data.country} name="country" onChange={handleChange}/>
    //             </Form.Group>
    //             <Form.Group>
    //                 <Form.Label>Position</Form.Label>
    //                 <Form.Control type="text" className="form-control" value={_data.position} name="position" onChange={handleChange}/>
    //             </Form.Group>
    //             <Form.Group>
    //                 <Form.Label>Wage (Years)</Form.Label>
    //                 <Form.Control type="number" className="form-control" value={_data.wage} name="wage" onChange={handleChange}/>
    //             </Form.Group>
    //             <Button type="submit">Save</Button>
    //         </Form>
    //     </div>
    )
}

export default EmpUpdate
