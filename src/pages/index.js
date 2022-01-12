import React from "react"
import FormComponent from './FormComponent'
import { Card,Button,Container,Row } from 'react-bootstrap';
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'


const NewsComponent = ({ data }) => {
  // destructuring  the nodes array and store it in variable
  const { allContentfulNews: { nodes: newsArticle },} = data
  return (
    <>
    <Container className="my-3">
      <h2 className='text-center' style={{margintop:'90px'}}>Top Headlines</h2>
      <Container className="my-5">
        <Row>
          {newsArticle.map(news => {
            return (
              <Card style={{ width: '18rem'}} className="mx-3">
                <Card.Img variant="top" src={news.newsImage.file.url} />
                <Card.Body>
                  <Card.Title>{news.newsTitle}</Card.Title>
                  <Card.Text>
                    {news.newsDescription}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
      </Container>
    </Container>
    <FormComponent/>
    </>
  )
}

// QUERY NEWS FORM CONTENTFUL API
export const query = graphql`
  {
    allContentfulNews {
      nodes {
        id
        newsTitle
        newsDescription
        newsImage {
          file {
            url
            fileName
          }
        }
        newsLocation {
          lat
          lon
        }
        
      }
    }
  }
`

export default NewsComponent