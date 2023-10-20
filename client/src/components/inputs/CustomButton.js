import React from 'react'
import {Button} from 'react-bootstrap';
const CustomButton = (props) => {
    const {type,children}= props;
    return (
        <Button type={type} className="my-3">{ children }</Button>
    )
}
export default CustomButton
