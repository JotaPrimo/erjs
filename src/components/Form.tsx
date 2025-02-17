import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }
  
  function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        name="name"
        placeholder="Nome"
        onChange={handleInputChange}
      />

      <br />

      <input
        type="text"
        name="lastname"
        value={form.lastname}
        placeholder="Sobrenome"
        onChange={handleInputChange}
      />

      <br />

      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="Email"
        onChange={handleInputChange}
      />

      <br />

      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Password"
        onChange={handleInputChange}
      />

      <br />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Form;
