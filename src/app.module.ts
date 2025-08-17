import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { McpModule } from './mcp/mcp.module';

@Module({
  imports: [McpModule],
  controllers: [AppController],
})
export class AppModule {}
