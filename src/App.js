import React, { Component } from "react"; 

class Markdown extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter markdown here.'
    }
  }
}

function App() {
  return (
    <div>
       <h1 className="flex justify-center">Markdown Previewer</h1>
     </div>
  )
}

export default App;
