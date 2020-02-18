import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
    MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';


@WebSocketGateway()
export class EventsGetWay {
    @WebSocketServer() server: Server;

    @SubscribeMessage("events")
    greet(@MessageBody() data: any) {
        return "how are you?"
    }
}