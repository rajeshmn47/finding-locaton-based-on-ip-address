import React from "react"
import Location from "./Location"
import millify from 'millify';
import { Typography, Row, Col, Statistic,Card } from 'antd';
import LineChart from "./LineChart";
import Cryptocurrencies from "./Cryptocurrencies";
import './App.css'
import { Layout, Space } from 'antd';
import Exchanges from "./Exchanges";
import { Line, Bar } from 'react-chartjs-2';
import {AppBar,makeStyles} from '@material-ui/core';
import Homepage from './Homepage'
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import {useRef, Fragment} from 'react'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Navbar'
import CryptoDetails from './CryptoDetails'
import News from './News'
import { Link } from 'react-router-dom';

function App(){


  return (<><div className="app">
  <div className="navbar">
    <Navbar />
  </div>
  <div className="main">
    <Layout>
    <div className="routes">
   
        <Routes>
         
          <Route path="/"
            element={<Homepage />}/>
          <Route path="/exchanges"
            element={<Exchanges />}/>
          
          <Route exact path="/cryptocurrencies"
            element={<Cryptocurrencies />}/>
        
          <Route exact path="/crypto/:coinId"
            element={<CryptoDetails />}/>
             <Route exact path="/news"
            element={<News />}/>
        </Routes>
     </div>
    </Layout>    <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
  </div>
</div></>)
      
  
  
}
export default App