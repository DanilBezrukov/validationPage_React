import { useDispatch } from "react-redux";
import "./Switch.css"
export function Switch () {
    const dispatch = useDispatch()
    
    return (
        <label className="switch">
            <input
                type="checkbox"
                value="on"
                name='Switch'
                required
                onChange={ e => {
                    dispatch({
                        type: 'ISVALID',
                        payload: e.target,
                    })
                }}
            />
            <span className="slider round"></span>
        </label>
    );
};
