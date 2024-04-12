'use client'
import React from 'react';
import { Formik, ErrorMessage } from 'formik';

export default function Login() {
    return (
        <Formik onSubmit={() => {console.log('Formulario enviado');}}
                initialValues={{email: '', password: ''}}
                validate={(values) => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = "Se requiere un email"
                    } else if (
                        !/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test( values.email)
                    ) {
                        errors.email = "Formato de email invalido"
                    }
                    if (!values.password) {
                        errors.password = "Se requiere una contraseña"
                    } else if (values.password.length < 8) {
                        errors.password =
                            "La contraseña debe tener al menos 8 caracteres."
                    }
                    return errors
                }}
        >
            {({values, errors, handleSubmit, handleChange, handleBlur}) => (
                <form onSubmit={handleSubmit}> 
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        <div>
							<ErrorMessage name="email" component={() => (
								<p className="text-red-500 text-xm italic">
												{errors.email}
							    </p>
								)}/>
						</div>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        <div>
							<ErrorMessage name="password3.." component={() => (
								<p className="text-red-500 text-xm italic">
												{errors.password}
							    </p>
								)}/>
						</div>
                    </div>
                    <button type="submit" >Ingresar</button>
                </form>
            )}
        </Formik>        
    );
}
