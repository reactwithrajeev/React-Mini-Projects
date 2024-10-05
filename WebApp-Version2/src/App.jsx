import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import MainContant from "./components/MainContant";
import PostContextProvider from "./store/manageContext";

function App() {
  
  return (
    <PostContextProvider>
      <div className="appContainer">
        <SideBar/>
        <div className="content">
          <Header />
          <MainContant/>
          <Footer />
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;
