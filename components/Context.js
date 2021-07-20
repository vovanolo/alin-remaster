import React, { useContext, useState } from "react";

// Контекст для коллбек форми
export const CallBackForm = React.createContext();

export const useCallBackForm = () => {
  return useContext(CallBackForm);
};

export const CallBackFormProvider = ({ children }) => {
  const AnimationForm = {
    backIn:
      "relative bg-white w-full md:w-1/2 p-5 sm:p-10 container-form transition duration-700",
    backOut:
      "relative bg-white w-full md:w-1/2 p-5 sm:p-10 container-form-close transition duration-700",
  };

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
    <CallBackForm.Provider
      value={{
        visible: isBlock,
        callBackFormAnim,
        triggerToggleForm,
      }}
    >
      {children}
    </CallBackForm.Provider>
  );
};

// Контекст для форми date
export const FormContextDate = React.createContext();

export const useFormContextDate = () => {
  return useContext(FormContextDate);
};

export const FormContextDateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [locationFrom, setLocationFrom] = useState("Львів");

  return (
    <FormContextDate.Provider value={[startDate, setStartDate]}>
      {children}
    </FormContextDate.Provider>
  );
};
