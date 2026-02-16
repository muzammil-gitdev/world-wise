import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <>
      <PageNav />
      <AppNav />
      <h1>World Wise </h1>
      <NavLink to={"/app"}>Go to APP</NavLink>
    </>
  );
}

export default HomePage;
