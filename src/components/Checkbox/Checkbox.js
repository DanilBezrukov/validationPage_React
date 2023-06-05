import { useDispatch } from "react-redux";
import "./Checkbox.css"
export function Checkbox () {
    const dispatch = useDispatch()
    return (
        <label>
            <input 
            type="checkbox" 
            className="checkbox" 
            name='Checkbox' 
            required 
            onChange={ e => {
                    dispatch({
                        type: 'ISVALID',
                        payload: e.target,
                    })
                }} 
            />
            <span>Remember me</span>
        </label>
    );
};

