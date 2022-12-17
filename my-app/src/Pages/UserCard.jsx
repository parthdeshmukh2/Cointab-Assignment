import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const UserCard = (elem) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      boxShadow="2xl"
      p="2"
      rounded="xl"
      fontStyle='italic'
      fontFamily='cursive'
      fontWeight='700'
      fontSize='lg'
    >
      <Box w="80%" display="flex" justifyContent="center" mb='4'>
        <Image w="80%" h="200px" src={elem.picture?.large} />
      </Box>
      <Text>
        Name: {elem.name.title}. {elem.name.first} {elem.name.last}
      </Text>
      <Text>Age: {elem.dob.age} Years</Text>
      <Text>Email: {elem.email}</Text>
      <Text>Phone: {elem.cell}</Text>
      <Text>Gender: {elem.gender}</Text>
      <Text>
        Location: {elem.location.city}, {elem.location.state},{" "}
        {elem.location.country}
      </Text>
    </Box>
  );
};

export default UserCard;
