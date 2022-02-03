import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Login() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const [email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");
    const [errors,serErrors] = useState("");
    const [redirect,setRedirect] = useState(false);

    const Login = (e) => {
        e.preventDefault();
        let items = {'email':email,'password':password};

        axios.post('http://fooddoose-main.test/api/login',items,{
            'content-type' : 'Application/json'
        }).then(
            response => {
                if(response.data.status === 201){
                    localStorage.setItem('token',response.data.token);
                    localStorage.setItem('user_name',response.data.user.name);
                    setRedirect(true)
              
                }
            }
        )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
            // serErrors(error.response.data.errors);
            Toast.fire({
                icon: 'error',
                title: error.response.data.message
              })
            if(error.response.data.errors){
                serErrors(error.response.data.errors);
            }else{
                serErrors('');
            }
            });
    }

    if (redirect) {
        return <Navigate to="/dashboard"/>;
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
                                            <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                        </div>
                                        <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control" onChange={(e)=>SetEmail(e.target.value)}
                                                placeholder="Enter Email Address" />
                                                <small className="text-danger">{errors.email}</small>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" onChange={(e)=>SetPassword(e.target.value)} placeholder="Password" />
                                            {/* <small className="text-danger">{errors.password}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small" style={{lineHeight: '1.5rem'}}>
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                    <label className="custom-control-label">Remember
                                                        Me</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="button" onClick={Login} className="btn btn-primary btn-block">Login</button>
                                        </div>
                                    </form>
                                    <hr/>
                                        <div className="text-center">
                                            <Link to="/register" className="font-weight-bold small">Create an Account!</Link>
                                        </div>
                                        <div className="text-center">
                                            <router-link to="/forget" className="font-weight-bold small">Forgot Password!</router-link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}
