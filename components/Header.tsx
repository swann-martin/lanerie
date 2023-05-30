import { PageProps } from "$fresh/server.ts";
import MobileHeader from "../islands/MobileHeader.tsx";
import NavigationBar from "./NavigationBar.tsx";
const HeaderComponent = (props: { title: string; active: string }) => {
  const isHome = props.active == "/";
  return (
    <section className="w-full italic text-center text-white font-alex">
      <div className="hidden md:block md:w-full bg-main bg-top bg-cover bg-no-repeat rounded-b-sm">
        <div className="mb-4">
          <NavigationBar class=" md:flex" active={props.active} />
        </div>
      </div>
      <MobileHeader active={props.active} />
    </section>
  );
};

export default HeaderComponent;
