import SearchForm from "./components/SearchForm";
import "./app.scss";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <UserCard />
    </div>
  );
}

export default App;
