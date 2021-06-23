import { MainLayout } from "../components/MainLayout";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <MainLayout>
      <article className="constainer-main mx-auto px-4 xl:px-0">
        <h1 className="text-7xl font-bold text-center">404</h1>
        <p className="text-7xl font-bold text-center">ERROR</p>
      </article>
    </MainLayout>
  );
}
