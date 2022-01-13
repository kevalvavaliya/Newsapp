import { useStaticQuery, graphql } from "gatsby"

export const useQuery = ()=>{
    //GRAPHQL QUERY TO FETCH DATA
    const data = useStaticQuery( graphql`
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
    }`
  );
  return data;
}