import React from "react";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Notes from "../notes.js";
function App() {
    return <div>
        <Heading />
        {
            Notes.map((notes) =>
                <Note
                    title={notes.title}
                    content={notes.content}
                />)
        }
        <Footer />
    </div>
}
export default App;