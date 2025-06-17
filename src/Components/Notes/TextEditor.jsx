// components/TextEditor.jsx
import {
  
  Bold,
  Italic,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Save,
  
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function TextEditor() {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  const formatText = (command, value = "") => {
    if (!editorRef.current) return;
    document.execCommand(command, false, value);
    editorRef.current.focus();
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
    <div className="h-full bg-white rounded-md flex flex-col  border">
      <header className="flex items-center justify-between px-4 py-2 rounded-t-md border-b border-white bg-blue-500">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-indigo-200">SmartNote</h1>
            <p className="text-sm text-white">
              Create and edit beautiful Open Editor
            </p>
          </div>
        </div>
        <Link
          to="/login"
          title="Save"
          className="hover:bg-gray-100 hover:text-indigo-600 p-2 rounded-full transition-colors duration-300 ease-in-out"
        >
          <Save size={24}  className="" />
        </Link>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border-b border-white p-2    bg-indigo-300">
        <div className="flex items-center gap-1">
          <button
            onClick={() => formatText("bold")}
            className="p-1 hover:bg-gray-200 rounded  cursor-pointer" 
          >
            <Bold size={16} />
          </button>
          <button
            onClick={() => formatText("italic")}
            className="p-1 hover:bg-gray-200 rounded cursor-pointer"
          >
            <Italic size={16} />
          </button>
        </div>
        <div className="flex items-center gap-1 border-l pl-2" >
          <button
                    onClick={() => handleCase("upper")}
                    className="flex items-center cursor-pointer gap-1 p-1 hover:bg-gray-200 rounded">
                    <Type size={16} />
                    ABC
          </button>
          <button
                    onClick={() => handleCase("lower")}
                    className="flex items-center cursor-pointer gap-1 p-1 hover:bg-gray-200 rounded"
          >
                    <Type size={16} />
                    abc
          </button>
          </div>
          <div className="flex items-center gap-1 border-l pl-2">
          <button
                    onClick={() => formatText("justifyLeft")}
                    className="p-1 hover:bg-gray-200 rounded cursor-pointer"
          >
                    <AlignLeft size={16} />
          </button>
          <button
                    onClick={() => formatText("justifyCenter")}
                    className="p-1 hover:bg-gray-200 rounded cursor-pointer"
          >
                    <AlignCenter size={16} />
          </button>
          <button
                    onClick={() => formatText("justifyRight")}
                    className="p-1 hover:bg-gray-200 rounded cursor-pointer"
          >
                    <AlignRight size={16} />
          </button>
          <button
                    onClick={() => formatText("justifyFull")}
                    className="p-1 hover:bg-gray-200 rounded cursor-pointer"
          >
                    <AlignJustify size={16} />
          </button>
          </div>
          </div>

      {/* Editor */}
          <div
          ref={editorRef}
          value={content}
          contentEditable
          className="flex-1 p-4 overflow-y-auto border outline-none"
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
          style={{ whiteSpace: "pre-wrap" }}
          ></div>
          </div>
          );
}
