import styles from "./myStyles.module.css";

const User = ({user}) => {
  return (
    <p className={styles.p}>{user.id}: {user.name}</p>
  )
}

export default User