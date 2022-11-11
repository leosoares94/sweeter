import React from "react";
import { Avatar, ChakraProvider, Tag, TagLabel } from "@chakra-ui/react";

interface BadgeTypes {
  type: string;
  value: string;
}

const Badge = ({ type, value }: BadgeTypes) => {
  return (
    <ChakraProvider>
      <Tag
        size="md"
        colorScheme={type === "mention" ? "purple" : "red"}
        borderRadius="full"
      >
        <TagLabel>
          {type === "mention" ? "@" : "#"}
          {value}
        </TagLabel>
      </Tag>
    </ChakraProvider>
  );
};

export default Badge;
