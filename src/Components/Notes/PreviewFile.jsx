import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Wnav from "../DashBoards/Wnav";
import NoteForm from "../../forms/NoteForm";

export default function PreviewFile() {
const location = useLocation();
  const [note, setNote] = useState(false);
  const [showBtn, setShowBtn] = useState(false); // local state in Preview

  useEffect(() => {
    if (location.state?.showBtn) {
      setShowBtn(true);
    }
  }, [location]);
  return (
    <section
      id="preview"
      className="border border-green-500  w-full h-screen">
      <Wnav senote={setNote} showBtn={showBtn} />

      <div className=" min-h-screen overflow-hidden">
        {note && <NoteForm setNote={setNote} />}
      </div>
    </section>
  );
}
