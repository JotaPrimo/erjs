import { useEffect, useState } from "react";

export default function Exemplo() {
  const [contador, setContador] = useState(0);

  console.log("🔄 Renderizando componente...");

  useEffect(() => {
    console.log("✅ Efeito colateral executado!");
  }, []);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
