import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, setIsError, setIsLoading } from "../../app/user/userSlice";
import { fetchUser } from "../../utils/fetchUser";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    fetchUser(input)
      .then((user) => {
        dispatch(addUser(user));
        setInput("");
      })
      .catch(() => dispatch(setIsError(true)))
      .finally(() => dispatch(setIsLoading(false)));
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => handleSubmit(e)}
      className={styles.form}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Find user
      </button>
    </form>
  );
};

export default SearchForm;
