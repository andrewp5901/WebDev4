import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {}

  addPost(post: Post) {
    this.http.post<Post>('http://localhost:3000/posts', post).subscribe(newPost => {
      this.posts.next([...this.posts.value, newPost]);
    });
  }
  
  getPosts() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe(posts => {
      this.posts.next(posts);
    });
    return this.posts.asObservable();
  }
}