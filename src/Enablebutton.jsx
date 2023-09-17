import React, {useState} from "react";

function Enablebutton()
{
const[formValue, setFormValue]= useState({username:'', email:'', phone:'', address:'', status:''});
const[disable, setDisable]=useState('typing');

const handleInput=(e)=>{
    const {name, value}= e.target;
    setFormValue({...formValue, [name]:value});
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formValue);   
    setDisable('submitted');

}}
export default Enablebutton;