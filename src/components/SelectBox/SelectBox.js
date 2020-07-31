import React,{useState} from 'react'
import './selectBoxStyle.css';
export default function SelectBox(props) {
    
    const [value,setValue] = useState("");

    function handleChange(e){
        let val = e.target.value;
        setValue(val);
        props.handleChange(val);
    }

    return (
        <div className = "select-box-container">
            <label>{props.placeholder}</label>
            <select {...props} 
            onChange = {(e) => handleChange(e)}
            value = {value}
            className = "select-box">
                <option value = "">None</option>
                {props.children}
            </select>
        </div>
    )
}

SelectBox.defaultProps = {
    placeholder : "Name",
    handleChange : (e) => {},
}