import React from "react";
import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="whiteAlpha.900"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack padding={5} alignItems="flex-start">
        <Heading as="h3" size="md" color={"black"}>
          {title}
        </Heading>
        <Text color={"gray.500"}>{description}</Text>
        <Center gap={2} cursor="pointer">
          <Text
            color={"blackAlpha.800"}
            justifyContent="center"
            alignItems="center"
          >
            See More
          </Text>
          <FaArrowRight color="black" />
        </Center>
      </VStack>
    </VStack>
  );
};

export default Card;
