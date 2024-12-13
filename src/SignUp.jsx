import { useState } from "react";

const SignUp = () => {
    const [formdata,setformdata]=useState({
        name:'',
        email:'',
        password:''
    })
    const[nameError,setnameError]=useState('')
    const[emailError,setemailError]=useState('')
    const[passwordError,setpasswordError]=useState('')



    const changeHandler=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
        console.log(formdata);
        
    }

    const validate=(e)=>{
        e.preventDefault();
        let valid=true;
        if(formdata.name===''){
            setnameError('plaese enter the name')
            valid=false;
        }
        else if(formdata.name.length<5){
            setnameError('plaese enter the name atleast 5 charector')
            valid=false;
        }
        else{
            setnameError('')
        }
        if(formdata.email===''){
            setemailError('plaese enter the email')
            valid=false;
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formdata.email)){
            setemailError('plaese enter the valid email')
            valid=false;
        }
        else{
            setemailError('')
        }
        if(formdata.password===''){
            setpasswordError('plaese enter the password')
            valid=false;
        }
        else if(formdata.password.length<7){
            setpasswordError('plaese enter the name atleast 7 charector')
            valid=false;
        }
        else{
            setpasswordError('')
        }
       if(valid){
        alert('sigup successfull')
       }
    }
  return(
<div>
    <form action="" className="p-5">
    <h1>Form validation</h1>
    <label >Name:</label><br/>
    <input type="text" value={formdata.name} onChange={changeHandler} name="name" id="name" placeholder="Enter the name"/><br/>
    <p className="text-danger">{nameError}</p>
    <label >Email:</label><br/>
    <input type="email" value={formdata.email} onChange={changeHandler} name="email" id="email" placeholder="Enter the email"/>  <br/>
    <p  className="text-danger">{emailError}</p>
    <label >Password:</label><br/>
    <input type="password" value={formdata.password}  onChange={changeHandler} name="password" id="password" placeholder="Enter the password"/><br/>
    <p className="text-danger">{passwordError}</p>

   <button onClick={validate}>Validate</button>
    </form>

</div>

  )
};

export default SignUp;
