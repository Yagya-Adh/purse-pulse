import NavBar from "./components/NavBar";
import HomeCard from "./components/Home/HomeCard";
import FAQs from "./components/FAQs/FAQs";
import Features from "./components/Feature/Feature";
import UsersGuide from "./components/UsersGuide/UsersGuide";
import Contact from "./components/Contacts/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import { ReactNode } from "react";
import { BacktoTop } from "./components/backtotop/BacktoTop";
interface IRoute {
  id: number;
  path: string;
  element: ReactNode;
  name?: string;
}
const routes: IRoute[] = [
  { id: 1, path: "/", element: <HomeCard />, name: "Home" },
  { id: 2, path: "#features", element: <Features />, name: "Feature" },
  { id: 3, path: "#users-guide", element: <UsersGuide />, name: "User Guide" },
  {
    id: 4,
    path: "#testimonials",
    element: <Testimonials />,
    name: "Testimonials",
  },
  { id: 5, path: "#pricing", element: <Pricing />, name: "Pricing" },
  { id: 6, path: "#contact", element: <Contact />, name: "Contact" },
  { id: 7, path: "#faqs", element: <FAQs />, name: "FAQs" },
];

const Home = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black">
        <NavBar routes={routes} />
        {routes.map((route) => (
          <section
            id={route.path.replace("#", "")}
            key={route.id}
            className="bg-meroColor-jet-black "
          >
            <div>{route.element}</div>
          </section>
        ))}
        <BacktoTop />
      </div>
    </>
  );
};

export default Home;
