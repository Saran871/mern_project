import React from 'react'
import {Container, Table,Row, Col} from 'react-bootstrap';
import { CustomHeader } from '../inputs/CustomHeader';
import {Link} from 'react-router-dom'
// import CustomButton from '../inputs/CustomButton';

import TableData from '../table/TableData';
import TableHeader from '../table/TableHeader';
const HomePage = () => {
    return (
        <Container>
            <CustomHeader text="Curd Operation" />        
            <Row>
                <Col md={12} className="text-end">
                    <Link to={"/create"} className="btn btn-primary my-2 me-3">
                        Add Form
                    </Link>
                </Col>
            </Row>
            <Table striped bordered hover>
                <TableHeader/>
                <TableData />
            </Table>
        </Container>
    )
}

export default HomePage
