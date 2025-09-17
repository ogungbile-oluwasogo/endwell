import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Postupdate = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
    const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    if (form.image) formData.append("image", form.image);

    try {
      await axios.post("https://update.endwellinvestmenthublimited.com/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMsg("Update posted successfully!");
      setForm({ title: "", content: "", image: null });
      setTimeout(() => navigate("/admin/dashboard"), 1200);
    } catch (err) {
      setErrorMsg("Failed to post update.");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", background: "#f7faff", padding: 24, borderRadius: 10 }}>
      <h2 style={{ color: "#1976d2", marginBottom: 20 }}>Post New Update</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1.5px solid #1976d2" }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Content:</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1.5px solid #1976d2" }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #1976d2 60%, #d32f2f 100%)",
            color: "#fff",
            padding: "10px 0",
            width: "100%",
            border: "none",
            borderRadius: 5,
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Post Update
        </button>
        {errorMsg && <div style={{ color: "#d32f2f", marginTop: 12 }}>{errorMsg}</div>}
        {successMsg && <div style={{ color: "#43a047", marginTop: 12 }}>{successMsg}</div>}
      </form>
    </div>
  );
};

export default Postupdate;