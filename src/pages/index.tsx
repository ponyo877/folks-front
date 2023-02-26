import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import RoomListPage from "@/pages/RoomListPage";
import { ChakraBaseProvider } from "@chakra-ui/react";

const Home = () => {
  return (
    <ChakraBaseProvider>
      <RoomListPage/>
    </ChakraBaseProvider>
  );
};

export default Home;
