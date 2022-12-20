import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import BankPost from './components/Header/BankPost/BankPost';
import BankList from './components/Header/BankPost/BankList/BankList';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar2 from './components/NavBar/Navbar2';
import BuyList from './components/Buyer/BuyList';
import BuyerDetail from './components/Buyer/BuyerDetail';
import CartScreen from './screens/CartScreen';
import {Container} from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Navv from './components/Navv/Navv';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import NewsCard from './components/News/NewsCard';
import Footer from './components/Footer/Footer';
import Chart from './components/Chart/Chart';
import EducationScreen from './screens/EducationScreen';
import CryptoList from './screens/CryptoList';



function App() {
  return (
    <Router>
     
      <main className='ss'>
      
      
        <Route path='/' exact render = {props => 
          <div>
            <Navv/>
            <HomeScreen/>
            <About/>
            <Footer/>
          </div>
        } />

        <Route path='/login' exact render = {props => 
          <div>
            <Navv/>
            <LoginScreen/>
            <Footer/>
          </div>
        } />

        <Route path='/Register' exact render = {props => 
          <div>
            <Navv/>
            <RegisterScreen/>
            <Footer/>
          </div>
        } />

        <Route path='/Profile' exact render = {props => 
          <div>
            <Navv/>
            <ProfileScreen/>
            <Footer/>
          </div>
        } />

        <Route path='/Banking' exact render = {props => 
          <div>
            <Navv/>

              <BuyList/>
              <Footer/>
           
          </div>
        } />

        <Route path='/Updates' exact render = {props => 
          <div>
            <Navv/>
            <NewsScreen/>
            <Footer/>
           
          </div>
        } />

  

        <Route path='/chart' exact render = {props => 
          <div>
            <Navv/>
            <Chart/>
            <Footer/>
           
          </div>
        } />

        <Route path='/Banking/:id' exact render = {props => 
          <div>
           
              <Navv/>
              <BuyerDetail/>
              <Footer/>
           
          </div>
        } />

        <Route path='/Education' exact render = {props => 
                  <div>
                  
                      <Navv/>
                      <EducationScreen/>
                      <Footer/>
                  
                  </div>
                } />
        
        <Route path='/crypto' exact render = {props => 
                  <div>
                  
                      <Navv/>
                      <CryptoList/>
                      <Footer/>
                  
                  </div>
                } />


        <Route path='/cart/:id?' exact render = {props => 
                  <div>

                      <Navv/>
                      <CartScreen/>
                      <Footer/>
                      
                    
                  
                  </div>
                } />


     
   
      </main>
      
    </Router>
  );
}

export default App;
