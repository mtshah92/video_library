import { createContext, useReducer, useState } from "react";
import { videos } from "../db/videos";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [playlistModal, setPlaylistModal] = useState(false);
  const [showPlaylist, setShowPlaylistModal] = useState(false);
  const [notesModal, setNotesModal] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState();
  const [noteData, setNoteData] = useState();

  const initalData = {
    video: videos,
    playlist: ["Music"],
  };

  const handleVideos = (state, action) => {
    switch (action.type) {
      case "watch_later":
        return {
          ...state,
          video: state.video.map((item) =>
            action.payload === item._id
              ? { ...item, watchLater: item.watchLater ? false : true }
              : item
          ),
        };
      case "add_playlist": {
        return {
          ...state,
          video: state.video.map((item) =>
            action.payload === item._id
              ? { ...item, playlist: [action.name] }
              : item
          ),
        };
      }
      case "new_playlist": {
        return {
          ...state,
          playlist: [...state.playlist, action.name],
          video: state.video.map((item) =>
            action.payload === item._id
              ? { ...item, playlist: [action.name] }
              : item
          ),
        };
      }
      case "delete_playlist": {
        return {
          ...state,
          playlist: state.playlist.filter((item) => item !== action.payload),
        };
      }

      case "add_note": {
        return {
          ...state,
          video: state.video.map((item) =>
            action.item === item._id
              ? { ...item, notes: [action.payload] }
              : item
          ),
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(handleVideos, initalData);
  console.log(state.video);
  return (
    <VideoContext.Provider
      value={{
        state,
        dispatch,
        playlistModal,
        setPlaylistModal,
        notesModal,
        setNotesModal,
        newPlaylist,
        setNewPlaylist,
        showPlaylist,
        setShowPlaylistModal,
        noteData,
        setNoteData,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
