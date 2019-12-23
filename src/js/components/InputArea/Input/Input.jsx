import React, { Fragment, useState } from "react"
import { charRuler } from "../charRuler.js"


const InputArea = (props) => {
    const [filled, setFilled] = useState(false)
    const [stage, setStage] = useState("initial")
    const [close, setClose] = useState(false)
    const [currentTypedValue, setCurrentTypedValue] = useState(props.value && props.value.toLowerCase() || "")
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("error")

    const lastCharRemover = (string) => {
        let arrValue = string.split("")
        arrValue.pop() //REMOVES LAST CHAR
        let finalValue = arrValue.join("") //JOIN THE ARRAY TO STRING AGAIN
        return finalValue
    }

    const fixFormat = (_string) => {
        if (_string != undefined) {
            let _valueInput = _string.replace(/[,]/, "")
            _valueInput = _valueInput.trimRight()
            _valueInput = _valueInput.trimLeft()
            _valueInput = _valueInput.replace(/\s+/g, " ")
            return _valueInput
        }
    }

    const handleChange = (event) => {
        //REFERENCES
        const typedChar = event.data
        const eventType = event.inputType
        let currentWidth = event.target.offsetWidth
        let valueInput = event.target.value

        setStage("editing")

        switch (eventType) {
            case "insertText":
                //COMMA EVENT TRIGGERS INPUT EDIT ENDS
                if (typedChar == ",") {
                    props.onComma()
                    let formattedInput = fixFormat(valueInput)
                    event.target.value = formattedInput//MODIFY THE INPUT VALUE TO AVOID WHITESPACES
                    props.onChange(formattedInput, "comma")
                    setCurrentTypedValue(formattedInput) //UPDATES THE INPUT VALUE STATE
                    setFilled(true) //TRANSFORM ORDINARY INPUT TO A LABEL INPUT
                }
                //ADD THE WIDTH OF THE CURRENT CHAR TO INPUT
                else {
                    const deniedChars = (char) => { //DENIED VALUES CHECKER
                        let regNumber = /\d+/ //NUMBERS
                        let specialAnN  = /[^a-z\s]+/ //CHARACTERS OUT OF A-Z RANGE
                        if ( char.match(regNumber) || char.match(specialAnN)) {
                            if ( char.match(regNumber) ) {
                                setAlertMessage("No puedes usar números ¿Probaste deletréandolos?")
                                setShowAlert(true)
                            }
                            else {
                                setAlertMessage("Sólo minúsculas y sin caracteres especiales")
                                setShowAlert(true)
                            }
                            return true
                        }
                        else {
                            return false 
                        }
                    }
                    if (deniedChars(typedChar) == true) { //USER TYPES A NOT ALLOWED CHAR
                        event.target.value = lastCharRemover(valueInput) //MODIFY THE INPUT VALUE TO AVOID DENIED CHAR
                    }
                    else {
                        let result = charRuler.filter(x => x.character == typedChar) //FINDS THE TYPED CHAR WIDTH
                        let isSpace = result.length == 0 ? true : false //CHECKS IF A SPACE OR A LETTER
                        event.target.style.width = currentWidth + (isSpace ? 2 : result[0].width) //FITS INPUT WIDTH BY TYPED CHAR WIDTH
                        setCurrentTypedValue(`${currentTypedValue}${typedChar}`) //UPDATES THE CURRENT TYPED VALUE   
                    }
                }
                break

            case "deleteContentBackward":
                const fitWidthInDelete = () => {
                    let lastChar = valueInput[valueInput.length - 1]
                    let result = charRuler.filter(x => x.character == lastChar) //FINDS THE DELETED CHAR WIDTH
                    let isSpace = result.length == 0 ? true : false //CHECKS IF A SPACE OR A LETTER
                    event.target.style.width = currentWidth - (isSpace ? 2 : result[0].width) //FITS INPUT WIDTH BY TYPED CHAR WIDTH
                }
                //AVOID WIDTH ISSUES IN ONLY 1 CHAR VALUES
                if ( currentTypedValue.length <= 1) {
                    event.target.style.width = 5
                    setFilled(false) //TRANSFORMS INTO A NORMAL VALUE
                }
                else {
                    fitWidthInDelete() //FITS INPUT WIDTH
                }
                setCurrentTypedValue(lastCharRemover(currentTypedValue)) //UPDATES THE INPUT VALUE STATE ERASING LAST CHAR
                break
        }
    }

    const handleOnBlur = () => {
        let __valueInput = event.target.value
        event.target.value = fixFormat(__valueInput)//MODIFY THE INPUT VALUE TO AVOID WHITESPACES
        setCurrentTypedValue(fixFormat(__valueInput)) //UPDATES THE INPUT VALUE STATE
    }

    const handleClose = () => {
        let fInput = fixFormat(currentTypedValue)
        props.onChange(fInput, "delete")
        setClose(true)
    }

    //CHECK THE FIRST RENDER BEFORE TYPING UPDATES
    let filledStatus
    if ( stage == "initial") {
        filledStatus = props.filled
    }
    else {
        filledStatus = filled
    }

    let addWidth = () => {
        if (props.value != "" && stage == "initial") {
            let val = props.value
            let cValue = val.length
            let cWidth = 0
            for (let g=0; g < cValue; g++){
                let _res = charRuler.filter(x => x.character == val[g]) //FINDS THE DELETED CHAR WIDTH
                let _isSpace = _res.length == 0 ? true : false //CHECKS IF A SPACE OR A LETTER
                cWidth = cWidth + (_isSpace ? 2 : _res[0].width) //FITS INPUT WIDTH BY TYPED CHAR WIDTH
            }
            return cWidth + 5
        }
    }

    //REMOVES ALERT
    if (showAlert == true ) {
        setTimeout(() => {
            setShowAlert(false)
        }, 5000);
    }


    return (
        close != true ? (
            <div className={`gs-input-area-input ${filledStatus ? "filled" : ""} ${props.color ? props.color : "default"}`}>
                <input style={{ width: `${props.value != "" ? addWidth() : "" }px` }} value={currentTypedValue} autoFocus={props.focused ? true : false } type="text" onBlur={() => handleOnBlur(event)} onChange={() => handleChange(event)}/>
                {
                    filledStatus ? (
                        <Fragment>
                            <button className="gs-input-area-button-close" type="button" onClick={() => handleClose()}>
                                <i className="font close"></i>
                            </button>
                        </Fragment>
                    )
                    : null
                }
                {   
                    showAlert ? (
                        <div className="gs-inputarea-alert">
                            <div className="gs-inputarea-alertwrapper">
                                <p>{alertMessage}</p>
                            </div>
                        </div> 
                    )
                    : null 
                }
            </div>
        ) 
        : null
    )
}

InputArea.defaultProps = {
    value: "",
    color: "primary",
    weight: false,
    filled: false,
    focused: false
}

export default InputArea