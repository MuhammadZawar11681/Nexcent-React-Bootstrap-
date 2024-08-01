import arrow_right from "../../assets/arrow-right.svg";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Blogpost.css";

const BlogPost = ({ image, text, link }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div className="card blog-post h-100 border-0 shadow-sm">
        <div className="card-img-wrapper">
          <img src={image} className="card-img-top" alt="Blog Cover" />
          <div className="card-body-blog d-flex flex-column justify-content-between align-items-center text-center position-absolute w-100 px-3 py-2">
            <p className="card-text text-grey fw-bold mb-2">{text}</p>
            <a href={link} className="btn btn-light text-green fw-semibold">
              Read More <img src={arrow_right} alt="Arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
