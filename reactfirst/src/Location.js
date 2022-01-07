import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Input,Statistic,Typography} from 'antd';
import { Spin } from "antd";
import "antd/dist/antd.css";
import { Collapse } from 'antd';
import millify from 'millify'; 
import styled from "styled-components"
import {useEffect,useState} from 'react'
import axios from 'axios'

function Location() {
    const { Title } = Typography;
  return (
   <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(8878686)} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(8858558858)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value='87655' /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value='887666'/></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value='76666666' /></Col>
        <Col span={12}><Statistic title="Total Markets" value='87654'/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} >Top 10 Cryptos In The World</Title>
        <Title level={3} >Show more</Title>
      </div>
    </>
  );
}

export default Location;
