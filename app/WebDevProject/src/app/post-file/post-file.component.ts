import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-file',
  standalone: true,
  imports: [],
  templateUrl: './post-file.component.html',
  styleUrl: './post-file.component.css'
})
export class PostFileComponent {
  constructor(private postService: PostService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return; // Prevent submission if form is invalid
    }
    const post: Post = {title: form.value.title, content: form.value.content};
    this.postService.addPost(form.value);
    form.resetForm(); // Reset the form after submission
  }
}