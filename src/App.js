import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/Routes';
function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
