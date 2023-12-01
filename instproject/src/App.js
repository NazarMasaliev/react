import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show_Profil from './page/profil';
import InstHome from './page/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/profil" element={<Show_Profil/>}/>
          <Route path="/" element={<InstHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
