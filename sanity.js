// import {createClient, createImageUrlBuilder} from 'next-sanity'
import sanityClient from "@sanity/client";



const config = {


    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',


};


export default sanityClient(config);