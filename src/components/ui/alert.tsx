import { Alert as ChakraAlert, CloseButton } from "@chakra-ui/react";
import * as React from "react";

export interface AlertProps extends Omit<ChakraAlert.RootProps, "title"> {
  title?: React.ReactNode;
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    const { title, children, onClose, ...rest } = props;
    return (
      <ChakraAlert.Root ref={ref} {...rest}>
        <ChakraAlert.Indicator />
        <ChakraAlert.Content>
          <ChakraAlert.Title>{title}</ChakraAlert.Title>
          <ChakraAlert.Description>{children}</ChakraAlert.Description>
          <CloseButton
            position="absolute"
            right="2"
            top="2"
            size="sm"
            aria-label="Close"
            onClick={onClose}
          />
        </ChakraAlert.Content>
      </ChakraAlert.Root>
    );
  }
);
