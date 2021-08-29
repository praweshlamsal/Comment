import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { InputHTMLAttributes, KeyboardEventHandler, useEffect, useState } from 'react'
import './customInput.css'
// height for the expected height of the textarea to be increased,and max width for the maximum with the textarea is extended.
const CustomInput = ({ maxwidth, fontSize }) => {
    const [cusHeight, setCusHeight] = useState(fontSize + 8 + "px")
    const [cusWidth, setCusWidth] = useState("50px")

    const inputKeyDown = (e) => {
        e.persist();
        let fontSize = parseInt(window.getComputedStyle(e.target).fontSize.slice(0, -2))
        let length = ((e.target.value.length + 4) * 10);
        if (length <= (maxwidth + 5)) {
            setCusWidth(length + (fontSize / 2) + "px");
        }
        setCusHeight((parseInt(length / maxwidth) + 1) * 25 + fontSize + "px")
        if (e.key == "Enter") {
            alert("Click")
        }
        if (e.key == "Backspace" || e.key == "Delete") {
            setCusHeight((parseInt(length / maxwidth) + 1) * 25 + fontSize + "px")
            if (e.target.value == "") {
                setCusHeight(fontSize + 8 + "px")
            }
        }
    }



    return (
        <div className="custom_wrapper">
            <FormGroup className="custom_width" style={{ width: (maxwidth + 5) + "px" }}>
                <Input style={{ width: cusWidth, height: cusHeight, fontSize: fontSize + "px" }} onKeyDown={inputKeyDown} className="custom_text_area" type="textarea" name="email" id="exampleEmail" placeholder="..." />
            </FormGroup>

        </div>
    )
}

export default CustomInput;
