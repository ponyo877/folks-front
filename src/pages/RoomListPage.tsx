import { FC } from "react";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Room from "./type/Room";
import RoomCard from "./components/RoomCard";

const initRoomList: Room[] = [
  {
    name: "ルーム1",
    image: "https://picsum.photos/400/200?random=1",
    roomURL: "https://www.yahoo.co.jp/",
  },
  {
    name: "ルーム2",
    image: "https://picsum.photos/400/200?random=2",
    roomURL: "https://www.yahoo.co.jp/",
  },
  {
    name: "ルーム3",
    image: "https://picsum.photos/400/200?random=3",
    roomURL: "https://www.yahoo.co.jp/",
  },
  {
    name: "ルーム4",
    image: "https://picsum.photos/400/200?random=4",
    roomURL: "https://www.yahoo.co.jp/",
  },
  {
    name: "ルーム5",
    image: "https://picsum.photos/400/200?random=5",
    roomURL: "https://www.yahoo.co.jp/",
  },
  {
    name: "ルーム6",
    image: "https://picsum.photos/400/200?random=6",
    roomURL: "https://www.yahoo.co.jp/",
  },
];

const RoomListPage: FC = () => {
  return (
    <Flex m="10" justify="center" alignItems="center">
      <Wrap justify="center">
        {initRoomList.map((_room) => (
          <WrapItem key={_room.name}>
            <RoomCard room={_room} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default RoomListPage;
