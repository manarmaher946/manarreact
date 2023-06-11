import { useState } from "react"
import Title from "./Title"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function RegistrationComponent(){


    const [userData, setUserData] = useState({
        name: "",
        email:"",
        username: "",
        password:"",
        comfirmpassword:""
    })

    const [errors, setErrors] = useState({
        nameErr: "",
        emailErr:"",
        usernameErr: "",
        passwordErr:"",
        comfirmpasswordErr:""
    })

    
    const changeUserData = (e) => {
        if(e.target.name == "name"){
            setUserData({
                ...userData,
                name: e.target.value
            })
            setErrors({
                ...errors,
                nameErr: e.target.value.length == 0 &&
                "Name Is Required" 
            })
        }else if(e.target.name == "email"){
            setUserData({
                ...userData,
                email: e.target.value
            })
            setErrors({
                ...errors,
                emailErr: e.target.value.length == 0 ?
                "Email Is Required" :!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(e.target.value)
                && "Invalid email address. Email must be in the format xxx@xxxx.com"
            })
        }else if(e.target.name == "username"){
            setUserData({
                ...userData,
                username: e.target.value
            })
            setErrors({
                ...errors,
                usernameErr: e.target.value.length == 0 ?
                "UserName Is Required" :(e.target.value).includes(" ")
                && 'Username should not contain spaces'
            })
        }else if(e.target.name == "password"){
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErrors({
                ...errors,
                passwordErr: e.target.value.length == 0 ?
                "Password Is Required" :e.target.value.length < 8 ?
                "Min Length is 8 Charachters":!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]+$/.test(e.target.value)
                && "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character from *@%$#"
                
            })
        }
        else{
            setUserData({
                ...userData,
                comfirmpassword: e.target.value
            })

            setErrors({
                ...errors, 
                comfirmpasswordErr: e.target.value.length == 0 ? "Comfirm Password Is Required" :  (e.target.value!=userData.password) && 
                "Comfirm Password should match Password"
            })
        }
    }

    const submitData = (e) => {
        e.preventDefault()
        if(!errors.usernameErr && !errors.positionErr){
            console.log(e)
        }
    }


    return(
        <>
            <form className="container" onSubmit={(e) => submitData(e)} style={{padding:"40px",width:"800px"}}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" 
                    className={`form-control ${errors.nameErr && 'border-danger'}`} 
                    value={userData.name} onChange={(e) => changeUserData(e)} name="name"/>
                    <p className="text-danger"> {errors.nameErr} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" 
                    className={`form-control ${errors.emailErr && 'border-danger'}`}
                    value={userData.email}  onChange={(e) => changeUserData(e)} name="email"/>
                    <p className="text-danger">  {errors.emailErr}  </p>
                </div>

                <div className="mb-3">
                    <label className="form-label">UserName</label>
                    <input type="text" 
                    className={`form-control ${errors.usernameErr && 'border-danger'}`} 
                    value={userData.username} onChange={(e) => changeUserData(e)} name="username"/>
                    <p className="text-danger"> {errors.usernameErr} </p>
                </div>

                <div className="mb-3">
                <label className="form-label">Password</label>
                    <input type="password" 
                    className={`form-control ${errors.passwordErr && 'border-danger'}`} 
                    value={userData.password} onChange={(e) => changeUserData(e)} name="password"/>
                    <p className="text-danger"> {errors.passwordErr} </p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Comfirm Password</label>
                    <input type="password" 
                    className={`form-control ${errors.comfirmpasswordErr && 'border-danger'}`} 
                    value={userData.comfirmpassword} onChange={(e) => changeUserData(e)} name="comfirmpassword"/>
                    <p className="text-danger"> {errors.comfirmpasswordErr} </p>
                </div>
            
                <button type="submit" 
                       className="btn btn-success"
                       disabled={errors.nameErr || errors.usernameErr||errors.passwordErr||errors.emailErr||errors.comfirmpasswordErr}
                       >Submit</button>
            </form>
        
        </>
    )
}

export default RegistrationComponent