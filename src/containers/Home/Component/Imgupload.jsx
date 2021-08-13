import { render } from "@testing-library/react";
import React from "react";
import {storage} from "../config/firebase"
const ReactFirebaseFileUpload=()=>{
    
    return(
        <div>
            {/* <input type="file" onChange={}/> */}
        </div>
    );
};

render (<ReactFirebaseFileUpload/>,document.querySelector("#root"));