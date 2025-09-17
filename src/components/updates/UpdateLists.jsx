import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import styles from './UpdateLists.module.css';


const UpdateLists = () => {

const fetchUpdates = async () => {
    const res = await axios.get('https://update.endwellinvestmenthublimited.com/api/posts');
    return res.data.data;
}

const { data, isLoading, isError, error } = useQuery({
    queryKey: ['updates'],
    queryFn: fetchUpdates
});

if (isLoading) {
    return <div>Loading...</div>;
}

if (isError) {
    return <div>Error: {error.message}</div>;
}

  return (
    <div className={styles.updateListsWrapper}>
      <h2>LATEST UPDATES</h2>
      {data.map(update => (
        <div key={update.id} className={styles.updateItems}>
            <div>
                <h3>{update.title}</h3>
                <p>{update.content}</p>
            </div>
            <div>
                <img src={`https://update.endwellinvestmenthublimited.com/storage/${update.image}`} alt={update.title} />
            </div>
        </div>
      ))}
    </div>
  )
}

export default UpdateLists
