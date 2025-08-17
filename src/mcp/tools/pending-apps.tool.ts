import { Injectable } from '@nestjs/common';

const { Tool } = require('@modelcontextprotocol/sdk');

@Injectable()
export class ListPendingApplicationsTool extends Tool {
  constructor() {
    super({
      name: 'listPendingApplications',
      description: 'Returns pending applications',
      parameters: {},
      execute: async () => {
        // Replace this with actual service/db call
        return [
          { id: 1, applicant: 'Alice', status: 'pending' },
          { id: 2, applicant: 'Bob', status: 'pending' },
        ];
      },
    });
  }
}
