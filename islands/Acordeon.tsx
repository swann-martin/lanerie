import { useRef, useState } from "preact/hooks";
import { IconMinus, IconPlus } from "../components/Icons.tsx";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion(props: AccordionProps) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore :<ref is not null>
    setHeight(active ? "0px" : `${contentSpace?.current?.scrollHeight ?? 0}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180",
    );
  }

  return (
    <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
      <button
        className="flex items-center justify-between w-full p-8 py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <h2 className="inline-block text-footnote font-semibold text-white">
          {props?.title}
        </h2>

        {!active
          ? (
            <span class="text-white bg-green-500 rounded-full">
              <IconPlus />
            </span>
          )
          : (
            <span class="text-gray-400 bg-green-200 rounded-full">
              <IconMinus />
            </span>
          )}
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
          {props?.content}
        </p>
      </div>
    </div>
  );
}
