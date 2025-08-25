import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.image}>
        <img src="/images/contactform.jpg" alt="" />
        <div></div>
      </div>
      <div className={styles.form}>
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name'/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id='phone'/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id='email'/>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <div>
              <button>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
