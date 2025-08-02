import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({
  children,
  isDarkBackground,
  ...boxProps
}: {
  children: React.ReactNode;
  isDarkBackground?: boolean;
} & React.ComponentProps<typeof VStack>) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
