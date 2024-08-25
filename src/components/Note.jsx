import React  from "react";

function Note(props){
    function onDelete(event){
        props.onDelete(props.ind);
        event.preventDefault();
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button type="submit" onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Note;