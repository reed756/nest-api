import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts/posts.controller';
import { PostsService } from './posts/posts/posts.service';
import { PostsModule } from './posts/posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
