import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import ContextProvider from './utils/contexts/contextprovider';
import FullPackageView from './components/Service/fullpackageview/fullpackageview';
import Main from './testcomponent/testcomponent';
import TourPackages from './components/Service/tourpackages/tourpackages';

function App() {
  return (
    <>

     <ContextProvider>
      
     <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/view-package' element={<FullPackageView/>} />
      <Route path='/test' element={<Main/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />  
      <Route path='/trip-package' element={<TourPackages/>} />    
    </Routes>
  
     </ContextProvider>
    
    
    </>
    
  )
}

export default App;
