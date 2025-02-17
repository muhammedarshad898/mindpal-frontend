import { useState } from 'react'

import './App.css'
import './bootstrap.min (3).css'
import Landing from './pages/Landing'
import { Routes,Route } from 'react-router-dom'
import Advice from './pages/Advice'
import Appointment from './pages/Appointment'
import Post from './pages/Post'
import Test from './pages/Test'
import Auth from './pages/Auth'
import Alldoctors from './Components/Alldoctors'
import Psychologist from './Components/Psychologist'
import Psychratry from './Components/Psychratry'
import Postindividual from './Components/Postindividual'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Booking from './Components/Booking'
import Admindashboard from './Adminpages/Admindashboard'
import Adddoctor from './AdminComponents/Adddoctor'
import Viewappointments from './AdminComponents/Viewappointments'
import MyAppointment from './Components/MyAppointment'
import Allprofessionals from './AdminComponents/Allprofessionals'
import Dashboard from './Doctorcomponents/Dashboard'
import Paymentsuccess from './Components/Paymentsuccess'
import Paymentcancel from './Components/Paymentcancel'
import ProtectedRoute from './Components/ProtectedRoute'




function App() {
 

  return (
    <>
    
    <Routes>
  
   
      <Route path='/' element={<Landing></Landing>}></Route>
   
     
      <Route path='/advice' element={<Advice></Advice>}></Route>
      <Route element={<ProtectedRoute></ProtectedRoute>}>
     
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Route>
      

      
      <Route path='/test' element={<Test></Test>}></Route>
      <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path='/post' element={<Post></Post>}></Route>
      <Route path='/all' element={<Alldoctors></Alldoctors>}></Route>
      <Route path='/psychologist' element={<Psychologist></Psychologist>}></Route>
      <Route path='/dr' element={<Psychratry></Psychratry>}></Route>
    <Route path='/postind/:userid' element={<Postindividual></Postindividual>}></Route>
    <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path='/booking/:doctorid' element={<Booking></Booking>}></Route>
      <Route path='/admin' element={<Admindashboard></Admindashboard>}></Route>
      <Route path='/adddoctor' element={<Adddoctor></Adddoctor>}></Route>
      <Route path='/viewappo' element={<Viewappointments></Viewappointments>}></Route>
      <Route element={<ProtectedRoute></ProtectedRoute>}>
      
    
          <Route path="/myappo" element={<MyAppointment />} />
          </Route>
      
       
      <Route path='/allpro' element={<Allprofessionals></Allprofessionals>}></Route>
      <Route path='/docdash' element={<Dashboard></Dashboard>}></Route>
      <Route path='/payment/success' element={<Paymentsuccess></Paymentsuccess>}></Route>
      <Route path='/payment/cancel' element={<Paymentcancel></Paymentcancel>}></Route>
    </Routes>
    <ToastContainer></ToastContainer>
    
      
    </>
  )
}

export default App
