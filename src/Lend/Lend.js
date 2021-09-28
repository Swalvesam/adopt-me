import { useQuery } from '@apollo/client';
import React from 'react';
import LEND_QUERY from '../lib/Queries/LendQuery';

const LendData = () => { 
    const { loading, error, data } = useQuery(LEND_QUERY);

    if (loading) 
        return (
            <p> Loading...</p>
        )
    if (error) 
        return (
            <p>Error :( </p>
        )

    return (
            <div>{data.lend.loans.values.map(({name, loanAmount} ) => (
                <p>
                   Name {name}:  
                   $ {loanAmount}
                </p>
            ))
            }
            </div>
    )

}

export default LendData;
