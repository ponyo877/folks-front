import {
  IconButton,
  Heading,
  Flex,
  Image,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import Link from "next/link";
import { DragHandleIcon } from "@chakra-ui/icons";
import Room from "../type/Room";

const RoomCard = (props: { room: Room }) => {
  return (
    <Link href={props.room.roomURL}>
      <Card maxW="md" bg="gray.100" borderRadius="lg">
        <CardHeader>
          <Flex m="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Heading size="2xl">{props.room.name}</Heading>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<DragHandleIcon />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Image
            objectFit="cover"
            src={props.room.image}
            alt={props.room.name}
            borderRadius="lg"
          />
        </CardBody>
      </Card>
    </Link>
  );
};

export default RoomCard;
