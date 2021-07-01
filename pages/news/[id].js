import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function New() {
  const router = useRouter();

  return (
    <MainLayout>
      <div>New</div>
    </MainLayout>
  );
}
