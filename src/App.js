import './index.css';
import ShoppingList from './components/ShoppingList';

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity

  return (
    <div className='app-background'>
      <ShoppingList />
    </div>
  );
};



export default App;