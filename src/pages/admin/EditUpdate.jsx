import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUpdate = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  // Fetch existing update data
  useEffect(() => {
    const fetchUpdate = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
        setFormData({
          title: res.data.data.title,
          content: res.data.data.content,
          image: null, // Don't prefill image
        });
      } catch (err) {
        setErrorMsg("Failed to fetch update.");
      }
    };
    fetchUpdate();
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    const token = localStorage.getItem("token");
    const updateData = new FormData();
    updateData.append("title", formData.title);
    updateData.append("content", formData.content);
    if (formData.image) updateData.append("image", formData.image);

    try {
      await axios.post(
        `https://update.endwellinvestmenthublimited.com/api/posts/${id}?_method=PUT`,
        updateData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccessMsg("Update edited successfully!");
      setTimeout(() => navigate("/admin/dashboard"), 1200);
    } catch (err) {
      setErrorMsg("Failed to edit update.");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", background: "#f7faff", padding: 24, borderRadius: 10 }}>
      <h2 style={{ color: "#1976d2", marginBottom: 20 }}>Edit Update</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1.5px solid #1976d2" }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1.5px solid #1976d2" }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Image (optional):</label>
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
          Save Changes
        </button>
        {errorMsg && <div style={{ color: "#d32f2f", marginTop: 12 }}>{errorMsg}</div>}
        {successMsg && <div style={{ color: "#43a047", marginTop: 12 }}>{successMsg}</div>}
      </form>
    </div>
  );
};

export default EditUpdate;