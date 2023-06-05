const initialState = {
    Username: '',
    Password: '',
    textLabel: '',
    Checkbox: false,
    Switch: false,
    radio: false,
    dropdown: false,
}

export function reducer( state = initialState, action ) {
    switch ( action.type ) {
        case 'ISVALID': {
            const { name, validity, value } = action.payload
            return {
                ...state,
                [ name ]: (value !== "" || value === "on") && validity.valid
            }
        }
        case "RESET":{
            return initialState
        }

        default:
            return state
    }
}

export const isValid = formElem => ({
    type: 'todos/todosLoaded',
    payload: formElem,
})