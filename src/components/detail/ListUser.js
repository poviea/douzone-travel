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

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
`;

function ListUser({data, delName, modify, onUpdateToggle, onSelectUser}){
   

    return (
        <div>
            {data.map((ids)=>{
                return (
                    <div key={ids.id}>
                    <b style={{fontSize:'15px'}}>name : {ids.name} </b >&nbsp;&nbsp;&nbsp;&nbsp;<b style={{fontSize:'15px'}}> review : {ids.review}&nbsp;&nbsp;&nbsp;</b>
                <Button onClick={()=>{
                    delName(ids.id)
                }}>삭제</Button>
                    <TomatoButton onClick={()=>{
                        // modify(ids.id);
                        onUpdateToggle();
                        onSelectUser(ids);
                    }}>수정</TomatoButton>
                </div>)
            })}

        </div>
    );
}

export default ListUser