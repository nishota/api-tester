function TextArea(props) {
    const {label, onChange} = props;
    return (
        <div>
        <ul className="row">
            <li>
                <p>{label}</p>
            </li>
            <li>
                <textarea  onChange={onChange}/>
            </li>
        </ul>
    </div>
    );
}

export default TextArea;
