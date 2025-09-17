import { use, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { redirect, useNavigate } from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (loginData) => {
      const res = await fetch("https://update.endwellinvestmenthublimited.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      // Assuming the token is in data.token
        localStorage.setItem("token", data.access_token);
        setErrorMsg("");
      // Optionally redirect or show success
        navigate('/admin/dashboard');
        setToken(data.access_token);
    },
    onError: (error) => {
      setErrorMsg(error.message);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
        <div className={styles.loginWrapper}>
      <h2 className={styles.loginTitle}>Endwell Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className={styles.button}
          type="submit"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Logging in..." : "Login"}
        </button>
        {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
        {token && <div className={styles.successMsg}>Login successful!</div>}
      </form>
    </div>
  );
};

export default Login;