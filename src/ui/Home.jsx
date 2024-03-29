import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-extrabold md:text-3xl lg:text-6xl">
        The best pizza.
        <br />
        <span className="text-blue-600">
          Straight out of the oven, Straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue Order
        </Button>
      )}
    </div>
  );
}

export default Home;
