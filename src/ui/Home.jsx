import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser"
import Button from "./Button";

function Home() {

  // This is how we read date from the store
  const username = useSelector(state => state.user.username)

  return (
    <div className="my-10 px-4  sm:my-16 text-center  ">
      <h1 className="text-xl font-semibold  mb-8 md:text-3xl x">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.

        </span>
      </h1>

      {username === "" ?  (<CreateUser/> ): <Button to="menu" type="primary">Continue ordering, {username}</Button>}
    </div>
  );
}

export default Home;
 