import { Box, Select } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserCard from "../Components/UserCard";
import axios from "axios";
const UserProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => setData(res.data[0].Data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <Box>
   
   
    <Box
      display="grid"
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="4"
      w="80%"
      m="auto"
    >
      {data.length > 0 &&
        data.map((elem) => <UserCard key={elem.id} {...elem} />)}
    </Box>
    </Box>
  );
};

export default UserProfile;
