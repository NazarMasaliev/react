import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Calculator from './page/firstpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Calculator/>}/>
    </Routes>
  </BrowserRouter> 
  )
}

export default App;
