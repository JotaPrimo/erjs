import { useState } from "react"

export default function Form () {

    const[form, setForm] = useState({
        name: '',
        sobrenome: '',
        email: '',
        senha: ''
    })

    const [name, setName] = useState('Jota')

    return <div>
        <label htmlFor="Nome">
            <input 
                type="text" 
                value={form.name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome" />
        </label>
        <label htmlFor="Sobrenome">
            <input 
                type="text" 
                value={form.sobrenome}
                onChange={e => setName(e.target.value)}
                placeholder="Sobrenome" />
        </label>
        <label htmlFor="Email">
            <input 
                type="text" 
                value={form.email}
                onChange={e => setName(e.target.value)}
                placeholder="Email" />
        </label>
        <label htmlFor="Senha">
            <input 
                type="text" 
                value={form.senha}
                onChange={e => setName(e.target.value)}
                placeholder="Senha" />
        </label>
        <div>
            { name }
        </div>
    </div>
}