import type { ContactFormDataType } from "@/types";
import { useState } from "react";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */

type ResponseType = {
  type: "success" | "error";
  message: string;
};

type UseSubmitReturnType = {
  isLoading: boolean;
  response: ResponseType | null;
  submit: (url: string, data: ContactFormDataType) => Promise<void>;
};

const useSubmit = (): UseSubmitReturnType => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ResponseType | null>(null);

  const submit = async (url: string, data: ContactFormDataType) => {
    const random: number = Math.random();
    setIsLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error: unknown) {
      setResponse({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong, please try again later!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
