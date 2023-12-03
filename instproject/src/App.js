import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show_Profil from './page/profil';
import InstHome from './page/home';
import Sing_In from './page/instsingup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Sing_In/>}/>
          <Route path="/profil" element={<Show_Profil/>}/>
          <Route path="/home" element={<InstHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
