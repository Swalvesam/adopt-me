

import React, { useState , useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const fetchResults = async () => {
        setLoading(true)

        try {
            const res = await (await fetch(url)).json()
            console.log(res)
            setData(res)
            setLoading(false)
        }
        catch(e) {
            setError(true)
        }
    }


    const ComponentImade = () => <> <p> yoyoyoyoyoyoy</p> </>
    

    useEffect(() => {
        fetchResults()

    }, [])

    return { data, loading, error, ComponentImade }
}

export default useFetch