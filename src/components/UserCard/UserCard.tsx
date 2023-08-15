import { useAppSelector } from "../../app/hooks";
import {
  selectIsError,
  selectIsLoading,
  selectUser,
} from "../../app/user/userSelectors";
import styles from "./UserCard.module.scss";

const UserCard = () => {
  const user = useAppSelector(selectUser);
  const isError = useAppSelector(selectIsError);
  const isLoading = useAppSelector(selectIsLoading);

  if (isLoading) return <h2 className={styles.message}>Loading...</h2>;

  if (isError) return <h2 className={styles.message}>Something went wrong</h2>;

  if (user.message) return <h2 className={styles.message}>No such a user</h2>;

  return (
    user.id && (
      <div className={styles.card}>
        <img src={user.avatar_url} alt="User Avatar" className={styles.image} />
        <div className={styles.info}>
          <h3 className={styles.username}>{user.login}</h3>
          <p className={styles.bio}>{user.bio}</p>
          <a href={user.html_url} target="_blank" className={styles.link}>
            GitHub Link
          </a>
        </div>
      </div>
    )
  );
};

export default UserCard;
