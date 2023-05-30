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
                Le meilleurs endroit pour acheter <br /> vos{" "}
                <span className="text-green-500 ">jouets en bois</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                L'anerie vous propose un large choix de jouets en bois, objets
                tournés du quotidien ou sur commande
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500">
                Voir les créations
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="/illustration/jouets.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
