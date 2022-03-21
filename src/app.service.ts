import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getUser() {
    // simulate returning empty user
    return null;
  }

  async getAppointments(userEmail: string) {
    console.log(userEmail);
  }

  async getData() {
    throw new BadRequestException(
      'This will not be caught and will crash the server',
    );
  }

  async crashServer() {
    const userData = await Promise.allSettled([this.getUser()]);

    const user = userData[0].status === 'fulfilled' ? userData[0].value : null;

    const asyncData = await Promise.allSettled([
      this.getData(),
      this.getAppointments(user.email),
    ]);
    console.log(asyncData);
  }
}
