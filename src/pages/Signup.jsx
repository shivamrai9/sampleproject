import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    let [register, setRegister] = useState({
        username: "",
        email: "",
        password: "",
        location: "",
        name: ""
    })
    let navigate = useNavigate()

    const registerUser = async (e) => {
        console.log(e)
        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e),
            });

            if (response.ok) {
                // Handle success (e.g., show a success message)
                console.log('User created successfully');
                console.log(response)
            } else {
                // Handle error (e.g., show an error message)
                console.error('Failed to create user');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
        console.log(e)

    }


    function handleChange(e) {
        if (e.target.name === "reg_name") {
            setRegister((prev) => {
                return { ...prev, name: e.target.value }
            })
        }else if (e.target.name === 'reg_username') {
            setRegister((prev) => {
              return { ...prev, username: e.target.value }
            })
          } else if (e.target.name === 'reg_email') {
            setRegister((prev) => {
                return { ...prev, email: e.target.value }
            })
        }
        else if (e.target.name === "reg_psw") {
            setRegister((prev) => {
                return { ...prev, password: e.target.value }
            })
        }
    }


    return (
        <>
            <div className="p-2 h-screen overflow-y-scroll" >
                <div className="p-1"  >
                    <div className="max-w-md m-auto rounded-xl p-6 shadow-lg bg-white">
                        <div className="m-auto rounded w-16 h-16"><img src="" alt="" /></div>
                        <div className="font-bold text-2xl text-center mt-5 text-gray-800">
                            <h1>Create an account</h1>
                        </div>
                        <div className="text-gray-800 text-md text-center mt-2">
                            Already have an account? <span onClick={() => { navigate('/login') }} className="text-blue-400 font-bold hover:underline cursor-pointer">
                                Log in
                            </span>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="" className="text-gray-600 font-semibold">
                                Name
                            </label>
                            <input onChange={(e) => { handleChange(e) }} value={register.name} name="reg_name" type="text" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="" className="text-gray-600 font-semibold">
                                User Name
                            </label>
                            <input onChange={(e) => { handleChange(e) }} value={register.username} name="reg_username" type="text" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="" className="text-gray-600 font-semibold">
                                Email
                            </label>
                            <input onChange={(e) => { handleChange(e) }} value={register.email} name="reg_email" type="email" required className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-600 font-semibold" htmlFor="">
                                Password
                            </label>
                            <input value={register.password} onChange={(e) => { handleChange(e) }} name="reg_psw" type="password" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div className="mt-6">
                            <button onClick={() => { registerUser(register) }} className="bg-blue-500 w-full rounded-md text-white font-bold py-2">
                                Create Account
                            </button>
                        </div>
                        <div className="flex items-center gap-x-2 mt-5">
                            <div className="flex-auto h-0.5 bg-gray-300" />
                            <div className="">or sign up with</div>
                            <div className="flex-auto h-0.5 bg-gray-300" />
                        </div>
                        <div className="flex text-center mt-3 gap-x-5">
                            <div className="flex-1 border rounded-xl hover:bg-blue-100 cursor-pointer">
                                <div className="m-auto flex justify-center py-2">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="-0.5 0 48 48"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="#000000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">

                                            <title>Google-color</title> <desc>Created with Sketch.</desc>
                                            <defs> </defs>
                                            <g
                                                id="Icons"
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                            >

                                                <g id="Color-" transform="translate(-401.000000, -860.000000)">

                                                    <g id="Google" transform="translate(401.000000, 860.000000)">

                                                        <path
                                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                            id="Fill-1"
                                                            fill="#FBBC05"
                                                        >

                                                        </path>
                                                        <path
                                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                            id="Fill-2"
                                                            fill="#EB4335"
                                                        >

                                                        </path>
                                                        <path
                                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                            id="Fill-3"
                                                            fill="#34A853"
                                                        >

                                                        </path>
                                                        <path
                                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                            id="Fill-4"
                                                            fill="#4285F4"
                                                        >

                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
