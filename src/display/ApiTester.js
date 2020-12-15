import '../App.css';
import React, { useState } from 'react';
import Input from './Input'
import Result from './Result';

function ApiTester() {
  const [data, setData] = useState('');
  const callback = e => setData(e);
  return (
    <div>
        <h1>API TESTER</h1>
        <Input callback={callback}></Input>
        <Result data={data}></Result>
    </div>
  );
}

export default ApiTester;
