import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  isLoggedIn: boolean = false;
  id: number | undefined;
  post: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (this.isLoggedIn) {
      this.route.params.subscribe((params) => {
        this.id = +params['id'];
        if (this.id) {
          this.http
            .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .subscribe((data: any) => {
              this.post = data;
            });
        }
      });
    }
  }

  goToPostList() {
    this.router.navigate(['/posts']);
  }
}
