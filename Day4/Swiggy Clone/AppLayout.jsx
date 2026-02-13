import { Navbar } from "./src/components/Navbar";
// import { Body } from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import { Outlet } from "react-router-dom";

export function AppLayout(){
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}