import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Wnav from "../DashBoards/Wnav";
import NoteForm from "../../forms/NoteForm";
import TextEditor from "./TextEditor"; // ✅ Import the notepad

export default function PreviewFile() {
  const location = useLocation();
  const [note, setNote] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (location.state?.showBtn) {
      setShowBtn(true);
    }
  }, [location]);

  return (
    <section id="preview">
      <Wnav senote={setNote} showBtn={showBtn} />

      <main className="flex p-2 gap-3 h-screen">
        <div className="bg-amber-500 text-cyan-300 w-[30%] p-2 rounded">
          div 1
        </div>

        <div className="w-[70%]">
          <TextEditor showBack={false} /> {/* 👈 Integrated notepad here */}
        </div>
      </main>

      <div className="overflow-hidden">
        {note && <NoteForm setNote={setNote} />}
      </div>
    </section>
  );
}
