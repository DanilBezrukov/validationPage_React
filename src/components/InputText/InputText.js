import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./InputText.css"
export function InputText ( { label, name, placeholder, pattern, children } ) {
    const dispatch = useDispatch()
    const state = useSelector( state => state[ name ] )
    return (
        <label>
            <p className="title_text">{ label }</p>
            <input
                type="text"
                name={ name }
                placeholder={ placeholder }
                className={ `input_text ${state !== "" && !state ? 'invalid' : ''}` }
                pattern={ pattern }
                onChange={ e => {
                    dispatch({
                        type: 'ISVALID',
                        payload: e.target,
                    })
                }}
                required
            />
            { children }
        </label>
    );
};

