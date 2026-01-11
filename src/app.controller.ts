import { Body, Controller, Post } from '@nestjs/common';
// import { AppService } from './app.service';
import { PushNotificationsService } from './push-notifications/push-notifications.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) { }
  constructor(
    private readonly pushNotificationService: PushNotificationsService,
  ) { }

  // @Get()
  // getHello() {
  //   return this.appService.getHello();
  // }

  @Post('/send-notification')
  sendNotification(@Body() body: { to: string[] }) {
    // const toTokens = ['ExponentPushToken[MmTBFTPm65DtCok11yzQrX]'];

    // this.pushNotificationService.sendNotification(toTokens);
    this.pushNotificationService.sendNotification(body.to);
  }
}
