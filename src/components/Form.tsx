import { useState } from "react"

export default function Form() {

    const [form, setForm] = useState({
        name: '',
        sobrenome: '',
        email: '',
        senha: ''
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(form);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return <form onSubmit={handleSubmit}>
        <label htmlFor="Nome">
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Nome" />
        </label>
        <br />
        <label htmlFor="Sobrenome">
            <input
                type="text"
                name="sobrenome"
                value={form.sobrenome}
                onChange={handleInputChange}
                placeholder="Sobrenome" />
        </label>
        <br />
        <label htmlFor="Email">
            <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Email" />
        </label>
        <br />
        <label htmlFor="Senha">
            <input
                type="password"
                 name="senha"
                value={form.senha}
                onChange={handleInputChange}
                placeholder="Senha" />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}