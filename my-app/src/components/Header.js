import React from "react";

function Header(props) {
    console.log(props)
    return <h1>Hello there indeer, {props.name}, {props.color}</h1>;
}