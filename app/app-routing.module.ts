// In app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFileComponent } from './post-file/post-file.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'add-post', component: PostFileComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' } // Redirect to posts by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
