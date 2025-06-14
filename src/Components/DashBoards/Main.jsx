import { useState } from "react";
import Middle from "./Wnav";
// import SideBar from './SideBar';
// import PreviewFile from '../Notes/PreviewFile';
import Workspaces from "./Workspaces";

export default function Main() {
  const [wform, setWform] = useState(false);
  // const [showBtn, setShowBtn] = useState(false);

  return (
    <section className="">
      <Middle setWform={setWform}    />
      <div className=" min-h-screen overflow-hidden">
        <Workspaces
          wform={wform}
          setWform={setWform}
          
        />
      </div>
    </section>
  );
}
