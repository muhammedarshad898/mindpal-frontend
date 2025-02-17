import React from 'react'
import { useState ,useEffect} from 'react'
import { loginapi, registerapi } from '../services/allapi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const[Authstatus,setAuthsetstatus]=useState(false)
  const[user,setuser]=useState({
    email:"",password:"",username:"",role:""

  })

 
  
  const nav=useNavigate()
  const handleAuthstatus=()=>{
    setAuthsetstatus(!Authstatus)
  }
  const handleregister=async()=>{
    console.log(user)
    const{email,password,username,role}=user
    if(!email||!password||!username){
      toast.warning("Enter a valid Input")

    }
    else{
     
      const res=await registerapi(user)
      console.log(res)
      if(res.status==201){
        toast.success("Succesfully Registered")
        setuser({
          email:"",password:"",username:"",role:""
      
        })
        handleAuthstatus()
      }
      else{
        if(res?.response?.data){
          toast.error(res.response.data)
        }
        else{
          toast.error("something went wromg")

        }
        
      }
    }
  }
  
  
      
 

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('token');
    if (isAuthenticated) {
        nav('/appointment', { replace: true }); 
    }
}, []);
 
  const handlelogin = async () => {
    const { email, password } = user; 
    if (!email || !password) {
        toast.warning("Enter a valid input");
    } else {
        try {
            const res = await loginapi({ email, password }); 
            console.log(res);

            if (res.status === 200) {
                toast.success("Login Successful");
                
                
                setuser({
                    email: "",
                    password: ""
                });

               
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem('userid', res.data.userid);
                sessionStorage.setItem('uname', res.data.username);
                sessionStorage.setItem('role', res.data.role);
                sessionStorage.setItem('email', res.data.email);
                
               setAuthsetstatus(true)

                

               
                if (res.data.role === 'admin') {
                    nav('/admin');
                } else if (res.data.role === 'doctor') {
                    nav('/docdash');
                } else {
                    nav('/');
                }
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.error(error);
            toast.error("Login failed. Please try again.");
        }
    }
};


  
  return (
    <>
    
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:"100vh"}}>
      <div className='border shadow w-50 d-flex flex-column justify-content-center align-items-center h-75' id='auth'>
        <div className='authbg p-3 w-50 d-flex flex-column flex-wrap justify-content-center align-items-center rounded' style={{height:"fit-content"}}>
        <h1 className='text-center mb-5 loghead'>
            {
              Authstatus?
              <>Register</>
              :<>Login</>
            }
          </h1>
          
          


       
        {
          Authstatus&&(  
            <>
            <input type="text" className='form-control mb-3 w-75' placeholder='UserName' value={user.username} onChange={(e)=>setuser({...user,username:e.target.value})}  />
            <select
                  className='form-control mb-3 w-75'
                  value={user.role}
                  onChange={(e) => setuser({ ...user, role: e.target.value })}
                >
                  <option value="user">User</option>
                  <option value="doctor">Doctor</option>
                </select>
            </>      
          
        
          )
        }
        
          
          
        <input type="text" className='form-control mb-3 w-75' placeholder='Email' value={user.email} onChange={(e)=>setuser({...user,email:e.target.value})}  />
          <input type="password" className='form-control mb-3 w-75' value={user.password} placeholder='Password' onChange={(e)=>setuser({...user,password:e.target.value})}  />
          <div className='d-flex justify-content-between mt-5'>
            {
              Authstatus?
              <button className='btn btn-success' onClick={handleregister}>Register</button>
              :
              <button className='btn btn-success' onClick={handlelogin}>Login</button>
            }
           
              <button className='btn btn-link' onClick={handleAuthstatus}>
                {
                  Authstatus?
                  <>Already An User?</>
                  :
                  <>New User?</>
                }
              </button>

              
             
            
           
          </div>

        </div>
        
         
        </div>

      </div>
    
    </>
  )
}

export default Auth