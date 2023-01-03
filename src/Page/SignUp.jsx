import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/IMG_5848.jpeg'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GrApple } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

const SignUp = () => {
    const [showpass, setShowPass] = useState(false)

    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const email= form.email.value
        const name=form.name.value
        const number=form.number.value
        const password=form.password.value
        const confirm=form.confirm.value
        console.log(email,name,number, password, confirm);

        const addSignup={
          email,
          name,
          number,
          password,
          confirm
        }
        console.log(addSignup);
        fetch('http://localhost:5000/signup', {
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(addSignup)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          form.reset()
        })
    }
    return (
        <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24  ">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
              Sign UP To
              <br className="hidden md:block" />
              <span className='text-2xl'> Tito Softwares</span>
             
            </h2>
            
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                
              </div>
            
              <p className="text-sm font-bold text-black">
              you already Have An Account 
             <br></br>
             You Can <Link to={'/signin'}>Login here</Link>
              </p>
            </div>
            <div>
            
           
              <p className="">
                 <img
            className="w-full h-9 rounded sm:h-96"
            src={img}
            alt=""
          />
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000">
            <h1 className='text-3xl font-sans font-bold mb-1'>Sign UP </h1>
       
          <form onSubmit={handleSubmit} className=''>
          <div className='mb-3 '>
          <input name='email' type="email" placeholder="enter email" className=" bg-blue-100 input   w-full max-w-xs" />
          </div>
          <div className='mb-3'>
          <input name='name' type="text" placeholder="User Name" className="bg-blue-100 input   w-full max-w-xs" />
          </div>
          <div className='mt-3'>
          <input name='number' type="number" placeholder="number" className="bg-blue-100 input   w-full max-w-xs" />
          </div>
          <div className='mt-3'>
          <div className=" w-full relative flex items-center justify-center">

          <input name='password' type={showpass ? "text" : "password"}  placeholder="password" className="bg-blue-100 input   w-full max-w-xs" />     
            
                                <div onClick={()=>setShowPass(!showpass)} className="absolute right-0 mt-2  cursor-pointer xl: mr-28">
                                    <div id="show">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                   
                                </div>
                          
                        </div>
          
          </div>
          <div className='mt-3'>
          <div className=" w-full relative flex items-center justify-center">

          <input name='confirm' type={showpass ? "text" : "password"}  placeholder="Confrim password" className="bg-blue-100 input   w-full max-w-xs" />     
            
                                <div onClick={()=>setShowPass(!showpass)} className="absolute right-0 mt-2  cursor-pointer xl: mr-28">
                                    <div id="show">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                   
                                </div>
                          
                        </div>
          
          </div>
       
          
          <div className='mt-3'>
            <button className='text-white inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-blue-600 w-full max-w-xs'>
           Register
            </button>
          </div>
          </form>
        
 
  <div className="divider text-center w-80 xl:ml-20 ">OR</div>
 
 <div className='text-center w-80 xl: ml-40 flex gap-4'>
    <span className=' text-blue-600 text-3xl'><BsFacebook/></span>
    <span className=' text-blue-600 text-3xl'><FcGoogle/></span>
    <span className=' text-black text-3xl'><BsGithub/></span>
    <span className=' text-black text-3xl'><GrApple/></span>
 </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SignUp;