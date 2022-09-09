

import sanityClient  from "../sanity";

export const getServerSideProps = async context  => {

    const users = ["mike", "billy"]
    const books = ["neverwgere", "fahrenheit"]

    return {
        props: {users: users, books:books }
    }

}


export default function About(l) {
    
    console.log(l)
    
    return (

        <h1>About my  {l.users[0]}</h1>
    )


}