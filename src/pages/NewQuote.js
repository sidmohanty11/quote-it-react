import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
//programmatic navigation
import { useHistory } from 'react-router-dom';

const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        history.push('/quotes');
     };
    return (
        <div>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </div>
    )
}

export default NewQuote;
