import React, { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QUOTES = [
    { id: 'q1', author: 'Sid_11', text: 'lololololol' },
    { id: 'q2', author: 'Sid_11', text: 'radhe radhe' },
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { quoteId } = params;
    const quote = QUOTES.find(q => q.id === params.quoteId);

    const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (<div className='centered'>
            <LoadingSpinner />    
        </div>)
    }

    if (error) {
        return <p className='centered'>{error}</p>
    }

    if (!data.text) {
        return <p className='centered'>No Quote Found!</p>
    }
    
    return (
        <>
            <HighlightedQuote text={data.text} author={data.author} />
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link to={`${match.url}/comments`} className="btn--flat">Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail;
