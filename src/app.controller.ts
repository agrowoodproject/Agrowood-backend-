import { Controller, Get, Post, Body } from '@nestjs/common';

let leads = [];

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return 'Agrowood API Running';
  }

  @Post('leads')
  createLead(@Body() body) {
    const lead = {
      ...body,
      createdAt: new Date(),
    };

    leads.push(lead);

    return {
      message: 'Lead saved',
      data: lead,
    };
  }

  @Get('leads')
  getLeads() {
    return leads;
  }
}