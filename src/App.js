import logo from './logo.svg';
import './App.css';
import Posts from './posts'; // Import the Posts component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Posts /> {/* Use the Posts component */}
      </header>
    </div>
  );
}

export default App;