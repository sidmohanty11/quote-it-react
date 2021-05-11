import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const {quoteId} = params;

  const { sendRequest, status, data } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addComment = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId],
  );

  let cmts;

  if (status === 'pending') {
    cmts = <div className='centered'><LoadingSpinner /></div>;
  }

  if (status === 'completed' && (data && data.length>0)) {
    cmts = <CommentsList />;
  }

  if (status === 'completed' && (!data || data.length === 0)) {
    cmts = <p className='centered'>No Comments till now.</p>
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addComment} />}
      {cmts}
    </section>
  );
};

export default Comments;
