// import blog_1 from "../../assets/blog-image-1.svg";
// import blog_2 from "../../assets/blog-image-2.svg";
// import blog_3 from "../../assets/blog-image-3.svg";
// import BlogPost from "./BlogPost";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Blog.css"; // Custom CSS for additional styling

// const Blog = () => {
//   const blogs = [
//     {
//       image: blog_1,
//       text: "Creating Streamlined Safeguarding Processes with OneRen",
//       link: "#",
//     },
//     {
//       image: blog_2,
//       text: "What are your safeguarding responsibilities and how can you manage them?",
//       link: "#",
//     },
//     {
//       image: blog_3,
//       text: "Revamping the Membership Model with Triathlon Australia",
//       link: "#",
//     },
//   ];
//   return (
//     <div id="testimonials" className="my-5 container">
//       <h1 className="text-dark-grey text-center mb-4">
//         Caring is the New Marketing
//       </h1>
//       <p
//         className="fw-semibold text-grey text-center mx-auto mb-5"
//         style={{ fontSize: "16px", maxWidth: "700px" }}
//       >
//         The Nexcent blog is the best place to read about the latest membership
//         insights, trends and more. See who's joining the community, read about
//         how our community are increasing their membership income and more.
//       </p>

//       <div className="row justify-content-center">
//         {blogs.map((post, index) => (
//           <BlogPost
//             key={index}
//             image={post.image}
//             text={post.text}
//             link={post.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import blog_1 from "../../assets/blog-image-1.svg";
import blog_2 from "../../assets/blog-image-2.svg";
import blog_3 from "../../assets/blog-image-3.svg";
import BlogPost from "./BlogPost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css"; // Custom CSS for additional styling

const Blog = () => {
  const blogs = [
    {
      image: blog_1,
      text: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "#",
    },
    {
      image: blog_2,
      text: "What are your safeguarding responsibilities and how can you manage them?",
      link: "#",
    },
    {
      image: blog_3,
      text: "Revamping the Membership Model with Triathlon Australia",
      link: "#",
    },
  ];
  return (
    <div id="testimonials" className="my-5 container">
      <h1 className="text-dark-grey text-center mb-4">
        Caring is the New Marketing
      </h1>
      <p
        className="fw-semibold text-grey text-center mx-auto mb-5"
        style={{ fontSize: "16px", maxWidth: "700px" }}
      >
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and more.
      </p>

      <div className="row justify-content-center">
        {blogs.map((post, index) => (
          <BlogPost
            key={index}
            image={post.image}
            text={post.text}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
