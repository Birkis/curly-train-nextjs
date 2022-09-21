

import { PortfolioItem } from "../../components";
import  sanityClient  from "../../sanity";
import styles from  '../../styles/portfolioItemPage.module.scss'

export default function Portfolio({portfoliopages}) {
    
    return (
      portfoliopages.map((item, index) => {
            
            const pagenum = index % 2 === 0 ? true : false
            // console.log(pagenum)

            return (
                <PortfolioItem classname={styles.PortfolioItem}  key={item.id} pagenum={pagenum} item = {item} index = {index}/>
                
            )
        })
    )
}

export const getServerSideProps =  async () => {

  const query = '*[ _type == "portfolioPage"]'
  const portfoliopages = await sanityClient.fetch(query)

  if(!portfoliopages.length) {
    return {props: {
      portfoliopages: ["hello", "byebye"]
    }}
  } else {

    return {
      props: {
        portfoliopages
      }
    }
  }
}