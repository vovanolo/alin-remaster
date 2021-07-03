import { MainLayout } from "../components/MainLayout";
import SimpleReactLightbox from "simple-react-lightbox";
import HeroSection from "../components/sections/Car-sale/HeroSection";
import CallbackForm from "../components/CallbackForm";
import { useState } from "react";

const AnimationForm = {
  backIn:
    "relative bg-white w-full md:w-1/2 p-5 sm:p-10 container-form transition duration-700",
  backOut:
    "relative bg-white w-full md:w-1/2 p-5 sm:p-10 container-form-close transition duration-700",
};

export default function carSale() {
  const [callBackFormOnClose, setCallBackFormOnClose] = useState(false); // Callback form On or Close
  // Animation CallBackForm backIn or backOut
  const [callBackFormAnim, setCallBackFormAnim] = useState(
    AnimationForm.backIn
  );
  const [isBlock, setIsBlock] = useState("none");

  const triggerToggleForm = () => {
    setCallBackFormOnClose(!callBackFormOnClose);
    if (callBackFormOnClose) {
      setCallBackFormAnim(AnimationForm.backOut);
      setTimeout(() => {
        setIsBlock("none");
      }, 1000);
    } else {
      setCallBackFormAnim(AnimationForm.backIn);
      setIsBlock("flex");
    }
  };

  return (
    <MainLayout title="Аренда авто с правом выкупа">
      <SimpleReactLightbox>
        <HeroSection triggerToggleForm={triggerToggleForm} />
      </SimpleReactLightbox>

      <CallbackForm
        triggerToggleForm={triggerToggleForm}
        callBackFormAnim={callBackFormAnim}
        isBlock={isBlock}
      />
    </MainLayout>
  );
}
