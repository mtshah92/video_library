import { useContext } from "react";
import "./noteModal.css";
import { VideoContext } from "../../../context/videoContext";
export const NoteModal = ({ data }) => {
  const { noteData, setNoteData, dispatch, notesModal, setNotesModal } =
    useContext(VideoContext);
  return (
    notesModal && (
      <div>
        <input onChange={(e) => setNoteData(e.target.value)} />
        <div>
          <button
            onClick={() => {
              dispatch({ type: "add_note", payload: noteData, item: data });
              setNotesModal(false);
            }}
          >
            Add New Note
          </button>
        </div>
      </div>
    )
  );
};
