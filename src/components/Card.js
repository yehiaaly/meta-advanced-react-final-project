import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack>
      <Image src={imageSrc} alt={title} />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack cursor="pointer" onClick={() => alert("See more clicked")}>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
      </HStack>
    </VStack>
  );
};

export default Card;
