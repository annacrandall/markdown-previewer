import React, { useState } from "react"; 
import "./index.css";
import { marked } from "marked"; 
import defaultText from "./defaultText.md"

const renderer = new marked.Renderer(); //sets Marked renderer to a new const 

marked.setOptions({
    breaks: true,
})              // sets optional test for carriage returns 

const MarkdownApp = () => {
  const [markdownText, setMarkdownText] = useState(""); //creates new state for text


  return (
    <div className=" text-center font-mono relative">
      <header className="m-5 p-5 text-lg underline hover:decoration-dotted">Markdown Previewer</header>
    <div className="h-screen left-20 w-1/3 top-20 border-2 border-zinc-900 absolute left-0" >
      <h2 className="p-5 underline">Markdown Input</h2>
      <textarea className="h-2/3 shadow-lg" name="text" id="editor" value={markdownText} 
        onChange={(event) => setMarkdownText(event.target.value)}>
      </textarea>
    </div>
      <div className="w-1/3 h-screen top-20 right-20 border-2 border-zinc-900 absolute right-0">
        <h2 className="p-5 underline">HTML Output</h2>
        <Preview markdown={markdownText} />
        </div>
    </div>
    
  )
};
function Preview({ markdown }) {
  return (
    <div className="shadow-lg flex flex-wrap"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),}} id="preview">
    </div> 
  )
} //uses Marked renderer to create an HTML output of markdown input inside of Preview functional component 


export default MarkdownApp;
