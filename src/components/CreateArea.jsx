import React  from "react";
import { useState } from "react";

function CreateArea({onAdd}){

    const [note, setNote] = useState({
        title : "",
        content : ""
    })
    function handelChange(e){
        const {name, value}=e.target;
        setNote( (prev) => { 
            return ({
                ...prev,
                [name] : value
            })
        })
    }
    function handelSubmit(event){
        onAdd(note);
        setNote({
            title : "",
            content : ""
        });
        event.preventDefault();
        
    }

    return (
        <form className="create-note">
            <input type="text" name="title" onChange= {handelChange} placeholder="Title" value={note.title}/>
            <textarea rows="3" name="content" onChange= {handelChange} placeholder="Write your note here..." value={note.content}></textarea>
            <button type="submit" onClick={handelSubmit}>Add</button>
        </form>
    )
}
export default CreateArea;