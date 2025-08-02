import { useAlertContext } from "@/context/alertContext";
import { Alert } from "./ui/alert";
import { Box } from "@chakra-ui/react";

const AlertComponent = () => {
  const { isOpen, type, message, onClose } = useAlertContext();

  if (!isOpen) return null;

  return (
    <Box position="fixed"  right="20" top="20"  zIndex="toast" >
      <Alert
        status={type}
        title={type === "success" ? "Success!" : "Error!"}
        onClose={onClose}
        position="relative"
      >
        {message}
      </Alert>
    </Box>
  );
};

export default AlertComponent;
