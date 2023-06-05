import { InputText } from './components/InputText/InputText';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Switch } from './components/Switch/Switch';
import { RadioButton } from './components/RadioButton/RadioButton';
import { Dropdown } from './components/Dropdown/Dropdown';
import { FormButton } from './components/FormButton/FormButton';
import { useDispatch } from 'react-redux';
import "./App.css"

export function App (){
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData( e.target );
    const message = {
      userName: formData.get( 'Username' ),
      password: formData.get( 'Password' ),
      inputTextLabel: formData.get( 'textLabel' ),
      radioSelection: formData.get( 'radio' ),
      dropdownTitle: formData.get( 'dropdown' )
    };
    alert( JSON.stringify( message ) );
  };

  return (
    <main>
      <form onSubmit={ handleSubmit }>

        <InputText
          label="Username"
          name="Username"
          placeholder="Enter username"
          pattern="[a-zA-Zа-яА-ЯёЁ\s]{3,}"
        />

        <InputText
          label="Password"
          name="Password"
          placeholder="Enter password"
          type="password"
          pattern=".{4,12}"
        >
          <p>Your password is between 4 and 12 characters</p>
        </InputText>

        <InputText
          label="Input Text Label"
          name="textLabel"
          placeholder="Type here"
          pattern="[a-zA-Zа-яА-ЯёЁ\s]{3,}"
        />

        <Checkbox />

        <Switch />

        <RadioButton value="Radio selection 1" />
        <RadioButton value="Radio selection 2" />
        <RadioButton value="Radio selection 3" />

        <Dropdown
          options={[
            { value: 'Dropdown1', label: 'Dropdown option 1' },
            { value: 'Dropdown2', label: 'Dropdown option 2' }
          ]}
        />

        <div className="formBt">
          <input type="reset" className="resetBt" onClick={ () => dispatch( { type: "RESET" } ) } />
          <FormButton />
        </div>
      </form>
    </main>
  );
};
