import { Box, Heading, Text } from "@chakra-ui/react";

function Category() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Category Page
      </Heading>
      <Box>
        <Heading as="h2" size="md" mb={3}>
          Cart
        </Heading>
        <Text>Your cart is currently empty.</Text>
      </Box>
    </Box>
  );
}

export default Category;
