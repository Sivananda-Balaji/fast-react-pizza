import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-extrabold md:text-3xl lg:text-6xl">
        The best pizza.
        <br />
        <span className="text-blue-600">
          Straight out of the oven, Straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
