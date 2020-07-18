import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataFilterService } from '../core/data-filter.service';
import { DataService } from '../core/data.service';
import { IPost, IOrder, IPagedResults } from '../shared/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  title: string;
  posts: IPost[] = [];
  filteredPosts: IPost[] = [];

  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private router: Router,
              private dataService: DataService,
              private dataFilter: DataFilterService) { }

  ngOnInit() {
    this.title = 'Posts';
    this.getPostsPage(1);
  }

  filterChanged(filterText: string) {
    if (filterText && this.posts) {
        let props = ['image', 'description', 'date'];
        this.filteredPosts = this.dataFilter.filter(this.posts, props, filterText);
    }
    else {
      this.filteredPosts = this.posts;
    }
  }

  pageChanged(page: number) {
    this.getPostsPage(page);
  }

  getPostsPage(page: number) {
    this.dataService.getPostsPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<IPost[]>) => {
          this.posts = this.filteredPosts = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getPostsPage() retrieved customers'));
  }

}
