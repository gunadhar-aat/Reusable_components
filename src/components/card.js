import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function Card(props) {
  return (
    <>
      {props?.data?.map((item) => {
        return (
          <SimpleGrid>
            <Box
              maxW={"320px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              m="auto"
            >
              <Stack
                columns={2}
                mt={6}
                direction={"row"}
                spacing={4}
                align={"center"}
              >
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {"Name :"}
                </Text>
                <Text fontSize={"sm"} fontFamily={"body"}>
                  {item?.username}
                </Text>
              </Stack>
              <Stack
                columns={2}
                mt={6}
                direction={"row"}
                spacing={4}
                align={"center"}
              >
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {"Email :"}
                </Text>
                <Text fontSize={"sm"} fontFamily={"body"}>
                  {item?.email}
                </Text>
              </Stack>
              <Stack
                columns={2}
                mt={6}
                direction={"row"}
                spacing={4}
                align={"center"}
              >
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {"Adderess :"}
                </Text>
                <Text fontSize={"sm"} fontFamily={"body"}>
                  {item?.address}
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        );
      })}
    </>
  );
}
