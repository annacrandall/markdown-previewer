import React, { Component, useState} from "react"; 
import { marked } from "marked";  

marked.setOptions({
    breaks:true //should pass optional test (#7) <br>, from Marked docs// 
})

function Input() {
    const [markdownText, setState] = useState(""); 
 
    return (
        <div className="flex flex-row justify-center">
        <div className="border-2 px-5">
          <h2 className="font-mono">Markdown Input</h2>
          <textarea className="font-mono" id="editor"></textarea>
            </div>
            </div>
)
}
export default Input;
