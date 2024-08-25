import React, { useState } from "react";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){

  const [notes,setNotes] = useState([]);
  function onAdd(note){
    
    setNotes( (prevNotes)=>{
      return (
        [...prevNotes, note]
      )
    });
  }
  function deleteNote(ind){ 

    setNotes((prevNotes)=>{
      return prevNotes.filter((note,i) => {
        return i!==ind;
      });
    })

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd}/>
      {notes && notes.map( (note,ind)=> {
          return <Note title={note.title} content={note.content} ind={ind} onDelete={deleteNote}/>;
      })}
      <Footer />
    </div>
  );
}
export default App;

