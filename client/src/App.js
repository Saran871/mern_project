import './App.css';
import {Col, Container, Row} from 'react-bootstrap';
import EmpList from './components/EmpList'
import EmpCreate from './components/EmpCreate'

function App() {
  return (
    <Container className=''>
      <div className='text-center fw-bold'>
        <h4>Curd Operations</h4>
      </div>
      <Row>
        <Col lg={12}>
          <h6 className="text-primary fw-bold fs-medium">Employees List</h6>
        </Col>
        <Col lg>
        <EmpList />
        </Col>
        <Col lg={12}>
        <EmpCreate />
        </Col>
      </Row>
    </Container>
    // <div className="App">
    //   <header >
    //     <h5>
    //       Curd Operation
    //     </h5>
        
    //   </header>
    // </div>
  );
}

export default App;
