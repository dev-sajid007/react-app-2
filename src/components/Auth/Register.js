import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

export default function Register() {

    const [name,SetName] = useState("")
    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState("")

    function Signup(){
        let items = {'name':name,'email':email,'password':password};
        
        
    
        axios.post('http://api-main.test/api/register',items,{
            'content-type' : 'Application/json'
        })
        .then(
            response => Toast.fire({
                icon: 'success',
                title: response.data.message
              })
            
            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
            
            });


    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card shadow-sm my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="login-form">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Register</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group" >
                                                <input type="text" value={name} onChange={(e)=>SetName(e.target.value)} className="form-control" id="exampleInputFirstName" placeholder="Enter Full Name" />
                                                <small className="text-danger" v-if="errors.name"></small>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" value={email}  onChange={(e)=> SetEmail(e.target.value)} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address" v-model="form.email" />
                                                <small className="text-danger" v-if="errors.email"></small>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" value={password}  onChange={(e)=> SetPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder="Password" v-model="form.password" />
                                                <small className="text-danger" v-if="errors.password"></small>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="exampleInputPasswordRepeat"
                                                    placeholder="Repeat Password" v-model="form.password_confirmation" />
                                            </div>
                                            <div className="form-group">
                                                <button onClick={Signup} type="button" className="btn btn-primary btn-block">Register</button>
                                            </div>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="font-weight-bold small" to="/">Already have an account?</Link>
                                        </div>
                                        <div className="text-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
