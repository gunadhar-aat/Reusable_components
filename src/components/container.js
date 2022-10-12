import { useMediaQuery } from "@chakra-ui/react";
import { Text, Box, Heading } from "@chakra-ui/react";
import Table from "./table";
import Card from "./card";
export default function Container() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <>
      <Box>
        <Heading as="h4" size="lg" p={4}>
          User Data
        </Heading>
      </Box>
      {/* <Text>{!isLargerThan1280 ? <Table /> : <Card />}</Text> */}
      <Table />
    </>
  );
}
