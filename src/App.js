import React, { Component, useState, useEffect, } from "react";
import "./index.css";
import Preview from "./previewWindow.js";
import Input from "./inputWindow.js";
import { marked } from "marked";




const Markdown = () => {



  return (
    <div id="container">
      <div className="flex justify-center font-mono px-10 py-2 m-8">
        <h1 className> Ana's Markdown Previewer</h1>
      </div>
      <div className="flex flex-row justify-center">
        <Input />
        <Preview />
      </div>
    </div>
  )
};


export default Markdown;
