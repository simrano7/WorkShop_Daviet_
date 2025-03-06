import { useState } from "react"

export default function Form(){
    //js
    var[email,setEmail] = useState("");
    var[password,setPassword]=useState("");
    var[Image,setImage]=useState("");
    function changeEmail(e){
        console.log("change email call",e.target.value);
        setEmail(e.target.value)
    }
    function handleForm(e){
        e.preventDefault()
        console.log("form submit fun call");
        console.log("email value",email);
        
        
    }
    return(
        // jsx
        <>
              {/* Page Header Start */}
  <div className="page-header mb-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Form  {password}</h2>
        </div>
        <div className="col-12">
          <a href="">Home</a>
          <a href="">Form</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
 
  <div className="container">
    <form onSubmit={handleForm}>
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={changeEmail}/><br />
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br />
        <label htmlFor="">Image</label>
        <input type="file"  onChange={(e)=>{setImage(e.target.files[0])}} /><br />
        <button >Submit</button>
    </form>
    </div>
 
        </>
    )
}