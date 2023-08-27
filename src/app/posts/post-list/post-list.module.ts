import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list.component';
import { PostsRoutingModule } from '../posts-routing.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    PostsRoutingModule,
  ],
})
export class PostListModule {}
