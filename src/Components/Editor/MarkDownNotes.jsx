import { MdDelete } from "react-icons/md";
const MarkdownNotes = ({ notes, handleNote, HandleDelete }) => {
    {console.log(notes);}
    return (
      <>
        <ul className="flex flex-col items-center justify-center w-full p-4 gap-4">
          {notes.map((note, index) => (
            <li key={index} className="flex w-full rounded-lg shadow-xl p-2 justify-between items-center border border-solid border-red-600">
              <button className="w-full hover:scale-105 transition-all delay-0" onClick={()=>handleNote(index)}>Note {index+1}</button>
              {<MdDelete className="text-gray-500 hover:text-rose-700 cursor-pointer text-2xl" onClick={() => HandleDelete(index)}/>}
            </li>
          ))}
        </ul>
      </>
    );
  };
export default MarkdownNotes;