import "./App.css";
import { Person } from "./components/Person";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <Person name={"Steven"} age={32} isMarried={false} />
    </UserProvider>
  );
}

export default App;
