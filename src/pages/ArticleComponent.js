import React from 'react'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const ArticleComponent = (props) => {
    return (
        <>

            <Card style={{ width: '18rem' }} className="mx-3">
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title>{props.newsTitle}</Card.Title>
                    <Card.Text>
                        {props.newsDescription}
                    </Card.Text>
                    <Link to={`/ShowArticle/${props.id}`}>
                        <Button variant="primary">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ArticleComponent
