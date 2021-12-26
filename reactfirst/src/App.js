import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Input,Statistic } from 'antd';
import { Spin } from "antd";
import "antd/dist/antd.css";
import { Collapse } from 'antd';
import millify from 'millify'; 
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star, StarBorder } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Axios from 'axios';

function App() {
  const { Panel } = Collapse
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 4,
  });
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);
  useEffect(() => {
    Axios.get('https://ipapi.co/json/').then((res) => {
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    });
  }, [])
  console.log(lat)
  return (
   <>
       <div className="App">
        <div className="left">
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>
          <h4>Approximate location: </h4>
           
<p>{ipDetails.city}, {ipDetails.region},
          {ipDetails.country_name}.</p>
 
 
          <h4>Internet Service Provider(ISP):</h4>
           
<p>{ipDetails.org}</p>
 
        </div>
        <Star/>
        </div>
  
    </>
  );
}

export default App;
