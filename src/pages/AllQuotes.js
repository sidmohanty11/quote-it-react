import React, { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const QUOTES = [
    { id: 'q1', author: 'Sid_11', text: 'lololololol' },
    { id: 'q2', author: 'Sid_11', text: 'radhe radhe' },
];

const AllQuotes = () => {
    const { sendRequest, status, data, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (status === 'completed' && (!data || data.length === 0)) {
        return <NoQuotesFound />
    }

    return (
        <div>
            <QuoteList quotes={data}/>
        </div>
    )
}

export default AllQuotes;
