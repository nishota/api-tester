import React, { useState } from 'react';
import Button from '../component/Button';
import TextArea from '../component/TextArea';
import TextBox from '../component/TextBox';

import Request from '../request';

function Input(props) {
    const {callback} = props;
    const [urlData, setUrlData] = useState('');
    const [jsonData, setJsonData] = useState('');
    const setUrl = e => setUrlData(e.target.value);
    const setJson = e => setJsonData(e.target.value);
    const click = () =>{
        try{
            const result = JSON.parse(jsonData);
            const req = new Request(urlData).post({result});
            req.then(callback);
        }
        catch(error){
            console.error("JSONをobjectに変換できませんでした。", error);
        }
    };
    return (
        <div>
            <TextBox label="URL" onChange={setUrl}/>
            <TextArea label="JSON" onChange={setJson}/>
            <Button label="Send to Server" onClick={click}></Button>
        </div>
    );
}
export default Input;
