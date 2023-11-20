import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    console.log(event);
    try {
      event.preventDefault();
      setLoading(true);
      await login(username, password);
      navigate("/");
    } catch (error) {
      console.error();
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          color="primary"
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          color="primary"
          required
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
}
