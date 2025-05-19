// import React from 'react';
import Middle from './Middle';
// import SideBar from './SideBar';
import PreviewFile from '../Notes/PreviewFile';
import Workspaces from './Workspaces';


export default function Main() {
  return (
    <section className='  ' >
    
      <Middle/>
      <div className=" min-h-screen overflow-hidden">  

      <Workspaces  />
     
{/* <div className="none"> */}

      {/* <PreviewFile  /> */}
{/* </div> */}
     
      </div>
    </section>
  )
}
