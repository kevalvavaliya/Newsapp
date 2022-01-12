import React from "react"
import { graphql } from "gatsby"

const ProductComponent = ({ data }) => {
  const {
    allContentfulNews: { nodes: newsArticle },
  } = data
  console.log(newsArticle)
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <div className="container my-3">
      <h2 className='text-center' style={{margintop:'90px'}}>Top Headlines</h2>
      <div className="container my-5">
      <div className="row ">
        {newsArticle.map(product => {
          return (
            <div className="col md-4">
            <div className="card" style={{width:"18rem"}}>
              <img src={product.newsImage.file.url} className="card-img-top" alt={product.newsImage.file.fileName} />
              <div className="card-body">
                <h5 className="card-title">{product.newsTitle}</h5>
                <p className="card-text">{product.newsDescription}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
          )
        })}
        </div>
      </div>
      </div>
    </>
  )
}

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

export default ProductComponent