import React, { useContext } from 'react'
import AuthContext from '../context/authContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {

    const ctx = useContext(AuthContext);

    // console.log("isRegistering", ctx.registering)

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''

        },
        validationSchema: Yup.object({
            username: Yup.string(),
               
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()

                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            // console.log("clicked")
            if (!ctx.registering) {
                console.log("logging in");
                ctx.loginUser(values.email, values.password);
            }
            if (ctx.registering) {
                ctx.registerUser(values.email, values.password);
            }

        },
    });




    const loginButton = (
        <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login to your account
        </button>)



    const registerButton = (
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register  to your account </button>
    )



    return (
        <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={formik.handleSubmit}>


            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{!ctx.registering ? "Login to our platform": "Register to out platform"}</h3>

            {ctx.registering && <div>
                <label htmlfor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                <input
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="troias007nz"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username} />
                {formik.touched.username && formik.errors.username ? (
                    <div>{formik.errors.username}</div>
                ) : null}
            </div>}

            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="email@company.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="current-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="flex justify-between">

                <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>

          

            {!ctx.registering && loginButton}
         
            {ctx.registering && registerButton}
          


            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                {!ctx.registering ? "Not registered" : "Already registered?"} <a className="text-blue-700 hover:underline dark:text-blue-500" onClick={ctx.toggleRegister}>{!ctx.registering? "Create account" : "Log in"}</a>
            </div>



        </form>
    )
}

export default LoginForm
