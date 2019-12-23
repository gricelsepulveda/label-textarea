import React, { useRef, useState } from "react"
import Input from "./Input/Input.jsx"

//Styles
import './input-area.scss'

function initializeRenderInputs (values) {
    if (values !== undefined && Array.isArray(values)) {
        return [
            ...values.map((text) => ({
                value: text, filled: true, focused: false
            })),
            { value: "", filled: false, focused: true }
        ]
    }
    return [{ value: "", filled: false, focused: true }]
}

function initializeValuesToExport (values) {
    if (values !== undefined && Array.isArray(values)) {
        return [
            ...values,
        ]
    }
    return []
}

const InputArea = (props) => {
    const iAreaElement = useRef(null)
    const [renderInputs, setRenderInputs] = useState(initializeRenderInputs(props.preset))
    const [valuesToExport, setValuesToExport] = useState(initializeValuesToExport(props.preset))
    const [stage, setStage] = useState("initial")

    const handleClick = () => {
        //references
        let nLastInput = (iAreaElement.current.childNodes[0].childNodes.length) - 1
        nLastInput = nLastInput < 0 ? 0 : nLastInput
        const currentInput = iAreaElement.current.childNodes[0].childNodes[nLastInput].childNodes[0]
        if  (currentInput != undefined) {
            currentInput.focus() //SET FOCUS
        }
    }

    function addInput () {
        let _obj = [...renderInputs]
        const addElement = () => {
            _obj.push({
                value: "", filled: false, focused: true
            })
            setRenderInputs(_obj)
        }
        if (props.limit != 0) {
            if (renderInputs.length < props.limit) {
                addElement()
            }
        }
        else {
            addElement()
        }
    }

    function handleChange(data, action){
        setStage("editing")
        if (action == "comma"){
            //GET VALUES FROM OUTSIDE
            if (props.limit >= 0) {
                if (renderInputs.length < props.limit) {
                    let updatedExportVals = [...valuesToExport, data]
                    setValuesToExport(updatedExportVals)
                    props.onChange(updatedExportVals)
                }
            }
        }
        else {
            let vals = [...valuesToExport]
            let dataToDelete = data
            let indexDel = undefined
            let delResult = vals.filter((element, index) => {
                if ( element == data) {
                    indexDel = index
                }
            }) //FINDS THE DELETED DATA
            vals.splice(indexDel, 1)
            setValuesToExport(vals)
            props.onChange(vals)
        }
    }


    return (
        <div className="gs-input-area" ref={iAreaElement} onClick={() => handleClick()}>
            <div className="gs-input-area-container">
                {
                    renderInputs.map((element, index) => (
                        <Input
                            filled={element.filled}
                            value={element.value}
                            color={props.color}
                            key={`gs-input-area-input${index}`}
                            onComma={addInput}
                            focused={element.focused}
                            onChange={handleChange}
                        />
                    ))
                }
            </div>
        </div>
    )
}

InputArea.defaultProps = {
    value: "",
    color: "primary",
    weight: false,
    close: false,
    preset: [],
    id: "untitledId",
    active: false,
    limit: 0
}

export default InputArea