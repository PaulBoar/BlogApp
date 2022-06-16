import styles from './burger.module.css'

function Burger({onShowBurgerMenu, isOpen}) {
 const handleShowBurgerMenu = () => {
  onShowBurgerMenu()
 }

  return (
   <button className={styles.burger} onClick={handleShowBurgerMenu}>
   <div style={isOpen ? {transform: 'rotate(45deg)'} : null}/>
   <div style={isOpen ? {transform: 'translateX(-100%)', backgroundColor: 'transparent'} : null}/>
   <div style={isOpen ? {transform: 'rotate(-45deg)'} : null}/>
  </button>
  )
}

export default Burger
