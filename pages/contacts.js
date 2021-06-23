import { MainLayout } from "../components/MainLayout";
import Link from "next/link";

export default function Contacts() {
  return (
    <MainLayout title={"Contacts"}>
      <section className="container-main mx-auto px-4 xl:px-0">
        {" "}
        <h1>Hello Contacts</h1>
      </section>
    </MainLayout>
  );
}
