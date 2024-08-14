import { useState } from "react"

export default function Form () {

    const [name, setName] = useState('Jota')

    return <div>
        <label htmlFor="Nome">
            <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome" />
        </label>
        <div>
            { name }
        </div>
    </div>
}