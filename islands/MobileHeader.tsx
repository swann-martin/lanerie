import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { CloseCross, Hamburger } from "../components/Icons.tsx";

export default function MobileHeader(
  props: { active: string; isBlogDetailHeader?: boolean; title?: string },
) {
  const checked = useSignal(false);

  return (
    <div
      class={`relative block text-lg font-bold text-gray-700 dark:text-gray-300 sm:hidden`}
    >
      <div class="flex h-12 flex-row items-center justify-between gap-6 px-4">
        <div>
          <div class="flex items-center gap-2">
            <img
              class="h-8 w-8 rounded-full"
              src={asset("logo.svg")}
              alt="logo"
            />
          </div>
        </div>
        <div class="flex min-h-screen items-center justify-center">
          <div
            class="group relative my-2 mx-auto h-5 w-7 cursor-pointer"
            onClick={() => (checked.value = !checked.value)}
          >
            <Hamburger
              class={`icon icon-tabler icon-tabler-menu-2 absolute top-0 transition ${
                checked.value ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <CloseCross
              class={`icon icon-tabler icon-tabler-x absolute top-0 transition ${
                checked.value ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
      <div
        class={`absolute w-full bg-black transition-all duration-300 ${
          checked.value ? "min-h-screen bg-opacity-80" : "min-h-0 bg-opacity-0"
        }`}
        onClick={() => (checked.value = false)}
      />
      <div class="absolute top-12 w-full bg-green-600">
        <div
          class={`divide-y-1 overflow-hidden transition-all duration-300 divide-gray-600 ${
            checked.value ? "my-4 max-h-64" : "max-h-0"
          }`}
        >
          {true && (
            <div class="flex w-full flex-col items-center justify-center py-2 first:pt-0 last:pb-0">
              {[{ href: "/", name: "Home" }, {
                href: "/about",
                name: "About",
              }, {
                href: "/#contact",
                name: "Contact",
              }].map((menu) => (
                <div class="text-center">
                  <a
                    href={menu.href}
                    class={"hover:(text-gray-900 dark:text-gray-100) border-gray-500 px-2 dark:border-gray-300" +
                      (menu.href === props.active ? " text-gray-900" : "")}
                    onClick={() => {
                      checked.value = false;
                    }}
                  >
                    {menu.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
