import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Box, Flex, IconButton, Input, VStack, HStack, Text, Container, Spacer, Link } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaHome, FaList, FaTags, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <VStack as="nav" spacing={4} align="stretch" p={4} bg="gray.100" height="100vh" width="250px">
      <Link href="#" display="flex" alignItems="center">
        <FaHome />
        <Text ml={2}>Home</Text>
      </Link>
      <Link href="#" display="flex" alignItems="center">
        <FaList />
        <Text ml={2}>Categories</Text>
      </Link>
      <Link href="#" display="flex" alignItems="center">
        <FaTags />
        <Text ml={2}>Deals</Text>
      </Link>
      <Link href="#" display="flex" alignItems="center">
        <FaUser />
        <Text ml={2}>Profile</Text>
      </Link>
    </VStack>
  );
};

const Navbar = ({ toggleSidebar }) => {
  return (
    <Flex as="header" p={4} bg="blue.500" color="white" alignItems="center">
      <IconButton aria-label="Menu" icon={<FaBars />} onClick={toggleSidebar} />
      <Text fontSize="2xl" fontWeight="bold" ml={4}>
        E-Commerce
      </Text>
      <Spacer />
      <HStack spacing={4}>
        <Input placeholder="Search products" bg="white" color="black" />
        <IconButton aria-label="Search" icon={<FaSearch />} />
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
      </HStack>
    </Flex>
  );
};

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Flex>
      {isSidebarOpen && <Sidebar />}
      <Box flex="1">
        <Navbar toggleSidebar={toggleSidebar} />
        <Container maxW="container.xl" p={4}>
          <Text fontSize="2xl">Welcome to our E-Commerce Site</Text>
          <Text>Browse our categories and find the best deals!</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;
