import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const QUOTES = [
    { id: 'q1', author: 'Sid_11', text: 'lololololol' },
    { id: 'q2', author: 'Sid_11', text: 'radhe radhe' },
];

const AllQuotes = () => {
    return (
        <div>
            <QuoteList quotes={QUOTES}/>
        </div>
    )
}

export default AllQuotes;
