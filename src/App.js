import './App.css';
import Header from './Components/Pages/Shared/Header';
import Login from './Components/Pages/Shared/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import SignUp from './Components/Pages/Shared/SignUp';
import Items from './Components/Pages/Home/Items';
import AddItem from './Components/Pages/Home/AddItem';
import ManageItem from './Components/Pages/ManageItem/ManageItem';
import RequireAuth from './Components/Pages/Shared/RequireAuth';
import MyItem from './Components/Pages/Home/MyItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path='/manageItem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>

        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>

        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem1></MyItem1>
          </RequireAuth>
        }></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
