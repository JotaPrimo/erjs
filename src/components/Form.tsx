import { useState } from "react";

function Form() {

    const[name, setName] = useState('Jota')


    return ( 
        <div>
          <input 
            type="text" 
            value={name}
            placeholder="Nome"
            onChange={ e => setName(e.target.value) }
          />

          <div>
            { name }
          </div>
        </div>
     );
}

export default Form;