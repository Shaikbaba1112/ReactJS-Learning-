import { Navbar } from "./src/components/Navbar";
import { Body } from "./src/components/Body";
import { Footer } from "./src/components/Footer";

export function App(){
    return (
        <>
            {/* {heading} */}
            <Navbar />
            <Body />
            <Footer />
        </>
    );
}