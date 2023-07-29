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

export const EditNoteModal = ({ data }) => {
  const {
    editNotesModal,
    setEditNotesModal,
    editNoteData,
    setEditNoteData,
    dispatch,
  } = useContext(VideoContext);

  return (
    editNotesModal && (
      <div>
        <input
          value={editNoteData}
          onChange={(e) => setEditNoteData(e.target.value)}
        />
        <button
          onClick={() => {
            setEditNotesModal(false);
            dispatch({ type: "add_note", payload: editNoteData, item: data });
          }}
        >
          Submit
        </button>
      </div>
    )
  );
};
