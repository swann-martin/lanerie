import { Head } from "$fresh/runtime.ts";
import FooterComponent from "../components/FooterComponent.tsx";
import HeaderComponent from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Map from "../components/Map.tsx";
import Carousel from "../islands/CarouselIsland.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>L'anerie - L'atelier du bois</title>
      </Head>
      <main class="bg-black min-h-screen text-white mx-auto">
        <section class="p-4 max-w-screen-lg mx-auto">
          <HeaderComponent title="Home" active="/" />
          <div class="flex justify-center"></div>

          <section>
            <Hero />
            <Carousel />
            <div className={"grid grid-cols-2 gap-6"}>
              <ul className={"text-justify flex flex-wrap"}>
                {[
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
                ].map((el: string) => (
                  <li className="">
                    <span class="inline-block px-2 py-1 text-xs font-semibold leading-none bg-green-200 text-green-800 rounded-full">
                      #{el}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <Map />
          <FooterComponent />
        </section>
      </main>
    </>
  );
}
