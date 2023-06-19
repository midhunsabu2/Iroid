import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

const Home = () => {

   const {user} = useContext(UserContext)
  return (
    <>

        <div className="nav">
        {!!user && (<span className="Text1">Hi, {user.name}</span>)}
        <Link to={"/signup"}><button typeof="submit" className="btn2">Logout</button></Link>
        </div>

        <div className="containers">
        <form action="/" id="forms">
            <label htmlFor="name" className="heading">Name your Organization</label>
            <input className='input-field' type="text" id="name" placeholder="enter organization name"/>
        </form>
        <h3>Select your organization Type below</h3>
        <div class="box-container">
             <div  className="box">
                <img className="ico1" src="./images/icon1.png" alt=""/>
             </div>
             <div className="box">
                <img className="ico2" src="./images/icon2.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img  src="./images/icon3.png" alt=""/>
                <p>Education</p>
             </div>
             <div className="box">
                <img src="./images/icon4.png" alt=""/>
                <p>Consultancy</p>
             </div>
             <div className="box">
                <img src="./images/icon5.png" alt=""/>
                <p>Logistics</p>
             </div>
             <div className="box">
                <img src="./images/icon6.png" alt=""/>
                <p>Manufacturing</p>
             </div>
             <div className="box">
                <img src="./images/icon7.png" alt=""/>
                <p>Tourism</p>
             </div>
             <div className="box">
                <img src="./images/icon8.png" alt=""/>
                <p>IT</p>
             </div>
        </div>
       <div className='button'> <button className='btn4'>Next</button></div>

       <div className="button">
        <div className='dot dot1'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
       </div>
   </div>
</>

  )
}

export default Home