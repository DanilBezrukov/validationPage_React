import { useDispatch } from "react-redux";

export function RadioButton  ( { value} ) {
    const dispatch = useDispatch()

    return (
        <label>
            <input
                type="radio"
                name='radio'
                className="radio"
                value={value}
                onChange={ e => {
                    dispatch({
                        type: 'ISVALID',
                        payload: e.target,
                    })
                }}
            />
            { value }
        </label>
    );
};

