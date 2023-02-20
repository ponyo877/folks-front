import { Image, Box } from "@chakra-ui/react";
import Room from "../type/Room"

const RoomCard = (props: { room: Room }) => {

  return (
    <Box bg={props.room.image} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={props.room.image} />
    </Box>
  );
};

export default RoomCard;
