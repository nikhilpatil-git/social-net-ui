import { Box, Button, Grid, Heading, List, ListItem, SimpleGrid, Text } from "@chakra-ui/core";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FetchFriends, FetchSuggestedFriends, User } from "../util";
import { UserAction, UserState } from "./action_state";
import { ShowFriends } from "./friends";
import { UserReducerContext, UserStateContext } from '../pages/index';
import axios from "axios";

const ResponseMessage = ({...props}) => {

  const dispatch: React.Dispatch<UserAction> = useContext(UserReducerContext);

  const fetchFriends = async (id: number) => {
    let friends  = await FetchFriends(id);
    dispatch({type:"ServerResponse", status: true, result: friends as User[]}) 
  }

  const fetchSuggestedFriends = async (id: number) => {
    let friends  = await FetchSuggestedFriends(id);
    dispatch({type:"ServerResponse", status: true, result: friends as User[]}) 
  }

  if (props.data) {
    return props.data.map((user: User, index: number) => 
      <ListItem key={index}>
      <Grid
        templateRows="50px"
        templateColumns="100px 100px 150px 150px"
        columnGap="10px"
      >
        <Text>{user.name}</Text>
        <Text>{user.city}</Text>
        <Button variantColor="green" onClick={() => fetchFriends(index+1)}>Show Friends</Button>
        <Button variantColor="green" onClick={() => fetchSuggestedFriends(index+1)}>Suggest Friends</Button>
      </Grid>
    </ListItem>
    );
  }

  return <Text mt={4}>No Data Found</Text>;
};

export const Main = () => {
  const userData: User[] = [
    { name: "Nikhil", city: "Dublin" },
    { name: "Nikhil", city: "Dublin" },
  ];
  const [data, setData] = useState<User[]>(userData);

  const state: UserState = useContext(UserStateContext);

  useEffect(() => {
    if(state){
      console.log(state);
    }
  });
  
  useEffect(() => {
    fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(
      (result) => {
          var users = [];
          result._embedded.users.map((d) => users.push({
            name: d.name,
            city: d.city
          }));
          setData(users);
      },
      (error) => {
        console.log(error);
      }
    )
  }, []);


  return (
    <>
      <ShowFriends />
      <Heading as="h4" size="md" mb="5">
        Users
      </Heading>
      <List styleType="none">
          <ResponseMessage data={data}  />
      </List>
    </>
  );
};
