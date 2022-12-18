import React from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
 


const navigate = useNavigate();


const getData = () => {
    axios.get("http://localhost:8080/getall")
    .then((res)=> {
        console.log(res.data);
        alert("Data Added To the User Account")
    })
    .catch((err)=> console.log(err));
}
  
  const deleteData = () => {
    axios.delete("http://localhost:8080/delete")
    .then((res)=> alert("Data will be deleted Permenantly"))
    .catch((err)=> console.log(err));
  }
 


  return (
    <Box
      w={{ base: "90%", md: "60%", lg: "30%" }}
      display="flex"
      flexDirection="column"
      m="auto"
      mt="16"
      bg="gray"
      p="5"
      rounded="xl"
      boxShadow="xl"
    >
      <Button mt="4" bg="green" color="white" onClick={getData}>
        Fetch
      </Button>
      <Button mt="4" bg="red" color="white" onClick={deleteData}>
        Delete
      </Button>
      <Button mt="4" bg="blue.500" color="white" onClick={()=> navigate('/user')}>
        Users
      </Button>
    </Box>
  );
};

export default HomePage;
