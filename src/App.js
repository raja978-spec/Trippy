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
import TourPackages from './components/Service/tourpackages/tourpackages';
import LanguageChanger from './components/language';
import Report from './testcomponent';

import { UserLangGetter } from './i18n';

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
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />  
      <Route path='/trip-package' element={<TourPackages/>} /> 
      <Route path='/language' element={<LanguageChanger/>} />  
      <Route path='/user-lang' element={<UserLangGetter/>} />   
    </Routes>
  
     </ContextProvider>

     {/*  Report project */}
     <Routes>
      <Route path='/report' element={<Report/>} />
     </Routes>
    
    </>
    
  )
}

export default App;
