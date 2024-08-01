import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import image2 from "../image2.png"; // Import the image

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name.match(/^[a-zA-Z\s]+[""]*$/)) {
      errors.name = "Name should contain only alphabets and spaces.";
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Please enter a valid email address.";
    }
    if (text.trim() === "") {
      errors.text = "Text field cannot be empty.";
    }

    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent page default refresh

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle successful form submission (e.g., send data to a server)
      console.log("Form submitted:", { name, email, text });
    }
  };

  return (
    <section className={styles.form_section}>
      <div>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="20px" />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="20px" />} />
          </div>
          <Button
            isOutline="true"
            text="VIA EMAIL FROM"
            icon={<HiMail fontSize="20px" />}
          />
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Jhon Peter"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="abc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              placeholder="Description"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {errors.text && <p className={styles.error}>{errors.text}</p>}
          </div>
          <div className={styles.submit}>
            <Button text="SUBMIT" />
          </div>
          <p>
            {`Name: ${name}`} <br /> {`Email: ${email}`} <br />{" "}
            {`Text: ${text}`}
          </p>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src={image2} alt="Contact form illustration" />
      </div>
    </section>
  );
};

export default ContactForm;
