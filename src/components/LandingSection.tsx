import { Heading, Image, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting: string = "Hello, I am Pete!";
const bio1: string = "A frontend developer";
const bio2: string = "specialised in React";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <Image
        src="https://i.pravatar.cc/150?img=7"
        alt="Profile"
        borderRadius="full"
        boxSize="80px"
      />
      <Text className="greeting">{greeting}</Text>
      <Heading className="bio" size={"4xl"}>
        {bio1}
      </Heading>
      <Heading className="bio" size={"4xl"}>
        {bio2}
      </Heading>
    </FullScreenSection>
  );
};

export default LandingSection;
