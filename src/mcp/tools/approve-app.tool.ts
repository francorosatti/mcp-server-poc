import { Injectable } from '@nestjs/common';

const { Tool } = require('@modelcontextprotocol/sdk');

@Injectable()
export class ApproveApplicationTool extends Tool {
  constructor() {
    super({
      name: 'approveApplication',
      description: 'Approve a pending application by ID',
      parameters: { id: 'number' },
      execute: async (params) => {
        // Replace this with your service call
        return { success: true, application: { id: params.id, status: 'approved' } };
      },
    });
  }
}
