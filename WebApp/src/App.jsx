import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/Sidebar';
import CardContextProvider from './store/Card-Context-Store';
import MainContent from './components/MainContent/MainContent';

function App() {

  // const [tabName,setTabName] = useState("Home");

  // let handleClick=(Name)=>{
  //   setTabName(Name)
  // }


  return (
    <CardContextProvider>
    <div className="app-container">
        <Sidebar/>
        <div className="app-content">
        <Header/>
        <MainContent/>
        <Footer/>
        </div>
    </div>
    </CardContextProvider>
  )
}

export default App