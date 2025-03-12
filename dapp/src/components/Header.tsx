import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { JsonRpcSigner } from "ethers";
import { ethers } from "ethers";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  signer: JsonRpcSigner | null;
  setSigner: Dispatch<SetStateAction<JsonRpcSigner | null>>;
}

function Header({ signer, setSigner }: HeaderProps) {
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask가 설치되어 있지 않습니다.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      setSigner(await provider.getSigner());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box as="header" bgColor="blue.100" p={4}>
      <Flex maxW={1024} mx="auto" bgColor="green.100" alignItems="center" justifyContent="space-between">
        <Flex fontSize="2xl" fontWeight="semibold" alignItems="center" gap={2} color="green.600">
          <Image src="\public\image-removebg-preview.png" maxW={20}></Image>
        </Flex>
        <Box>
          {signer ? (
            <Text bgColor="green.300" px={2} py={1} cursor="pointer" onClick={() => setSigner(null)}>
              {signer.address.substring(0, 7)}...
              {signer.address.substring(signer.address.length - 5)}
            </Text>
          ) : (
            <Button colorPalette="green" onClick={connectWallet}>
              로그인
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
