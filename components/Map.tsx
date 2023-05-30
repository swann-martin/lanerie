import { Enveloppe, Facebook, Instagram, MapPin, Phone } from "./Icons.tsx";

export default function Map() {
  return (
    <section class="">
      <div class="container  py-12 mx-auto">
        <div>
          <p class="font-medium text-green-500 ">Informations de contact</p>

          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Contactez-nous
          </h1>

          <p class="mt-3 text-gray-500 dark:text-gray-400">
            Nous sommes là pour répondre à vos questions
          </p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                <Enveloppe />
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Nous sommes là pour vous aider
              </p>
              <p class="mt-2 text-sm text-green-500 dark:text-green-400">
                <a href="mailto:lanerie87300@outlook.fr">
                  lanerie87300@outlook.fr
                </a>
              </p>
            </div>

            <div>
              <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                <MapPin />
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">
                L'atelier
              </h2>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Venez nous rencontrer
              </p>
              <p class="mt-2 text-sm text-green-500 dark:text-green-400">
                <a
                  target="_blank"
                  href="https://www.google.com/maps?ll=46.08153,1.060489&z=13&t=m&hl=fr&gl=NL&mapclient=embed&q=Intras+87300+Blond+France"
                >
                  11, intras, Blond, France
                </a>
              </p>
            </div>

            <div>
              <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                <Phone />
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Téléphone
              </h2>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Lundi-Vendredi de 9h à 18h.
              </p>
              <p class="mt-2 text-sm text-green-500 dark:text-green-400">
                <a target="_blank" href="tel:+33 6 33 61 50 75">
                  +33 6 33 61 50 75
                </a>
              </p>
            </div>
          </div>

          <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22139.791741112353!2d1.042979420283207!3d46.081529113222075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fea50290cd270f%3A0xb61ddc0849890fc5!2sIntras%2C%2087300%20Blond%2C%20France!5e0!3m2!1sfr!2snl!4v1685446635989!5m2!1sfr!2snl"
              width="600"
              height="450"
              style="border:0;"
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </div>
      <section class="grid grid-cols-2 gap-12 mt-10 mx-auto">
        <div>
          <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
            <Instagram />
          </span>

          <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">
            Instagram
          </h2>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Suivez-nos créations sur Instagram
          </p>
          <p class="mt-2 text-sm text-green-500 dark:text-green-400">
            <a target="_blank" href="https://www.instagram.com/lanerie87300/">
              instagram.com/lanerie87300/
            </a>
          </p>
        </div>
        <div>
          <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
            <Facebook />
          </span>

          <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">
            Facebook
          </h2>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Suivez-nos créations sur Facebook
          </p>
          <p class="mt-2 text-sm text-green-500 dark:text-green-400">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100088335698134"
            >
              facebook
            </a>
          </p>
        </div>
      </section>
    </section>
  );
}
