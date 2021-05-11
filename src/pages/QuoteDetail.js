import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QUOTES = [
    { id: 'q1', author: 'Sid_11', text: 'lololololol' },
    { id: 'q2', author: 'Sid_11', text: 'radhe radhe' },
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const quote = QUOTES.find(q => q.id === params.quoteId);

    if (!quote) {
        return <p className='centered'>No Quote Found!</p>
    }
    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
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
