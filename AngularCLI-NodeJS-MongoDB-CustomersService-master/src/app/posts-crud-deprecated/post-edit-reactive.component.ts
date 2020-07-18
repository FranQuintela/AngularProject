import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../core/data.service';
import { IPost, IState } from '../shared/interfaces';
import { ValidationService } from '../shared/validation.service';

@Component({
  selector: 'app-post-edit-reactive',
  templateUrl: './post-edit-reactive.component.html'
})
export class PostEditReactiveComponent implements OnInit {

  postForm: FormGroup;
  post: IPost = {
    image: '',
    description: '',
    date: ''
  };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getPost(id);
    }

    this.buildForm();
  }

  getPost(id: string) {
      this.dataService.getPost(id)
        .subscribe((post: IPost) => {
          this.post = post;
          this.buildForm();
        },
        (err) => console.log(err));
  }

  buildForm() {
      this.postForm = this.formBuilder.group({
        image:  [this.post.image, Validators.required],
        description:   [this.post.description, Validators.required],
        date:     [this.post.date, Validators.required],
      });
  }


  submit({ value, valid }: { value: IPost, valid: boolean }) {

      value._id = this.post._id;


      if (value._id) {

        this.dataService.updatePost(value)
          .subscribe((post: IPost) => {
            if (post) {
              this.router.navigate(['/posts']);
            }
            else {
              this.errorMessage = 'Unable to save post';
            }
          },
          (err) => console.log(err));

      } else {

        this.dataService.insertPost(value)
          .subscribe((post: IPost) => {
            if (post) {
              this.router.navigate(['/posts']);
            }
            else {
              this.errorMessage = 'Unable to add post';
            }
          },
          (err) => console.log(err));

      }
  }

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/posts']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deletePost(this.post._id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/posts']);
          }
          else {
            this.errorMessage = 'Unable to delete post';
          }
        },
        (err) => console.log(err));
  }

}
