import { Component, Input } from '@angular/core';

import { Post } from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   {title: "First", content: "contentz"},
  //   {title: "Second", content: "some contentz"},
  //   {title: "Third", content: "moar contentz"}
  //   ]
  @ Input() posts: Post[] = [];

}

