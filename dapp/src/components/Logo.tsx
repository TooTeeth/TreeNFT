import { Flex, Image } from "@chakra-ui/react";

interface LogoProps {
  fontSize?: string;
}

function Logo({ fontSize = "2xl" }: LogoProps) {
  return (
    <Flex fontSize={fontSize} fontWeight="semibold" alignItems="center" gap={2} color="green.600">
      <Image src="\public\image-removebg-preview.png" maxW={20}></Image>
    </Flex>
  );
}

export default Logo;
