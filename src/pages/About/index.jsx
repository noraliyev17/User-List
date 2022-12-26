import React from 'react';
import "./style.scss";
import { Outlet, NavLink } from 'react-router-dom';
const index = () => {
   return (
      <div>
         <ul className="d-flex w-25 justify-content-around  mt-5 ">
            <li><NavLink className={({isActive})=> isActive ? "bg-info text-white p-3 rounded-pill" : ""} to="/about/tab1"> Click Me </NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? "bg-warning text-white p-3 rounded-pill" : ""} to="/about/tab2">Click Me</NavLink></li>
         </ul>

      
   
         <div className=' p-5 rounded-pill dum-oval'></div>

         <Outlet/>
      </div>
   );
};

export default index;<h1>About</h1>