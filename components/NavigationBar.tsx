import * as Icons from "./Icons.tsx";
export default function NavigationBar(props: {
  active: string;
  class?: string;
}) {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const isHome = props.active == "/";

  return (
    <nav
      class={
        "flex left flex justify-between items-center w-full " + props.class ??
        ""
      }
    >
      <Logo />
      <ul class="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={`p-2 ${
                isHome ? "text-white" : "text-gray-100"
              } hover:underline ${
                props.active == item.href ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
        <li class="flex items-center">
          <a
            href="https://github.com/swann-martin/portfolio"
            class="hover:text-red-600 inline-block"
          >
            <Icons.GitHub />
          </a>
        </li>
      </ul>
    </nav>
  );
}
function Logo() {
  return (
    <a href="/" class="flex mr-3 items-center">
      <img src="/logo.png" alt="L'anerie logo" width={40} height={40} />
    </a>
  );
}
