import { useState, useEffect } from 'react'

import styles from './comments-section.module.css'

function CommentsSection({slug}) {
 const [comment, setComment] = useState('')
 const [comments, setComments] = useState([])

 const handleAddComment = (e) => {
  setComment(e.target.value)
 }
 const addCommentHandler = () => {
  // setComments(prevComs => [...prevComs, comment])
  postComments({comment: comment})
 }

 async function fetchComments() {
  const res = await fetch(`https://blogapp-c6647-default-rtdb.firebaseio.com/comments/${slug}.json`)
  const data = await res.json()
  setComments(data)
  console.log(data)
  }

 useEffect( () => {
  fetchComments() 
 }, [])
 
 async function postComments(comment) {
  const res = await fetch(`https://blogapp-c6647-default-rtdb.firebaseio.com/comments/${slug}.json`, {
   method: 'POST',
   body: JSON.stringify(comment),
   headers: {
    'Content-Type': 'application/json'
   }
  })
  const data = await res.json()
  console.log(data)
  }
console.log(comments)
  return (
    <div>
     <form className={styles.form} onSubmit={addCommentHandler}>
      <label type='text' className={styles.label}>Write a comment</label>
      <input type='text' placeholder='Type...' className={styles.input} value={comment} onChange={handleAddComment}/>
      <button type='submit' className={styles.btn}>Add comment</button>
     </form>
     <div>Forum
      {/* {comments && comments.map(com => {
       return <p>{com.comment}</p>
      })} */}
     </div>
    </div>
  )
}

export default CommentsSection