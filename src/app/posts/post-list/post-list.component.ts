import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  isLoggedIn: boolean = false;
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (this.isLoggedIn) {
      this.http
        .get('https://jsonplaceholder.typicode.com/posts')
        .subscribe((data: any) => {
          this.posts = data;
        });
    }
  }
}
