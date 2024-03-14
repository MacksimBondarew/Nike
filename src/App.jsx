import Nav from "./components/Nav";
import {
    Hero,
    PopularProducts,
    SuperQuality,
    Services,
    Subscribe,
    Footer,
    CustomerReviews,
    SpecialOffer,
} from "./sections";

const App = () => (
    <>
        <Nav />
        <main className="relative xl:padding-l wide:padding-r padding-b">
            <section>
                <Hero />
            </section>
            <section className="padding">
                <PopularProducts />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffer />
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="padding-x padding-t pb-8">
                <Footer />
            </section>
        </main>
    </>
);

export default App;
