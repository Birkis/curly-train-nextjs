

import { PortfolioItem } from "../../components";

export default function Portfolio({content}) {
    
    const {portfolioItems} = content
    console.log(portfolioItems + "hello")

    return (
        portfolioItems.map((item, index) => {
            return (
                <PortfolioItem key={index} index={index} {...item}/>
            )
        })
        // <h1>hello</h1>
    )
}


export async function getStaticProps() {

    const res = await fetch("https://my-json-server.typicode.com/Birkis/curly-train-nextjs/db")
    const content = await res.json()
  
    return {
      props: {
        content,
      },
    }
  }
  