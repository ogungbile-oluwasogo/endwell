import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from './Dashboard.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const adminName = "Admin"; // Replace with actual admin name retrieval logic

const Dashboard = () => {
  const navigate = useNavigate();

  const fetchUpdates = async () => {
    const res = await axios.get('https://update.endwellinvestmenthublimited.com/api/posts');
    return res.data.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['updates'],
    queryFn: fetchUpdates
  });

  const handleDelete = async (id) => {
  const token = localStorage.getItem("token");
  if (window.confirm("Are you sure you want to delete this update?")) {
    try {
      await axios.delete(`https://update.endwellinvestmenthublimited.com/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      refetch(); // Refresh the updates list
    } catch (err) {
      alert("Failed to delete update.");
    }
  }
};

  const logout = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      await fetch("https://update.endwellinvestmenthublimited.com/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
    }
    navigate("/admin/login");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.dashboardWrapper}>
      <header className={styles.header}>
        <span>Welcome, {adminName}</span>
        <button onClick={logout}>Logout</button>
      </header>
      <div className={styles.mainContent}>
        <nav className={styles.sidebar}>
          <Link to="/admin/new-update">Post New Update</Link>
        </nav>
        <main className={styles.contentArea}>
          <h2>Recent Updates</h2>
          {data.map(update => (
            <div key={update.id} className={styles.updateItems}>
              {update.image && (
                <div className={styles.imageContainer}>
                  <img src={update.image_url} alt={update.title} className={styles.updateImage} />
                </div>
              )}
              <h3 className={styles.updateTitle}>{update.title}</h3>
              <p>{update.content}</p>
              <Link to={`/admin/edit-update/${update.id}`} className={styles.editLink}>Edit</Link>
              <button
                className={styles.deleteLink}
                onClick={() => handleDelete(update.id)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          ))}
        </main>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Endwell Admin Dashboard
      </footer>
    </div>
  );
};

export default Dashboard;