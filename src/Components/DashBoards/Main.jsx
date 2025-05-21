import {useState} from 'react';
import Middle from './Wnav';
// import SideBar from './SideBar';
// import PreviewFile from '../Notes/PreviewFile';
import Workspaces from './Workspaces';


export default function Main() {

       const [wform , setWform] =useState(false);
       const [note , setNote] =useState(false);
  return (
    <section className='  ' >
    
     <Middle setWform={setWform} setNote={setNote} />
      <div className=" min-h-screen overflow-hidden">  

      <Workspaces  note={note} setNote={setNote} wform={wform}  setWform={setWform} />
     

     
      </div>
    </section>
  )
}
