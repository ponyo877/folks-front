import { FC } from "react"
import { Wrap, WrapItem } from "@chakra-ui/react";
import Room from "./type/Room"
import RoomCard from "./components/RoomCard"

const initRoomList: Room[] = [
    {
        name: "ルーム1",
        image: "https://picsum.photos/400/200?random=1",
    },
    {
        name: "ルーム2",
        image: "https://picsum.photos/400/200?random=2",
    },
    {
        name: "ルーム3",
        image: "https://picsum.photos/400/200?random=3",
    },
    {
        name: "ルーム4",
        image: "https://picsum.photos/400/200?random=4",
    },
    {
        name: "ルーム5",
        image: "https://picsum.photos/400/200?random=5",
    },
    {
        name: "ルーム6",
        image: "https://picsum.photos/400/200?random=6",
    },
]

const RoomListPage: FC = () => {
    return (
        <Wrap>
            {initRoomList.map(_room => (
                <WrapItem key={_room.name}>
                    <RoomCard room={_room}/>
                </WrapItem>
            ))}
        </Wrap>
    )
}
  
export default RoomListPage;