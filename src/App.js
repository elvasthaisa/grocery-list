import GroceryList from "./GroceryList";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery list</h1>
        <h3>Please submit a new item for the list</h3>
        <GroceryList />
      </header>
    </div>
  );
}

export default App;