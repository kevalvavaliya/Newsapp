import React, { useState } from 'react'
import { Form, Button, Row, Container, Card } from 'react-bootstrap';

export default function FormComponent(props) {
    function textHandler() {
        setState2(state)
        console.log("Text")
    }

    const translateHandler = () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
        url += '&q=' + encodeURI(state);
        url += `&source=en`;
        url += `&target=fr`;
        
        fetch(url, { 
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          }).then(res => res.json()).then((response)=>{
            setState2(response.data.translations[0].translatedText);
          });
          

    }

    const [state, setState] = useState('')
    const [state2, setState2] = useState('')
    return (
        <Container className='my-5 py-5'>
            <Row>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Enter text" onChange={(e) => { setState(e.target.value) }} />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" onClick={(e) => { e.preventDefault(); props.functionality ? textHandler() : translateHandler() }}>
                                {props.buttonText}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card border="info" style={{ width: '18rem' }} className='mx-5'>
                    <Card.Header>{props.inputTextTitle}</Card.Header>
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
FormComponent.defaultProps = {
    buttonText: "Submit",
    description: "Inut some text in the form",
    inputTextTitle:"Inputted text"
}