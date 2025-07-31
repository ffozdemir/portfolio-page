import { useAlertContext } from "@/context/alertContext";
import { Alert } from "./ui/alert";

const AlertComponent = () => {
  const { isOpen, type, message } = useAlertContext();

  return (
    <Alert
      isOpen={isOpen}
      type={type}
      title={type === "success" ? "Success!" : "Error!"}
      startElement={
        type === "success" ? (
          <span role="img" aria-label="Success">
            ✅
          </span>
        ) : (
          <span role="img" aria-label="Error">
            ❌
          </span>
        )
      }
    >
      {message}
    </Alert>
  );
};

export default AlertComponent;
