import React, { useState } from "react";
import "./index.css";
import { marked } from "marked";
import cookies from "./cookies.jpg"; 

const renderer = new marked.Renderer(); 

marked.setOptions({
  breaks: true,
}); 
          
const defaultMarkdown = `#  This is a header! How cool. 
## This is a subheading. 

You can make some text ***bold*** or *italicized* with this markup. Isn't that neat? 

> We can also create blockquotes in markdown! 

Here's a great cookie recepie:
click me =>  [Grandma's Cookies](https://www.wideopeneats.com/our-grandmas-classic-chocolate-chip-cookies/) 

Below is an example of some aforementioned cookies: 
![Chocolate Chip Cookies](${cookies}) 

### And finally we will add some code: 
Inline Code: 

\`<div>A computer's favorite food is cookies.</div>\`  


\`\`\`
// Code-block:
\`\`\`
1. have
1. a nice
1. day `

const MarkdownApp = () => {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown); 

  return (
    <div className="text-center font-mono relative">
      <header className="m-5 p-5 text-xl underline hover:decoration-dotted">Markdown Previewer
      </header>

      <div className="h-screen  w-1/3 top-20 border-4 border-zinc-900 absolute left-20" >
        <h2 className="p-5 underline text-lg">Markdown Input</h2>
        <textarea className="h-2/3 w-3/4shadow-lg m-5"
          name="text" id="editor" value={markdownText}
          onChange={(event) => setMarkdownText(event.target.value)}
        >
        </textarea>
      </div>

      <div className=" text-sm w-1/3 h-screen top-20 border-4 border-zinc-900 absolute right-20">
        <h2 className="text-lg m-5 underline">HTML Output</h2>
        <Preview markdown={markdownText} />
      </div>

    </div>

  )
};
function Preview({ markdown }) {
  return (
    <div className="shadow-lg flex flex-wrap m-10"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }} id="preview">
    </div>
  )
} 


export default MarkdownApp;
