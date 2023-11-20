import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../component/Navbar";


export default function Root() {
    return (
      <>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <ScrollRestoration />
      </>
    );
  }