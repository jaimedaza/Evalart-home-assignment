import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { FeaturesPage } from "./components/FeaturesPage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <FeaturesPage />
    </Box>
  </ChakraProvider>
);
