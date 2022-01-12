import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
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
                                            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address" />
                                                <small className="text-danger" ></small>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                                                <small className="text-danger"></small>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small" style={{lineHeight: '1.5rem'}}>
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                    <label className="custom-control-label">Remember
                                                        Me</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Login</button>
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
