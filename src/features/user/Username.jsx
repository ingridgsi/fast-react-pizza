import { useSelector } from "react-redux";

function Username() {
  // to get info from the store
  const username = useSelector(state => state.user.username)

  if(!username) return null;

  return <div className="hidden text-sm font-semibold md:block">{username}</div>;
}

export default Username;
