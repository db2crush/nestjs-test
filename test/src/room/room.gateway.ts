import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  namespace: /group/,
})
export class RoomGateway {
  @SubscribeMessage('ABC')
  handleMessage(client: any, payload: any): string {
    return 'Message From RoomGateway';
  }

  @SubscribeMessage('ABCD')
  handleMessages(client: any, payload: any): string {
    return 'Message From RoomGateway';
  }
}
