import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { InputHTMLAttributes, KeyboardEventHandler, useEffect, useState } from 'react'
import './customInput.css'
// height for the expected height of the textarea to be increased,and max width for the maximum with the textarea is extended.
const CustomInput = ({ maxwidth, fontSize }) => {
    const [cusHeight, setCusHeight] = useState(fontSize + 8 + "px")
    const [cusWidth, setCusWidth] = useState("50px")

    const onKeyChange = (e) => {
        e.persist();
        let fontSize = parseInt(window.getComputedStyle(e.target).fontSize.slice(0, -2))
        let length = e.target.value.length ? (e.target.value.length + 1) * 11 : 50;
        let line = Math.round(length / (maxwidth));
        let settingHeight = ((fontSize + 8) * (line + 1));
        if (line > 0) {
            setCusWidth(maxwidth);
        }
        if (length <= (maxwidth + 5)) {
            setCusWidth(length + (fontSize / 3) + "px");
            setCusHeight(line ? settingHeight + "px" : fontSize + 8 + "px")
        }
        else {
            setCusHeight(line ? settingHeight + "px" : fontSize + 8 + "px")
        }
        if (e.key == "Enter") {
            alert("Click")
        }
        if (e.key == "Backspace" || e.key == "Delete") {
            if (e.target.value.length == 1) {
                setCusWidth("50px");
                setCusHeight(line ? settingHeight + "px" : fontSize + 8 + "px")
            }
            if (e.target.value == "") {
                setCusHeight(fontSize + 8 + "px")
            }
        }

    }


    const onKeyPressing = (e) => {
        let fontSize = parseInt(window.getComputedStyle(e.target).fontSize.slice(0, -2))
        let length = ((e.target.value.length + 6) * 10);
        let line = parseInt(length / maxwidth);
        let settingHeight = (fontSize + 8) * (line + 1);
        if (e.key == "Backspace" || e.key == "Delete") {
            setCusHeight(line ? settingHeight + "px" : fontSize + 8 + "px")
            if (e.target.value.length == 1) {
                setCusWidth("50px");
                setCusHeight(line ? settingHeight + "px" : fontSize + 8 + "px")
            }
            if (e.target.value == "") {
                setCusHeight(fontSize + 8 + "px")
            }
        }
    }






    return (
        <div className="custom_wrapper">
            <FormGroup className="custom_width" style={{ width: (maxwidth + 5) + "px" }}>
                <Input style={{ width: cusWidth, height: cusHeight, fontSize: fontSize + "px" }} onKeyDown={onKeyPressing} onChange={onKeyChange} className="custom_text_area" type="textarea" name="email" id="exampleEmail" placeholder="..." />
            </FormGroup>

        </div>
    )
}

export default CustomInput;
