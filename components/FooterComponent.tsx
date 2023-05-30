import { Enveloppe, Facebook, GitHub, Instagram, MapPin } from "./Icons.tsx";

const FooterComponent = () => {
  const about = {
    title: "A propos",
    text:
      "Nous sommes spécialistes des objets tournés, jouets en bois, gravures et menuiseries traditionnelles. Nous sommes spécialistes des objets tournés, jouets en bois, gravures et menuiseries traditionnelles.",
  };

  const services = {
    title: "Services",
    list: [
      "Jouets",
      "Decorations",
      "Objets du quotidien",
      "Commandes",
      "Communauté",
    ],
  };

  const contact = {
    title: "Contact",
    text:
      "Nous sommes spécialistes des objets tournés, jouets en bois, gravures et menuiseries traditionnelles.",
  };

  return (
    <section className={"mt-2 w-full "}>
      <div
        className={"grid grid-cols-1 gap-4  w-full lg:grid-cols-4 md:grid-cols-2"}
      >
        <div className="md:col-span-2 col-span-1 text-justify md:p-2 mx-auto">
          <h2 className="text-2xl font-bold">{about.title}</h2>
          <p>
            {about.text}
          </p>
        </div>
        <div className={"md:p-2  "}>
          <h2 className="text-2xl font-bold">{services.title}</h2>
          {services.list.map((service) => <p>{service}</p>)}
        </div>
        <div className={"md:p-2 "}>
          <h2 className="text-2xl font-bold">{contact.title}</h2>

          <ul>
            <li className="flex">
              <MapPin />
              <a
                className={"hover:underline mx-2"}
                href="https://www.openstreetmap.org/?mlat=46.08129&mlon=1.05996#map=18/46.08129/1.05996"
                target="_blank"
                rel="noreferrer"
              >
                11, intras, Blond, France
              </a>
            </li>
            <li className="flex ">
              <Enveloppe />
              <a
                className={"hover:underline mx-2"}
                href="mailto:lanerie87300@outlook.fr"
              >
                lanerie87300@outlook.fr
              </a>
            </li>
            <li className="flex">
              <Instagram />
              <a
                className={"hover:underline mx-2"}
                href="https://www.instagram.com/lanerie87300/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="flex">
              <Facebook />
              <a
                className={"hover:underline mx-2"}
                href="https://www.facebook.com/profile.php?id=100088335698134"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <a
          href={"https://github.com/swann-martin"}
          target={"_blank"}
          rel="noreferrer"
          className="w-full flex justify-center  py-2 mb-4 mx-auto hover:text-green-200"
        >
          <span className={"font-bold mr-2"}>
            &copy; L'Anerie - {new Date().getFullYear()}{" "}
            - Tous droits réservés - développé par Swann Martin
          </span>
          <GitHub />
        </a>
      </section>
    </section>
  );
};

export default FooterComponent;
