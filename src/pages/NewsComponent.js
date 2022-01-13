import React from 'react';
import FormComponent from './FormComponent'
import { useQuery } from "./useQuery"
import { Container, Row } from 'react-bootstrap';
import ArticleComponent from "./ArticleComponent"
const NewsComponent = () => {

    const data = useQuery();
    const newsArticle = data.allContentfulNews.nodes;
    // destructuring  the nodes array and store it in variable
    return (
      <>
        <Container className="my-3">
          <h2 className='text-center' style={{ margintop: '90px' }}>Top Headlines</h2>
          <Container className="my-5">
            <Row>
              {newsArticle.map(news => {
                return (
                  <ArticleComponent url={news.newsImage.file.url} newsDescription={news.newsDescription} newsTitle={news.newsTitle} id={news.id} />
                )
              })}
  
            </Row>
          </Container>
        </Container>
  
        {/* ADDING FORM COMPONENT */}
        <FormComponent />
      </>
    )
  }
  
  export default NewsComponent