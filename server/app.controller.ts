import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { NextRequest, NextResponse } from 'next/server';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
    getHello() {
        return this.appService.getHello();
  }
}
