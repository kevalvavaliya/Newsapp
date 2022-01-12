import React,{useState} from 'react'
import { Form, Button, Row, Container, Card } from 'react-bootstrap';

export default function FormComponent() {
    const [state, setState] = useState('')
    const [state2, setState2] = useState('')
    return (
        <Container className='my-5 py-5'>
            <Row>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title>Text Form</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Inut some text in the form</Card.Subtitle>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Enter text" onChange={(e)=>{setState(e.target.value)}}/>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" onClick={(e)=>{e.preventDefault(); setState2(state)}}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card border="info" style={{ width: '18rem' }} className='mx-5'>
                    <Card.Header>Inputted Text</Card.Header>
                    <Card.Body>
                        <Card.Text>
                           {state2}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    )
}