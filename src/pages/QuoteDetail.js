import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QUOTES = [
    { id: 'q1', author: 'Sid_11', text: 'lololololol' },
    { id: 'q2', author: 'Sid_11', text: 'radhe radhe' },
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = QUOTES.find(q => q.id === params.quoteId);

    if (!quote) {
        return <p className='centered'>No Quote Found!</p>
    }
    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail;
