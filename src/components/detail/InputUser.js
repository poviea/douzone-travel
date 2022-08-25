import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Button = styled.button`

color: palevioletred;
font-size: 0.5em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;

`;
const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;
function InputUser({username, lastName, onChange, onAdd}){
  

    return (
        <div>
            <Input name={"name"} placeholder={"name"} onChange={onChange} value={username} size={5} />
            <Input name={"review"} placeholder={"review"} onChange={onChange} value={lastName} size={50}/>
            <Button onClick={onAdd}>추가</Button>
        </div>
    );
}

export default InputUser