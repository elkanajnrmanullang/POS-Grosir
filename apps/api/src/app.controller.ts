import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@pos-grosir/shared';

@Controller('api')
export class AppController {
  @Get('ping')
  getPing(): ApiResponse<string> {
    return {
      success: true,
      message: 'Backend API is live and connected!',
      data: new Date().toISOString(),
    };
  }
}