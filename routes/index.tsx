import { asset, Head } from "$fresh/runtime.ts";
import { PageProps } from "https://deno.land/x/fresh@1.1.5/src/server/mod.ts";
import FooterComponent from "../components/FooterComponent.tsx";
import HeaderComponent from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Map from "../components/Map.tsx";
import Carousel from "../islands/CarouselIsland.tsx";

export default function Home(props: PageProps) {
  const TITLE = "La menuiserie Joire - L'atelier du bois";
  const DESCRIPTION =
    "Le menuisier Joire réalise divers travaux de menuiserie et autres services. Vous pouvez y acheter des jouets, des objets du quotidien ou demander un devis pour un objet unique.";
  const ogImageUrl =
    new URL(asset("/illustration/L'Anerie.webp"), props.url).href;

  return (
    <>
      <Head>
        <title>Menuiserie Joire- L'atelier du bois</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <main class="bg-black min-h-screen text-white mx-auto">
        <section class="p-4 max-w-screen-lg mx-auto">
          <HeaderComponent title="Home" active="/" />
          <div class="flex justify-center"></div>

          <Hero />
          <Carousel />
          <ListOfTags class="my-5" />
          <Projects class="my-5" id="projects" />
          <section id="contact">
            <Map class="mb-10" />
          </section>
          <FooterComponent />
        </section>
      </main>
    </>
  );
}

const ListOfTags = (props: { class?: string }) => {
  const list = [
    "toupies",
    "assietes",
    "cuillères",
    "bols",
    "saladiers",
    "cuillères à miel",
    "bilboquets",
    "cheval à bascule",
    "petites voitures",
    "train",
    "avions",
    "santons",
    "crèche de noël",
    "décorations de noël",
    "croix",
    "bijoux",
    "...",
  ];
  return (
    <div className={`grid grid-cols-2 gap-6 ${props.class ?? ""}`}>
      <ul className={"text-justify flex flex-wrap"}>
        {list.map((el: string) => (
          <li className="">
            <span class="inline-block px-2 py-1 text-xs font-semibold leading-none bg-green-200 text-green-800 rounded-full">
              #{el}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = (props: { class?: string; id?: string }) => {
  return (
    <section id={props.id ?? ""} className={`${props.class ?? ""}`}>
      <div class="container mx-auto">
        <div>
          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Nos dernières créations
          </h1>

          <p class="mt-3 text-gray-500 dark:text-gray-400">
            Nous créons en permanence de nouveaux objets.
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            {/* project 1 */}

            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style="background-image:url('/illustration/heart.webp')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">
                  Pour la fête des mères, nous avons réalisé un pendantif en
                  bois
                </h2>
                <p class="mt-2 text-lg tracking-wider text-green-500 uppercase dark:green-blue-400 ">
                  Un pendantif en bois
                </p>
              </div>
            </div>

            {/* project 2  */}
            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style="background-image:url('/illustration/loco.webp')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">
                  Nous avons créé deux modèles de wagons pour accrocher à la
                  locomotive et faire un train de marchandises et de passagers
                </h2>
                <p class="mt-2 text-lg tracking-wider text-green-500 uppercase dark:green-blue-400 ">
                  Des wagons pour la locomotive
                </p>
              </div>
            </div>

            {/* project 3 */}
            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style="background-image:url('/illustration/creche.webp')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">
                  Pour le marché de Noël, nous avons réalisé une crèche en bois
                  avec tous ses personnages. Nous allons bientôt ajouter les
                  animaux.
                </h2>
                <p class="mt-2 text-lg tracking-wider text-green-500 uppercase dark:green-blue-400 ">
                  Des wagons pour la locomotive
                </p>
              </div>
            </div>
            {/* project 4 */}

            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              style="background-image:url('/illustration/bol.webp')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">
                  Nous avons ajouté un nouveau bol à notre collection d'objets
                  du quotidien pour agrémenter les cuillères à miel.
                </h2>
                <p class="mt-2 text-lg tracking-wider text-green-500 uppercase dark:green-blue-400 ">
                  Bol
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
