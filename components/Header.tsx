import { PageProps } from "$fresh/server.ts";
import NavigationBar from "./NavigationBar.tsx";
const HeaderComponent = (props: { title: string; active: string }) => {
  const isHome = props.active == "/";
  return (
    <section className="w-full italic text-center text-white font-alex">
      <div className="w-full bg-main bg-top bg-cover bg-no-repeat rounded-b-sm">
        <div className="mb-4">
          <NavigationBar class="hidden md:flex" active={props.active} />
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
