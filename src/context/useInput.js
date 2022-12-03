import { useState } from "react";


export default function useInput(defaulValue = "") {
    const [value, setValue] = useState()
    const onValueChange = (event)=>{
        setValue(event.target.value)
    }
  return [value, onValueChange]
}
