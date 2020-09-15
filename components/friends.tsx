import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Grid, ListItem, List } from "@chakra-ui/core";
import React, { useContext, useState } from "react";
import { UserReducerContext, UserStateContext } from "../pages";
import { User } from "../util";
import { UserAction, UserState } from "./action_state";

const ResponseMessage = ({...props}) => {

  if (props.data) {
    return props.data.map((user: User, index: number) => 
      <ListItem key={index}>
      <Grid
        templateRows="50px"
        templateColumns="100px 100px"
        columnGap="10px"
      >
        <Text>{user.name}</Text>
        <Text>{user.city}</Text>
      </Grid>
    </ListItem>
    );
  }
}

export const ShowFriends = () => {
    const state: UserState = useContext(UserStateContext);
    const [open, setOpen] =  useState(state.isResponseAvailable);
    const dispatch: React.Dispatch<UserAction> = useContext(UserReducerContext);

    return (
      <>
      <Modal isOpen={state.isResponseAvailable}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Friends</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <List styleType="none">
             <ResponseMessage data={state.serverResponse}  />
           </List>
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={() => {
                dispatch({ type: "ServerResponse", status: false, result: []})
            }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    );
}