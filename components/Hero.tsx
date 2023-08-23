import { PageProps } from "$fresh/server.ts";
import Map from "./Map.tsx";

export default function Hero() {
  return (
    <section className="w-full italic text-center text-white">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Le meilleur endroit pour donner vie à vos <br /> vos{" "}
                <span className="text-green-500 ">envies de bois</span>
              </h1>

              <p className="mt-3 mb-10 text-gray-600 dark:text-gray-400">
                La menuiserie Joire vous propose un large choix de services,
                portes, fenêtres, volets, escaliers, tables, jouets en bois,
                objets tournés du quotidien ou sur commande
              </p>

              <a
                href={"/#projects"}
                className="w-full px-5 py-2  text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-400 rounded-lg lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500"
              >
                Voir les créations
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="/illustration/jouets.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
