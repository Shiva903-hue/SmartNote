import { FolderOpen, Notebook, Star, Tag, Watch } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import WorkspaceForm from "../../forms/WorkspaceForm";

export default function Workspaces({ wform, setWform }) {
  //setNote, note
  // State to manage the list of workspaces
  const [workspace, setWorkspace] = useState([
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Personal", "ideas"],
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Personal", "ideas", "map"],
      quantity: 12,
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Persnol", "ideas"],
      quantity: 12,
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Persnol", "ideas"],
      quantity: 12,
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Persnol", "ideas"],
      quantity: 12,
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Persnol", "ideas"],
      quantity: 12,
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Persnol", "ideas"],
      quantity: 12,
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Persnol", "ideas"],
      quantity: 12,
    },
    {
      title: "Workspace",
      createTime: "1 day ago",
      tags: ["Persnol", "ideas"],
      quantity: 12,
    },
  ]);
  const navigate = useNavigate();
  // Function to handle the creation of a new workspace
  // Accepts `title` and `tags` as parameters
  const handleCreate = (title, tags) => {
    if (!title.trim()) return; // Prevent creating a workspace with an empty title
    const newWorkspace = {
      title,
      createTime: "just now", // Default creation time for new workspaces
      tags: Array.isArray(tags) ? tags : [tags], // Ensure tags are always an array
      quantity: 0, // Default quantity for new workspaces
    };
    setWorkspace([newWorkspace, ...workspace]); // Add the new workspace to the list
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {/* Render each workspace */}
      {workspace.map((notes, index) => (
        <div
          key={index}
          className="border rounded-2xl border-indigo-300 p-3.5 m-2 bg-white"
        >
          {/* Workspace Header */}
          <div className="flex items-center justify-between m-5">
            <h1 className="font-semibold text">{notes.title}</h1>
            <Star className="w-4 h-4 cursor-pointer text-gray-500 hover:text-yellow-300" />
          </div>

          {/* Workspace Details */}
          <div className="flex gap-3 items-start justify-between">
            <div>
              {/* Creation Time */}
              <p className="flex gap-2 items-center p-2 text-gray-500">
                <Watch className="w-4 h-4" />
                {notes.createTime}
              </p>

              {/* Tags */}
              <p className="flex gap-2 items-center text-gray-500">
                <Tag className="w-4 h-4" />
                {notes.tags && notes.tags.length > 0 ? (
                  notes.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-100 text-indigo-500 rounded-2xl p-1"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span>--</span>
                )}
              </p>

              {/* Number of Notes */}
              <p className="flex gap-2 items-center p-2 text-gray-500">
                <Notebook className="w-4 h-4" />
                {notes.quantity} notes
              </p>
            </div>

            {/* Open Workspace Button */}
              <button
                onClick={() => {
                  // local state (just in case you're still on the page)
                  navigate("/preview", { state: { showBtn: true } }); // pass state
                }}
                title="Open"
                className="cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
                  <FolderOpen />
              </button>
          </div>
        </div>
      ))}

      {/* Show the Workspace Form if `wform` is true */}
      {wform && (
        <WorkspaceForm setWform={setWform} handleCreate={handleCreate} />
      )}

      {/* Show the Note Form if `note` is true */}
      {/* {note && <NoteForm setNote={setNote} />} */}
    </section>
  );
}

// PropTypes validation to ensure correct props are passed
Workspaces.propTypes = {
  setWform: PropTypes.func.isRequired, // Validate that `setWform` is a required function
  wform: PropTypes.bool.isRequired, // Validate that `wform` is a required boolean
  setNote: PropTypes.func.isRequired, // Validate that `setNote` is a required function
  note: PropTypes.bool.isRequired, // Validate that `note` is a required boolean
};
