import React from "react";
import { useHistory } from "react-router-dom";

export function Login() {
  const history = useHistory();
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "adm@adm.com",
        senha: "adm123",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const { token } = await res.json();
      if (res.status === 200) {
        localStorage.setItem("token", token);
        history.push("/home");
      }
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "48px",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: 48 }}>Login</h1>
      <form
        onSubmit={handleSignIn}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          type="text"
          defaultValue="adm@adm.com"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
          }}
        />
        <input
          type="text"
          defaultValue="adm123"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#f6876f",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
