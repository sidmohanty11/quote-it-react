import React, {useEffect} from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
//programmatic navigation
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
        history.push('/quotes');
    };
    
    return (
        <div>
            <QuoteForm
                onAddQuote={addQuoteHandler}
                isLoading={status === 'pending'} />
        </div>
    )
}

export default NewQuote;
