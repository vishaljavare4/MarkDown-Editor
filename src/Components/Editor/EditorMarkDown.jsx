import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import MarkdownEditor from '@uiw/react-markdown-editor';

import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import MarkdownNotes from "./MarkDownNotes";
const EditorMarkDown = () => {
    const currentDate = new Date().toDateString();
    const [markdownValue, setMarkdownValue] = useState("");
    const [savedNotes, setSavedNotes] = useState([]);
    const handleSaveNote = () => {
        const newNote = {
            content : markdownValue
        };
        setSavedNotes((prev) => [...prev,newNote]);
        setMarkdownValue("");
    }
    const handleDeleteNote = (idx) => {
        const updatedNotes = [...savedNotes];
        updatedNotes.splice(idx,1);
        setSavedNotes(updatedNotes);
    }
    const showContent = (idx) => {
        setMarkdownValue(savedNotes[idx].content);
    }
    return (
        <div className="w-full flex flex-col mt-4 h-screen">
            <div className="w-full flex gap-10 justify-between ">
                <div className="flex flex-col items-center w-[40%]">
                    <label className="text-[50px] font-semibold text-gray-700">
                        Welcome.
                    </label>
                    <p className="text-sm text-gray-500 ">{currentDate}</p>
                </div>
                <div className="flex gap-2 p-10 items-center justify-center">
                    <div className="p-4 rounded-lg bg-white shadow-xl items-center flex justify-center">
                        <IoMail className="text-2xl text-sky-600" />
                    </div>
                    <div className="p-4 rounded-lg bg-white shadow-xl items-center flex justify-center">
                        <FaBell className="text-2xl text-yellow-400" />
                    </div>
                    <div className="p-4 rounded-lg bg-white  items-center flex justify-center">
                        <p className="text-gray-500 font-semibold">Rivansh Srivastava</p>
                    </div>
                    <div className="w-12 h-12 rounded-full shadow-xl cursor-pointer bg-green-300 transition duration-300 items-center flex justify-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/48222792?v=4"
                            className="w-[90%] h-[90%] rounded-full "
                            alt="Profile Picture"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 ">
                <div className="App w-[60%] text-xl" data-color-mode="light">
                    <MarkdownEditor
                        value={markdownValue}
                        onChange={setMarkdownValue} className="h-[60vh] rounded-lg shadow-2xl" />
                </div>
                <div className="w-[35%] h-[70vh] max-h-[70vh] rounded-lg shadow-xl flex flex-col  items-Start p-4">
                    <label className="text-3xl font-semibold ">Notes</label>
                    <MarkdownNotes notes={savedNotes} handleNote={showContent} HandleDelete={handleDeleteNote}/>
                </div>
            </div>
            <button onClick={handleSaveNote} className="text-3xl ml-[25%] -mt-10 text-gray-700 hover:text-rose-600"><FaPlusCircle/></button>
  
        </div>
    )
}
export default EditorMarkDown;