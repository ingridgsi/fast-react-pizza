import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  //1) parent route of all the other routers.
  //2) All other routers declared on the App.jsx will become children of this router(AppLayout)
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      

      <Header />

      {/* We can use outlet to render whatever is the current route */}
      <div className="overflow-scroll">
      <main className=" max-w-3xl mx-auto">
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
