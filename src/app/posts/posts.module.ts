import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsRoutingModule } from './posts-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PostListComponent, PostDetailsComponent],
  imports: [CommonModule, PostsRoutingModule, MatInputModule, MatButtonModule],
})
export class PostsModule {}
