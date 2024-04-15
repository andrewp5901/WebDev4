import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription | undefined;

  constructor(public postService: PostService) {}

  ngOnInit() {
    // Assign the subscription to postsSub
    this.postsSub = this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    // Check if postsSub exists and then unsubscribe to prevent memory leaks
    if (this.postsSub) {
      this.postsSub.unsubscribe();
    }
  }
}
