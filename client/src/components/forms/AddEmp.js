import React, {useState} from 'react'
import { CustomHeader } from '../inputs/CustomHeader';
import { CustomInputs } from '../inputs/CustomInputs';
import CustomButton from '../inputs/CustomButton';
import { useDispatch } from 'react-redux';
import {createAction} from '../../redux/actions';

import {Container, Row, Col, Form} from 'react-bootstrap'



const AddEmp = () => {
    const dispatch= useDispatch();
    const intialState ={
        username:'',
        age:'',
        country:'',
        position:'',
        wage:''
    }
    const [_data, setData]=useState(intialState);

    const handleChange=(e)=>{
        const {name,value}=e.target;
      setData({..._data,[name]:value});
    }
  
    const onSubmit =(e)=>{
        e.preventDefault();
        let _create ={
            username: _data.username,
            age: _data.age,
            country: _data.country,
            position: _data.position,
            wage: _data.wage,
        }      
        dispatch(createAction(_create)).then(res =>{
            console.log(res, 'success')        
        }).catch(err =>{
        console.log(err, 'error')
        })
        setData({
            username: '',
            age: '',
            country: '',
            position: '',
            wage: '',
        });
    }

    return (
        <Container>            
            <CustomHeader text="Add Form"/>
            <Form onSubmit={onSubmit} style={{ border:"1px solid #ccc"}} className="p-3">   
                <Row>
                    <Col md={6}>     
                        <CustomInputs 
                            label="Name" 
                            onChange={handleChange} 
                            name="username" 
                            id="username"
                            value={_data.username}
                            type="text"
                        />
                    </Col>  
                    <Col md={6}>  
                        <CustomInputs 
                            label="Age" 
                            onChange={handleChange} 
                            name="age" 
                            id="age"
                            value={_data.age}
                            type="number"
                        />
                    </Col>  
                    <Col md={6}>
                    <CustomInputs 
                        label="Country" 
                        onChange={handleChange} 
                        name="country" 
                        id="country"
                        value={_data.country}
                        type="text"
                    />
                    </Col>
                    <Col md={6}>
                        <CustomInputs 
                            label="Position" 
                            onChange={handleChange} 
                            name="position" 
                            id="position"
                            value={_data.position}
                            type="text"
                        />
                    </Col>
                    <Col md={6}>
                        <CustomInputs 
                            label="Wage (years):" 
                            onChange={handleChange} 
                            name="wage" 
                            id="wage"
                            value={_data.wage}
                            type="number"
                        />
                    </Col>
                    <Col md={12} className='text-center mt-5'>
                        <CustomButton 
                            type="submit"
                            children="Add Employee"
                        />
                    </Col>

                </Row>
            </Form>
                
        </Container>
    )
}

export default AddEmp
