const FooterComponent = () => {
  return (
    <section className={"mt-2 w-full "}>
      <div className={"grid grid-cols-2 gap-4  w-full lg:grid-cols-4"}>
        <div className="col-span-2  text-justify p-2 mx-auto">
          <h2 className="text-2xl font-bold"> A propos</h2>
          <p>
            Nous sommes spécialistes des objets tournés, jouets en bois,
            gravures et menuiseries traditionnelles. Nous sommes spécialistes
            des objets tournés, jouets en bois, gravures et menuiseries
            traditionnelles.
          </p>
        </div>
        <div className={"p-2 mx-auto "}>
          <h2 className="text-2xl font-bold"> Services</h2>
          {[
            "Jouets",
            "Decorations",
            "Objets du quotidien",
            "Commandes",
            "Communauté",
          ].map((service) => (
            <p>{service}</p>
          ))}
        </div>
        <div className={"p-2 mx-auto "}>
          <h2 className="text-2xl font-bold">Contactez-nous</h2>
          <p>
            Nous sommes disponibles pour discuter d’un projet ou d’unec commande
            sur place sur rendez-vous.
            <ul>
              <li>
                <a
                  className={"underline mx-2"}
                  href="https://www.openstreetmap.org/?mlat=46.08129&mlon=1.05996#map=18/46.08129/1.05996"
                  target="_blank"
                  rel="noreferrer"
                >
                  11, intras, Blond, France
                </a>
              </li>
              <li>
                <a
                  className={"underline mx-2"}
                  href="mailto:lanerie87300@outlook.fr"
                >
                  lanerie87300@outlook.fr
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
