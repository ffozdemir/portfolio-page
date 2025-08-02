import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AlertContextType = {
  type?: "success" | "error";
  isOpen: boolean;
  message: string;
  onOpen: (type: "success" | "error", message: string) => void;
  onClose: () => void;
};

type AlertProviderProps = {
  children: ReactNode;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [state, setState] = useState<Partial<AlertContextType>>({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });

  const onOpen = (type: "success" | "error", message: string) => {
    setState({ isOpen: true, type, message });
  };

  const onClose = () => {
    setState({ isOpen: false, message: "" });
  };

  const value = useMemo(
    () =>
      ({
        ...state,
        onOpen,
        onClose,
      } as AlertContextType),
    [ state.type, state.message]
  );

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error(
      "Error accured: useAlertContext must be used within an AlertProvider"
    );
  }
  return context;
};
