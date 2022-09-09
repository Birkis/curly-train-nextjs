import sanityClient from "./sanity";


const getRefs  = async (nextRef, lastRef) =>  {

    const query = `*[ _type == 'portfolioPage' && references('${nextRef}', '${lastRef}')]`
    const res = await sanityClient.fetch(query)

    return res[1]

}

export default getRefs;