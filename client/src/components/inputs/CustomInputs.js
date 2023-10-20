import React from 'react';
import {Form} from 'react-bootstrap'

export const CustomInputs = (props) => {
    const {type, value, onChange, name, label, id}= props;
    return (
        <Form.Group className="mt-3">
            <Form.Label>{label} : </Form.Label>
            <Form.Control 
                className="form-control"
                value={value}
                type={type}
                name={name}
                onChange={onChange}
                id={id}
            />
        </Form.Group>
    )
}
