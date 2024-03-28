import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import { Provider } from "react-redux"
import {store} from "../src/store/store"

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <h1>Redux Toolkit</h1>
        <Todo />
        <AddTodo />
      </Provider>
    </div>
  );
}

export default App;
