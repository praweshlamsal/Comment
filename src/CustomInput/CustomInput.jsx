import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { InputHTMLAttributes, KeyboardEventHandler, useState } from 'react'
import './customInput.css'
// height for the expected height of the textarea to be increased,and max width for the maximum with the textarea is extended.
const CustomInput = ({ height, maxwidth }) => {
    const [cusHeight, setCusHeight] = useState(height + "px")
    const [cusWidth, setCusWidth] = useState("50px")

    const inputKeyDown = (e) => {
        let length = ((e.target.value.length + 3) * 10);
        if (length <= (maxwidth + 5)) {
            setCusWidth(length + "px");
        }
        setCusHeight((parseInt(length / maxwidth) + 1) * height + "px")
        if (e.key == "Enter") {
            alert("Click")
        }
        if (e.key == "Backspace" || e.key == "Delete") {
            setCusHeight((parseInt(length / maxwidth) + 1) * height + "px")
        }

    }

    return (
        <div className="custom_wrapper">
            <FormGroup className="custom_width" style={{ width: (maxwidth + 5) + "px" }}>
                <Input style={{ width: cusWidth, height: cusHeight }} onKeyDown={inputKeyDown} className="custom_text_area" type="textarea" name="email" id="exampleEmail" placeholder="Enter" />
            </FormGroup>

        </div>
    )
}

export default CustomInput;
