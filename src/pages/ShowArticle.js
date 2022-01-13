import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from "./useQuery"
import { Card, Container, Row } from 'react-bootstrap';




const ShowArticle = ({ }) => {

  const param = useParams()
  const data = useQuery();

  //FILTERING DATA BASED ON THE ID (i.e Selected Article)
  var newsArticle = data.allContentfulNews.nodes;
  newsArticle = newsArticle.filter((e) => {
    return e.id === param.id
  })
  newsArticle = newsArticle[0]
  console.log(newsArticle)
  return (
    <>
      <Container>
        <Card style={{ width: '40rem' }} className='m-auto my-5'>
          <Card.Img variant="top" src={newsArticle.newsImage.file.url} />
          <Card.Body>
            <Card.Title>
              {newsArticle.newsTitle}
            </Card.Title>
            <Card.Text>
              {newsArticle.newsDescription}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>

  )
}


export default ShowArticle
