import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AlertContextType = {
  type: "success" | "error" ;
  isOpen: boolean;
  message: string;
  onOpen: (type: "success" | "error", message: string) => void;
  onClose: () => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

type AlertProviderProps = {
  children: ReactNode;
};

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
    setState({ isOpen: false, type: "", message: "" });
  };

  const value = useMemo(
    () =>
      ({
        ...state,
        onOpen,
        onClose,
      } as AlertContextType),
    [state]
  );

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
