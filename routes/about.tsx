import { PageProps } from "$fresh/server.ts";
import FooterComponent from "../components/FooterComponent.tsx";
import HeaderComponent from "../components/Header.tsx";
import { Quotes } from "../components/Icons.tsx";
import Map from "../components/Map.tsx";
import Accordion, { AccordionProps } from "../islands/Acordeon.tsx";

export default function About(props: PageProps) {
  return (
    <main class="bg-black min-h-screen text-white mx-auto">
      <section class="p-4 max-w-screen-lg mx-auto">
        <HeaderComponent title="About" active="/about" />

        <AboutTheArtisan />

        <Map class="mb-10" />

        <Faqs />
        <FooterComponent />
      </section>
    </main>
  );
}

const Faqs = () => {
  const faqs: AccordionProps[] = [
    {
      title: "Comment vous joindre ?",
      content:
        "Vous pouvez nous joindre par téléphone au +33 6 33 61 50 75, par email à l'adresse lanerie87300@outlook.fr sur place au 11, intras, Blond, France entre (9h et 18h), ou sur facebook",
    },
    {
      title: "Comment faire pour vous payer ?",
      content:
        "Vous pouvez nous payer par carte bancaire, via paylib sur notre numéro de téléphone ou en espèces sur place",
    },
    {
      title: "Faites vous des livraisons ?",
      content:
        "Oui, nous livrons en France pour les petits objets via Colissimo, le prix de la livraison est déterminée en fonction du poids du colis en général environ 5€.",
    },
    {
      title: "Quels sont vos horaires ?",
      content: "Nous sommes ouverts du lundi au vendredide 9h a 18h.",
    },
    {
      title: "Quelles garanties sur la provenance du bois ?",
      content:
        "Le bois est sourcé localement dans une parcelle de forêt qui appartient à l'Anerie. Pour tout arbre coupé, deux sont replantés",
    },
  ];
  return (
    <div class="container max-w-4xl px-6 py-4 mx-auto">
      <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
        Foire Aux Questions
      </h1>

      <div class="mt-12 space-y-8">
        {faqs.map(({ title, content }, idx: number) => (
          <Accordion
            title={title}
            content={content}
            isOpen={idx === 0}
          />
        ))}
      </div>
    </div>
  );
};

const AboutTheArtisan = () => {
  return (
    <div className="container py-10 mx-auto rounded-lg ">
      <div className="lg:-mx-6 lg:flex lg:items-center">
        <img
          className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
          src={"/illustration/artisan.avif"}
          alt=""
        />

        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 relative">
          <Quotes class="absolute text-green-200 bottom-0 right-0 w-24 h-24 z-0" />

          <h2 className="text-2xl z-index-2 font-semibold text-gray-800 dark:text-white lg:text-3xl text-justify">
            Le charpentier étend le cordeau, fait un tracé au crayon, façonne le
            bois avec un couteau, et marque ses dimensions avec le compas. C'est
            un métier de précision. L'objet final apporte de la joie à celui qui
            reçoit. C'est pour cela que l'Anerie a ouvert ses portes en 2021.
          </h2>

          <h3 className="mt-6 text-lg font-medium text-color-secondary ">
            Damien Joire
          </h3>
          <p className="text-gray-500">Artisan âne en chef</p>
        </div>
      </div>
    </div>
  );
};
