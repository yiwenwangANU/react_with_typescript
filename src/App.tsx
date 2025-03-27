import "./App.css";
import { Countries, Person } from "./components/Person";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <Person
        name={"Steven"}
        age={32}
        isMarried={false}
        country={Countries.Brazil}
      />
    </UserProvider>
  );
}

export default App;
