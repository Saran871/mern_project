import React, { useState } from 'react'
import CustomButton from '../inputs/CustomButton'
import {Container, Form, Row, Col} from 'react-bootstrap';
import {CustomHeader} from '../inputs/CustomHeader';
import { CustomInputs } from '../inputs/CustomInputs';
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { updateAction } from '../../redux/actions';

const EditEmp = (props) => {
    const {id}= useParams();
    let {state}=useLocation();
    const dispatch= useDispatch();
    const intialState ={
        username:state.dta.name,
        age:state.dta.age,
        country:state.dta.country,
        position:state.dta.position,
        wage:state.dta.wage
    }   
    
    const [_data, setData]=useState(intialState);

    const handleChange=(e)=>{
        const {name,value}=e.target;
      setData({..._data,[name]:value});
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        let _update ={
            username: _data.username,
            age: _data.age,
            country: _data.country,
            position: _data.position,
            wage: _data.wage,
        }  
        dispatch(updateAction(id, _update)).then(res =>{
            console.log(res);            
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
            <CustomHeader text="Edit Form"/>
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
                            children="Edit Employee"
                        />
                    </Col>

                </Row>
            </Form>                
        </Container>
    )
}
export default EditEmp
