import { tw } from "twind";
import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import IconCircleChevronsRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-right.tsx";
import IconCircleChevronsLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-left.tsx";

const SLIDE_DATA = [
  {
    color: "bg-gray-300",
    text: "Bijoux : un pendentif en coeur",
    url: asset("/illustration/heart.webp"),
  },
  {
    color: "bg-green-300",
    text: "Jouets pour petits et grands : des toupies",
    url: asset("/illustration/toupies.webp"),
  },
  {
    color: "bg-yellow-300",
    text: "Objets du quotidien : bol et cuillère à miel",
    url: asset("/illustration/bol.webp"),
  },
  {
    color: "bg-blue-300",
    text: "Jouets pour petits et grands : un cheval à bascule",
    url: asset("/illustration/jouets.webp"),
  },
  {
    color: "bg-gray-300",
    text: "Jouets pour petits et grands : des bilboquets",
    url: asset("/illustration/bilboquet.webp"),
  },
  {
    color: "bg-green-300",
    text: "Jouets pour petits et grands : jeux de go",
    url: asset("/illustration/assiete.webp"),
  },
  {
    color: "bg-yellow-300",
    text: "Décorations de noël : la crèche",
    url: asset("/illustration/creche.webp"),
  },
  {
    color: "bg-yellow-300",
    text: "Décorations de noël : des boules de noël",
    url: asset("/illustration/balls.webp"),
  },
  {
    color: "bg-blue-300",
    text: "L'atelier",
    url: asset("/illustration/atelier.webp"),
  },
];

type SlideProps = {
  class?: string;
  key?: number;
  data: {
    color: string;
    text: string;
    url: string;
  };
};

const Slide = (props: SlideProps) => {
  const { key, data } = props;
  const { color, text, url } = data;
  if (props.class === undefined) props.class = "";
  return (
    <div
      key={key}
      class={`${color} h-96 w-full text-center text-white font-bold p-5 ${props.class}`}
    >
      <img src={url} className="h-80 w-full object-cover object-center" />
      <p>{text}</p>
    </div>
  );
};

type CarouselProps = {
  showNavigation?: boolean;
  interval?: number;
  currentSlide?: number;
  automatic?: boolean;
  class?: string;
};

const Carousel = (props: CarouselProps) => {
  const NAVIGATION_COLOR = `hover:text-gray-300 text-white`;
  const CHEVRON_STYLE =
    `absolute z-30 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`;
  const SHOW_NAVIGATION = props.showNavigation === false ? false : true;
  const SLIDE_INTERVAL = props.interval ? props.interval : 3500;
  const currentSlide = useSignal(props.currentSlide ? props.currentSlide : 0);
  const automatic = useSignal(props.automatic === false ? false : true);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const slideClasses = (idx = 0) => {
    let outgoingSlide = currentSlide.value - 1;
    let incomingSlide = currentSlide.value + 1;
    if (outgoingSlide === -1) outgoingSlide = SLIDE_DATA.length - 1;
    if (incomingSlide === SLIDE_DATA.length) incomingSlide = 0;
    // console.log(outgoingSlide, currentSlide.value, incomingSlide)
    const TRANSITION_CLASS = () => {
      if (currentSlide.value === idx) return "translate-x-0 z-20";
      if (incomingSlide === idx) return "translate-x-full z-10";
      if (outgoingSlide === idx) return "-translate-x-full z-10";
      return "translate-x-full";
    };
    return tw`slide absolute top-0 left-0 transition-all ease-in-out duration-700 transform ${TRANSITION_CLASS}`;
  };

  const nextSlide = () => {
    if (SLIDE_DATA.length === currentSlide.value + 1) {
      currentSlide.value = 0;
    } else {
      currentSlide.value++;
    }
  };

  const previousSlide = () => {
    if (currentSlide.value === 0) {
      currentSlide.value = SLIDE_DATA.length - 1;
    } else {
      currentSlide.value--;
    }
  };

  const chevronClick = (doCallback = () => {}) => {
    if (automatic.value) automatic.value = false;
    return doCallback();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (automatic.value) nextSlide();
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const ArrowKeyNavigation = () => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (automatic.value) automatic.value = false;
      switch (event.code) {
        case "ArrowLeft":
          event.preventDefault();
          previousSlide();
          break;
        case "ArrowRight":
          event.preventDefault();
          nextSlide();
          break;
        default:
          break;
      }
    };
    slideshowRef.current?.addEventListener("keydown", keydownHandler);
    return () =>
      slideshowRef.current?.removeEventListener("keydown", keydownHandler);
  };
  useEffect(ArrowKeyNavigation, []);

  const goToSlide = (slide_index = 0) => {
    if (automatic.value) automatic.value = false;
    currentSlide.value = slide_index;
  };

  const DotsNavigation = () => (
    <div
      class={"slide_nav z-30 w-full absolute bottom-0 flex justify-center cursor-pointer"}
    >
      {SLIDE_DATA.map((_item, idx) => {
        return (
          <div
            class={`px-1 ${NAVIGATION_COLOR}`}
            onClick={() => {
              goToSlide(idx);
            }}
            key={idx}
          >
            {idx === currentSlide.value ? <>●</> : <>○</>}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      ref={slideshowRef}
      class={`slideshow relative flex-1 flex-end p-0 overflow-hidden ${
        props.class !== undefined ? props.class : ""
      }`}
      tabIndex={0}
    >
      <IconCircleChevronsLeft
        class={`left-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(previousSlide)}
      />
      <IconCircleChevronsRight
        class={`right-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(nextSlide)}
      />
      {SLIDE_DATA.map((item, idx) => (
        <Slide data={item} key={idx} class={slideClasses(idx)} />
      ))}
      {SHOW_NAVIGATION && <DotsNavigation />}
      <Slide data={SLIDE_DATA[0]} class="opacity-0 pointer-events-none" />
    </div>
  );
};

export default Carousel;
