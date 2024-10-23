import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Update from "./pages/update";

const App = () => {
  return (
    <Box bg={useColorModeValue()}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />

      </Routes>
    </Box>
  );
};

export default App;
