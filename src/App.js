import logo from './logo.svg';
import './App.css';
import ErrorCatcher from './Component/ErrorBoundary/ErrorCatcher';

function App() {
  return (
    <div className="App">
      <ErrorCatcher/>
    </div>
  );
}

export default App;
