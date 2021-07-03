import { MainLayout } from "../components/MainLayout";
import SimpleReactLightbox from "simple-react-lightbox";
import HeroSection from "../components/sections/Car-sale/HeroSection";
import CallbackForm from "../components/CallbackForm";
import { useState } from "react";

export default function carSale() {
  const [callBackFormOnClose, setCallBackFormOnClose] = useState(false);

  const triggerToggleForm = () => {
    setCallBackFormOnClose(!callBackFormOnClose);
  };

  return (
    <MainLayout title="Аренда авто с правом выкупа">
      <SimpleReactLightbox>
        <HeroSection triggerToggleForm={triggerToggleForm} />
      </SimpleReactLightbox>
      {callBackFormOnClose ? (
        <CallbackForm triggerToggleForm={triggerToggleForm} />
      ) : null}
    </MainLayout>
  );
}
