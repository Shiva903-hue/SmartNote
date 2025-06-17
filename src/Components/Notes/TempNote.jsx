import { Link } from "react-router-dom";
import {Notebook,
  Bold,
  Italic,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Save,
  ArrowLeft,
} from "lucide-react";
import { useRef, useState } from "react";

export default function TempNote() {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
// 
  const formatText = (command, value = "") => {
    if (!editorRef.current) return;
    document.execCommand(command, false, value);
    editorRef.current.focus(); // Keep focus after applying styles
  };

  const handleCase = (type) => {
    const selection = window.getSelection();
    if (!selection?.toString()) return;

    const text = selection.toString();
    const transformed =
      type === "upper" ? text.toUpperCase() : text.toLowerCase();

    document.execCommand("insertText", false, transformed);
    editorRef.current.focus();
  };

  return (
    <section className="flex justify-center items-center bg-gradient-to-br p-4 from-indigo-500 to-purple-600 ">
      <div className="min-h-screen w-[80rem] bg-background">
        <div className="flex font-bold text-2xl items-center text-white mb-2">
          <Notebook className="text-white w-8 h-8 font-bold" />
          <h1>SmartNote</h1>
        </div>
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="hover:bg-white/10 duration-300 text-white cursor-pointer p-2 rounded-full">
              <Link to="/">
                <ArrowLeft className="h-6 w-6" />{" "}
              </Link>
            </button>
            <div className="space-y-1">
              <h1 className="text-2xl text-white font-semibold tracking-tight">
                Editor
              </h1>
              <p className="text-sm text-gray-200">
                Write something beautiful, Create and edit beautiful Open Editor
              </p>
            </div>
          </div>
          <button
            title="Save"
            className="relative hover:bg-white/10  duration-300 cursor-pointer p-2 rounded-full"
          >
            <Link to="/login">
              <Save size={28} className="h-6 w-6 text-white" />
            </Link>
          </button>
        </header>

        <div className="container px-4">
          <div className="border-b-2 border-t-2 border-gray-300  sticky top-14 bg-background z-10">
            <div className="flex flex-wrap gap-2 text-white py-2">
              {/* Text Style Controls */}
              <div className="flex gap-1 items-center">
                <button
                  onClick={() => formatText("bold")}
                  className="h-8 w-8 rounded hover:bg-white/10 duration-300 cursor-pointer"
                >
                  <Bold className="h-4 w-4" />
                </button>
                <button
                  onClick={() => formatText("italic")}
                  className="h-8 w-8 rounded cursor-pointer duration-300  hover:bg-white/10"
                >
                  <Italic className="h-4 w-4" />
                </button>
              </div>

              {/* Text Case Controls */}
              <div className="flex gap-4 items-center border-l pl-2">
                <button
                  onClick={() => handleCase("upper")}
                  className="h-8 inline-flex items-center cursor-pointer p-2 rounded duration-300  hover:bg-white/10"
                >
                  <Type className="h-4 w-4 mr-2" />
                  ABC
                </button>
                <button
                  onClick={() => handleCase("lower")}
                  className="h-8 inline-flex p-2 items-center cursor-pointer rounded duration-300  hover:bg-white/10"
                >
                  <Type className="h-4 w-4 mr-2" />
                  abc
                </button>
              </div>

              {/* Alignment Controls */}
              <div className="flex gap-1 items-center border-l pl-2">
                <button
                  onClick={() => formatText("justifyLeft")}
                  className="h-8 w-8 cursor-pointer rounded duration-300  hover:bg-white/10"
                >
                  <AlignLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => formatText("justifyCenter")}
                  className="h-8 w-8 cursor-pointer rounded duration-300  hover:bg-white/10"
                >
                  <AlignCenter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => formatText("justifyRight")}
                  className="h-8 w-8 cursor-pointer rounded duration-300  hover:bg-white/10"
                >
                  <AlignRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => formatText("justifyFull")}
                  className="h-8 w-8 cursor-pointer rounded duration-300  hover:bg-white/10"
                >
                  <AlignJustify className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Rich Text Editor */}
          <main className="py-6">
            <div
              ref={editorRef}
              contentEditable  value={content}
              className="min-h-[calc(100vh-12rem)] p-4 border bg-white border-gray-300 rounded-lg  outline-white"
              onInput={(e) => setContent(e.currentTarget.innerHTML)}
              style={{ whiteSpace: "pre-wrap" }}
            />
          </main>
        </div>
      </div>
    </section>
  );
}
