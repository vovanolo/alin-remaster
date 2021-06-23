import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout title={"Home"}>
      <section className="container-main mx-auto px-4 xl:px-0">
        <h1>
          <Link href={"/contacts"}>Contacts</Link>
        </h1>
      </section>
    </MainLayout>
  );
}
