import './App.css';
import {BrowerRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Signin from './components/Signin';
import DashBoard from './components/DashBoard';
import Header from './components/Header'
import Footer from './components/Footer';
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">
<BrowerRouter>
<Header />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/login" element={<Login />} />
  <Route path='/signup' element={<Signup />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/dashboard" element={<DashBoard />} />
</Routes>
<Footer />
</BrowerRouter>
    </div>
  );
}

export default App;
