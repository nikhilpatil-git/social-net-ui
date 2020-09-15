import { Box, Grid } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import LoadingOverlay from "react-loading-overlay";
import { Main } from "../components/main";


export const Layout = () => {

const [isLoading, setIsLoading] = useState(true);
const [isResponseAvailable, setIsResponseAvailable] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(() => !isLoading);
        }, 4000);
      },[]);

      return (<LoadingOverlay active={isLoading} spinner text="Loading your content...">
      <Box height="100vh" bg="#F2F3F5">
        <Grid
          paddingTop={["20px", "30px", "40px", "80px"]}
          templateRows="100px auto"
          justifyContent="center"
        >
          <Header />      
          <Main /> 
        </Grid>
      </Box>
      </LoadingOverlay>);
}