import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  namespace: /group/,
})
export class UserGateway {
  @SubscribeMessage('ABC')
  handleMessage(client: any, payload: any): string {
    return 'Message From UserGateway';
  }
}
