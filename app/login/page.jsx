'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Login() {
    return (
        <Formik onSubmit={() => {console.log('Formulario enviado');}}
                initialValues={{email: '', password: ''}}
                validate={(values) => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = "Por favor ingresa un email."
                    } else if (
                        !/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test( values.email)
                    ) {errors.email = "Formato de email invalido."}

                    if (!values.password) {
                        errors.password = "Por favor ingresa tu contraseña."
                    } else if (values.password.length < 8) {
                        errors.password = "La contraseña debe tener al menos 8 caracteres."}
                    return errors
                }}
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}> 
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <div>
                            <ErrorMessage name="email" component="p" className="text-red-500 text-sm italic" />
						</div>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <Field type="password" id="password" name="password"/>
                        <div>
                            <ErrorMessage name="password" component="p" className="text-red-500 text-sm italic" />
						</div>
                    </div>
                    <div>
                        <h1>¿Olvidaste tu contraseña?</h1>
                    </div>
                    <button type="submit" >Ingresar</button>
                </Form>
            )}
        </Formik>        
    );
}
