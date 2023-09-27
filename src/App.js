import './App.css';
import { Route,Routes,redirect} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Images from './components/Images';
import PageNotFound from './components/PageNotFound';
function App() {
 return(
  <>
 <Routes>

<Route path='/' element={<Home/>}>Home </Route>
<Route path='/about'  element={<About/>}>About</Route>
<Route path='/contact'  element={<Contact/>}>Contact</Route>
<Route path='/images'  element={<Images/>}> Images</Route>
 <Route path="*" element={<PageNotFound/>}></Route>
 
 




 </Routes>
  </>
 )
}

export default App;
