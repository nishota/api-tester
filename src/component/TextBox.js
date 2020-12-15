function TextBox(props) {
    const {label, onChange, value} = props;
    return (
        <div>
            <ul className="row">
                <li>
                    <p>{label}</p>
                </li>
                <li>
                    <input onChange={onChange} value={value}/>
                </li>
            </ul>
        </div>
    );
}

export default TextBox;
