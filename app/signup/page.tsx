import React from 'react'
import Image from "next/image";
import Link from 'next/link';


function page() {
  return (
    <>

<h1 className="font-medium size-[20px] pd">PassConnect </h1>


        <div className="flex items-center justify-center h-screen">
            <Image src="/3dbg.png" alt="Background" width={800} height={600} className="absolute"/>
                <div className="h-[500px] w-[600px] rounded-2xl border border-gray-100 bg-white/30 backdrop-blur-md p-6 space-y-4 md:space-y-6 sm:p-8
                shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Sign up
                    </h1>
                        <form className="max-w-sm mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                                        Your email</label>
                                        <input 
                                              type="email" 
                                              id="email" 
                                              className="bg-[rgba(249,250,251,0.3)] border border-[rgba(209,213,219,0.5)] text-gray-900 text-sm rounded-lg 
                                                         backdrop-blur-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                        " 
                                              placeholder="username@knust.edu.gh" 
                                              required 
                                      />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900
                                    ">Your password</label>
                                    <input 
                                          type="password" 
                                          id="password" 
                                          className="bg-[rgba(249,250,251,0.3)] border border-gray-300 text-gray-900 text-sm rounded-lg 
                                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    " 
                                          placeholder="Password" 
                                          required 
                                    />
                                </div>
                                  {/* Ignore the remember me and Signup part  */}
                                {/*  <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                          <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border
                                           border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700
                                            dark:border-gray-600 dark:focus:ring-primary-600  dark:ring-offset-gray-800" required/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                          <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div> */}

                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 
                                focus:outline-none mt-[40px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                                    <p className="text-sm font-light text-gray-700">
                                        Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                                    </p>
                                


                        </form>

                </div>

        </div>

    
    
    </>
  )
}

export default page