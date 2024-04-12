import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function MasterLayout({ Page }) {
    return (
        <>
            <Header />
            {Page}
            <Footer />
        </>
    );
}

export default MasterLayout;