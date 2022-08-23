import { useRef } from "react";
import EmojiPicker from "./emojiPicker";
import styles from "./emojiPicker.module.scss";

export default function EmojiPickerInput (){

    const refInput = useRef(null);

    function handleClick(){
        refInput.current.focus();
    }

    return(
        <div className={styles.inputContainer}>
            <input onClick={handleClick} ref={refInput} />

            <EmojiPicker ref={refInput} />
        </div>
    )
}