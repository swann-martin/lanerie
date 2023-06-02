import * as Icons from "./Icons.tsx";
export default function NavigationBar(props: {
  active: string;
  class?: string;
}) {
  const items = [
    {
      name: "Accueil",
      href: "/",
    },
    {
      name: "A propos",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];
  const isHome = props.active == "/";

  return (
    <nav
      class={"flex left flex justify-between items-center w-full sticky top-0 z-10" +
          props.class ??
        ""}
    >
      <Logo />

      <ul class="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={`p-2 ${
                isHome ? "text-white" : "text-gray-100"
              } hover:text-green-200 ${
                props.active == item.href ? "font-bold text-green-200" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
function Logo() {
  return (
    <a href="/" className="flex mr-3 items-center">
      <img src="/logo.svg" alt="L'anerie logo" width={40} height={40} />
      <span className="ml-2 hidden md:block text-4xl font-bold">L'Anerie</span>
    </a>
  );
}
