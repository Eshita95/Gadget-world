import './App.css';
import Header from './Components/Pages/Shared/Header';
import Login from './Components/Pages/Shared/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Home/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
