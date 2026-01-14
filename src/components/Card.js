import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      borderRadius="xl"
      cursor="pointer"
      overflow="hidden"
      paddingBottom={4}
      _hover={{ transform: "scale(1.02)", shadow: "xl" }}
      transition="all 0.2s"
    >
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <VStack spacing={4} padding={4} alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack onClick={() => alert("See more clicked")} _hover={{ color: "teal.500" }}>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
