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
    <main className="relative">
        <section className="xl:padding-1 wide:padding-r padding-b">
            Hero
        </section>
        <section className="padding">PopularProducts</section>
        <section className="padding">SuperQuality</section>
        <section className="padding-x">Services</section>
        <section className="padding bg-pale-blue">CustomerReviews</section>
        <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
        <section className="padding-x padding-t pb-8">Footer</section>
    </main>
);

export default App;
