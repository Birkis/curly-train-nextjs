

import { PortfolioItem } from "../../components";
import { sanityClient } from "../../sanity";

export default function Portfolio({portfoliopages}) {
    
  


    return (
      portfoliopages.map((item, index) => {
            
            const pagenum = index % 2 === 0 ? true : false
            // console.log(pagenum)

            return (
                <PortfolioItem key={item.id} pagenum={pagenum} item = {item}/>
                
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