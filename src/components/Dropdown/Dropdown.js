import { useDispatch } from "react-redux";
import "./Dropdown.css"
export function Dropdown ( { options } ) {
    const dispatch = useDispatch()
    return (
        <select required className="dropdown" name="dropdown" onChange={ e => {
                dispatch({
                    type: 'ISVALID',
                    payload: e.target,
                })
            }}
        >
            <option value="">Dropdown option</option>
            {options.map( option => (
                <option key={ option.value } value={ option.value }>
                    { option.label }
                </option>
            ))}
        </select>
    );
}

