import { useState, useEffect } from 'react';

import styles from './comments-section.module.css';

function CommentsSection({ slug, logged, user }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
console.log(user?.user?.email)
  const handleAddComment = (e) => {
    setComment(e.target.value);
  };

  const addCommentHandler = async (e) => {
    e.preventDefault();

    await postComments({ comment: comment, author: user?.user?.email });
    setComment('');
    fetchComments()
  };

  let loadedComments = [];
  async function fetchComments() {
    const res = await fetch(
      `https://blogapp-c6647-default-rtdb.firebaseio.com/comments/${slug}.json`
    );
    const data = await res.json();
    console.log('fetchin');

    for (const key in data) {
      loadedComments.push({ id: key, comment: data[key].comment, author: data[key].author });
    }
    setComments(loadedComments);
    console.log(loadedComments)
  }
  useEffect(() => {
    fetchComments();
  }, []);

  async function postComments(comment, user ) {
    const res = await fetch(
      `https://blogapp-c6647-default-rtdb.firebaseio.com/comments/${slug}.json`,
      {
        method: 'POST',
        body: JSON.stringify(comment, user?.user.email),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    console.log(data);
  }
  console.log(comment);

  const handleRemove = async (i) => {
    const res = await fetch(
      `https://blogapp-c6647-default-rtdb.firebaseio.com/comments/${slug}.json`,
      {
        method: 'DELETE',
        body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(slug)
    const data = await res.json();
  }
console.log(logged)
  return (
    <div>
      <form className={styles.form} onSubmit={addCommentHandler}>
        <label type='text' className={styles.label}>
          Write a comment
        </label>
        <input
          type='text'
          placeholder='Type...'
          className={styles.input}
          value={comment}
          onChange={handleAddComment}
        />
        <button disabled={!user} type='submit' className={styles.btn}>
          Add comment
        </button>
      </form>
        Forum
      <div className={styles.comments}>
        {comments &&
          comments.map((com, i) => {
            return <div key={com.id} className={styles.comment}><span>{com.author.split('@',1)[0]}</span><p>{com.comment} </p></div>;
          })}
      </div>
    </div>
  );
}

export default CommentsSection;
