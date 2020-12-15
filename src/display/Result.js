function Result(props) {
    const {data}=props;
    if(data){
        const {statusCode, body} = data.body;
        return (
            <div>
                <h2>結果</h2>
                <div>{statusCode}</div>
                <div>{body}</div>
            </div>
        );
    }
    else{
        return <div></div>
    }
}
export default Result;
