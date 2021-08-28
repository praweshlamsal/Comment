import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { InputHTMLAttributes, KeyboardEventHandler, useState } from 'react'

const CustomInput = () => {
    const [cusHeight, setCusHeight] = useState(1)
    const [cusWidth, setCusWidth] = useState("50px")
    const [value, setValue] = useState("")

    const inputKeyDown = (e) => {
        e.persist();
        let length = ((e.target.value.length + 4) * 10);
        console.log(cusHeight);
        if (length <= 200) {
            setCusWidth(length + "px");
        }
        setCusHeight(parseInt(length / 210 + "") + 1)
        if (e.key == "Enter") {
            alert("Click")
        }
        if (e.key == "Backspace" || e.key == "Delete") {
            setCusHeight(parseInt(length / 210 + "") + 1)
        }

    }

    return (
        <div className="custom_wrapper">
            <FormGroup className="custom_width" style={{ width: "200px" }}>
                <Input style={{ width: cusWidth }} onKeyDown={inputKeyDown} className="custom_text_area" rows={cusHeight} type="textarea" name="email" id="exampleEmail" placeholder="Enter the value" />
            </FormGroup>

        </div>
    )
}

export default CustomInput;
