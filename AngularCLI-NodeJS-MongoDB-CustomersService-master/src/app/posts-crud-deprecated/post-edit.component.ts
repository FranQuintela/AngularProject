import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import { IPost, IState } from '../shared/interfaces';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements OnInit {

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
              private dataService: DataService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getPost(id);
    }

  }

  getPost(id: string) {
      this.dataService.getPost(id)
        .subscribe((post: IPost) => {
          this.post = post;
        },
        (err: any) => console.log(err));
  }


  submit() {

      if (this.post._id) {

        this.dataService.updatePost(this.post)
          .subscribe((post: IPost) => {
            if (post) {
              this.router.navigate(['/posts']);
            } else {
              this.errorMessage = 'Unable to save post';
            }
          },
          (err: any) => console.log(err));

      } else {

        this.dataService.insertPost(this.post)
          .subscribe((post: IPost) => {
            if (post) {
              this.router.navigate(['/posts']);
            }
            else {
              this.errorMessage = 'Unable to add post';
            }
          },
          (err: any) => console.log(err));

      }
  }

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
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
