import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm} from '@angular/forms';

import { Post } from "../post.model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent: string = '';
  enteredTitle:string = '';
  //emits post out
  @Output() postCreated = new EventEmitter<Post>();


  onAddPost(form: NgForm){
    if (form.invalid){return};
    const post: Post = {
       title: form.value.title,
      content: form.value.content};
      //passes the post as argument
      this.postCreated.emit(post);
  }
}
