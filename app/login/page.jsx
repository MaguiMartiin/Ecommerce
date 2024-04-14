'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Login() {
    return (
        <div className="flex justify-center items-start space-x-[5rem] p-[3rem]">
            <div className='bg-slate-200 w-1/3 p-[2rem] rounded '>
                <h1 className='text-2xl mb-[2rem]'>Ingresar</h1>
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
                            <div className=" flex flex-col justify-between">
                                <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email" placeholder='ej.:tunombre@email.com' className='p-[0.5rem] rounded h-[2rem]' />
                                <div>
                                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm absolute " />
                                </div>
                            </div>
                            <div  className=" flex flex-col justify-between mt-[2rem]">
                                <label htmlFor="password">Contraseña</label>
                                <Field type="password" id="password" name="password" className='p-[0.5rem] rounded h-[2rem]'/>
                                <div>
                                    <ErrorMessage name="password" component="p" className="text-red-500 text-sm absolute " />
                                </div>
                            </div>
                            <div className='mt-[1.5rem] text-sm font-bold'>
                                <h1>¿Olvidaste tu contraseña?</h1>
                            </div>
                            <button type="submit" className=' bg-black text-white w-full rounded p-[0.5rem] mt-[2rem] mb-[1rem] '>Ingresar</button>
                        </Form>
                    )}
                </Formik> 
            </div>

            <div className='bg-slate-200 w-1/3 p-[2rem] rounded '>
                <h1 className='text-2xl mb-[2rem]'>Crear cuenta</h1>
                <Formik onSubmit={() => {console.log('Formulario enviado');}}
                        initialValues={{name: '', email: '', password1: '', password2: ''}}
                        validate={(values) => {
                            const errors = {}
                            if (!values.name){
                                errors.name = 'Por favor ingresa tu nombre.'
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                                errors.name = 'Solo se permiten letras y espacios. '
                            }

                            if (!values.email) {
                                errors.email = "Por favor ingresa un email."
                            } else if (
                                !/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test( values.email)
                            ) {errors.email = "Formato de email invalido."}

                            if (!values.password1) {
                                errors.password1 = "Por favor ingresa tu contraseña."
                            } else if (values.password1.length < 8) {
                                errors.password1 = "La contraseña debe tener al menos 8 caracteres."}
                            
                            if (!values.password2) {
                                errors.password2 = "Por favor confirma tu contraseña."
                            } else if (values.password1 !== values.password2) {
                                errors.password2 = "Las contraseñas no coinciden."}

                            return errors
                        }}
                >
                    {({handleSubmit}) => (
                        <Form onSubmit={handleSubmit}> 
                            <div className=" flex flex-col justify-between">
                                <label htmlFor="name">Nombre</label>
                                <Field type="name" id="name" name="name" placeholder='ej.:María Perez' className='p-[0.5rem] rounded h-[2rem]' />
                                <div>
                                    <ErrorMessage name="name" component="p" className="text-red-500 text-sm absolute " />
                                </div>
                            </div>
                            <div className=" flex flex-col justify-between mt-[2rem]">
                                <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email" placeholder='ej.:tunombre@email.com' className='p-[0.5rem] rounded h-[2rem]' />
                                <div>
                                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm absolute " />
                                </div>
                            </div>
                            <div  className=" flex flex-col justify-between mt-[2rem]">
                                <label htmlFor="password1">Contraseña</label>
                                <Field type="password" id="password1" name="password1" className='p-[0.5rem] rounded h-[2rem]'/>
                                <div>
                                    <ErrorMessage name="password1" component="p" className="text-red-500 text-sm absolute " />
                                </div>
                            </div>
                            <div  className=" flex flex-col justify-between mt-[2rem]">
                                <label htmlFor="password">Confirmar contraseña</label>
                                <Field type="password" id="password2" name="password2" className='p-[0.5rem] rounded h-[2rem]'/>
                                <div>
                                    <ErrorMessage name="password2" component="p" className="text-red-500 text-sm absolute " />
                                </div>
                            </div>
                            <button type="submit" className=' bg-black text-white w-full rounded p-[0.5rem] mt-[3rem] mb-[1rem] '>Crear cuenta</button>
                        </Form>
                    )}
                </Formik>  
            </div>
        </div>       
    );
}
