import { Module, OnModuleInit } from '@nestjs/common';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import * as dotenv from 'dotenv';

dotenv.config();

@Module({})
export class McpModule implements OnModuleInit {
  async onModuleInit() {
    const server = new McpServer({
      name: "demo-mcp-server",
      version: "1.0.0",
    });

    server.registerTool("add",
      {
        title: "Addition Tool",
        description: "Add two numbers",
        inputSchema: { a: z.number(), b: z.number() }
      },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a + b) }]
      })
    );
    
    server.registerTool(
      'sayHello',
      {
        description: 'Returns a greeting for the provided name',
        inputSchema: {
          name: z.string().describe("The name to greet"),
        },
      },
      async ({ name }) => {
        return { content: [{ type: 'text', text: `Hello, ${name} from NestJS MCP!` }] };
      },
    );

    const transport = new StdioServerTransport();
    await server.connect(transport);
  }
}

