import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show_Profil from './page/profil';
import InstHome from './page/home';
import Sing_In from './page/instsingup';
import Change_Profil from './page/profilchange';
import Followers from './page/followers';
import Change_Password from './page/changepassword'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Sing_In/>}/>
          <Route path="/profil" element={<Show_Profil/>}/>
          <Route path="/home" element={<InstHome/>}/>
          <Route path="/profilchange" element={<Change_Profil/>}/>
          <Route path="/followers" element={<Followers/>}/>
          <Route path="/changepassword" element={<Change_Password/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
