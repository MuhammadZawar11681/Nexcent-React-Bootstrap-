import login_panal from "../assets/girl-login.svg";
const Products = () => {
  return (
    <div id="faq" className="d-flex flex-column flex-md-row container py-5 ">
      <div className=" flex-grow-1 flex-shrink-0">
        <img style={{ width: "100%" }} src={login_panal} alt="HERO Image" />
      </div>

      <div className=" flex-grow-1 w-full gap-4 d-flex flex-column justify-content-center  align-items-center align-items-md-start mt-5">
        <h1 className=" text-dark-grey text-center text-md-start px-2 px-md-0">
          How to design your site footer like we did
        </h1>
        <p
          className=" text-grey text-center text-md-start px-0 px-md-0 "
          style={{ fontSize: "16px" }}
        >
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button
          className="rounded border-0 background-green text-white px-4 py-2 "
          style={{ width: "fit-content" }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Products;
