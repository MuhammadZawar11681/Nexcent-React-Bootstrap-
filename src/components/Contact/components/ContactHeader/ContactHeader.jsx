import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div
      className={`text-center bg-light py-5 animate__animated animate__fadeIn`}
    >
      <p className="lead text-success font-weight-bold">
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </div>
  );
};

export default ContactHeader;
