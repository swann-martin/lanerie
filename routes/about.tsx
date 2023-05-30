import { PageProps } from "$fresh/server.ts";
import HeaderComponent from "../components/Header.tsx";
import { IconMinus, IconPlus } from "../components/Icons.tsx";
import Map from "../components/Map.tsx";
import Accordion from "../islands/Acordeon.tsx";

export default function About(props: PageProps) {
  const faqs = [
    {
      title: "Comment vous joindre ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animiab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      title: "Comment faire pour vous payer ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animiab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      title: "Faites vous du sur-mesure ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animiab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      title: "Quels sont vos horaires ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animiab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      title: "Quels garanties sur la provenance du bois ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animiab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
  ];

  return (
    <main class="bg-black min-h-screen text-white mx-auto">
      <section class="p-4 max-w-screen-lg mx-auto">
        <HeaderComponent title="About" active="/about" />

        <Map />

        <section class="">
          <div class="container max-w-4xl px-6 py-4 mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
              Frequently asked questions
            </h1>

            <div class="mt-12 space-y-8">
              {faqs.map(({ title, content }) => (
                <Accordion
                  title={title}
                  content={content}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
