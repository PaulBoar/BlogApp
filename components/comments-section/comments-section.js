import { useState, useEffect } from 'react'

import styles from './comments-section.module.css'

function CommentsSection({slug}) {
 const [comment, setComment] = useState('')
 const [comments, setComments] = useState([])

 const handleAddComment = (e) => {
  setComment(e.target.value)
 }
 const addCommentHandler = () => {
  setComments(prevComs => [...prevComs, comment])
 }

 async function fetchComments() {
  const res = await fetch(`https://blogapp-c6647-default-rtdb.firebaseio.com/${slug}.json`)
  const data = await res.json()
  setComments(data)
  }

 useEffect( () => {
  fetchComments() 
 }, [])
 
 async function postComments() {
  const res = await fetch(`https://blogapp-c6647-default-rtdb.firebaseio.com/${slug}.json`, {
   method: 'POST',
   
  })
  const data = await res.json()
  setComments(data)
  }

  return (
    <div>
     <form className={styles.form} onSubmit={addCommentHandler}>
      <label type='text' className={styles.label}>Write a comment</label>
      <input type='text' placeholder='Type...' className={styles.input} value={comment} onChange={handleAddComment}/>
      <button type='submit' className={styles.btn}>Add comment</button>
     </form>
     <div>Forum</div>
    </div>
  )
}

export default CommentsSection