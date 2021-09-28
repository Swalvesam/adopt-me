import React from 'react'
import useFetch from './hooks/useFetch'


const endpoint = 'https://api.openbrewerydb.org/breweries'

 const Beer = () => {
     const  { data ,loading , error, ComponentImade } = useFetch(endpoint)

     console.log(data)

    if(loading) {
        return (
            <p> Loading</p>
        )
    }

    if(error) return <p> oops, error</p>
     return (
        <div>
           <ComponentImade/>

            {JSON.stringify(data, 2, null)}
        </div>
    )
}


export default Beer;