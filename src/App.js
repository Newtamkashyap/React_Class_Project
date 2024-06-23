import logo from './logo.svg';
import { NetflixRegistration } from './components/Register/netflix_register';
import { NetflixMain } from './components/main/netflix_main';
import { NetflixHeader } from './components/header/netflix_header';
import { NetflixIndex } from './components/index/netflix_index';

import './App.css';

function App() {
  return (
   <>
   <NetflixRegistration/>
   <NetflixHeader/>
   <NetflixMain/>
   <NetflixIndex/>

   </>
  );
}

export default App;
