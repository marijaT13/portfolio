import React, { useState } from "react";

const Converter: React.FC = () => {
    const [text, setText]= useState<string>("");
    const [binary,setBinary] = useState<string>("");

    const convertToBinary = () => {
      
        if(text.trim().length == 0){
            setBinary(""); 
            return;
            
        }
        
        const binaryResult= text 
        .split("")
        .filter((char) => /[a-zA-Z]/.test(char))
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(" ");

        setBinary(binaryResult);
    };
    return ( 
            <div className="container-byte"> 
            <h2>Text to Binary Converter</h2>
                <input type="text"
                className="byte-input"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        convertToBinary();
                    }
                }}
                placeholder="Enter text"/>
                <textarea 
                id="binary" 
                className="textarea-byte"
                value={binary} 
                readOnly placeholder="Binary output"/>
                <button 
                id="convert" 
                className="byte-btn"
                onClick={convertToBinary}> 
                Convert</button>
            </div>
    );
};
export default Converter;