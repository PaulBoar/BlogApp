import styles from './comments-section.module.css'

function CommentsSection() {
  return (
    <div>
     <form>
      <label type='text'>Write a comment</label>
      <input type='text' placeholder='Type...'/>
      <button type='submit'>Send</button>
     </form>
     <div>Forum</div>
    </div>
  )
}

export default CommentsSection