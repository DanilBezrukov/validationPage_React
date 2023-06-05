import { useSelector } from "react-redux";
import "./FormButton.css"

export function FormButton () {
    const state = useSelector( state => state )
    const validityForm =  Object.values( state ).every( valid => valid );
    return (
        <input type="submit" className={ `submitBt ${!validityForm ? 'submitDisabled' : ''}` } disabled={ !validityForm } />
    );
};
