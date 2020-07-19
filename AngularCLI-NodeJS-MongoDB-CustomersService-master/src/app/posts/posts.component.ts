import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataFilterService } from '../core/data-filter.service';
import { DataService } from '../core/data.service';
import { IPost, IOrder, IPagedResults } from '../shared/interfaces';
import { Sorter } from '../core/sorter';
import { TrackByService } from '../core/trackby.service';

import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from '../modals/my-modal/my-modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']

})
export class PostsComponent implements OnInit {

  title: string;
  imageUrl: string = "../../assets/images/";
  posts: IPost[] = [];
  filteredPosts: IPost[] = [];


  city: string;
  name: string;
  food_from_modal: string;


  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private router: Router,
              private dataService: DataService,
              private dataFilter: DataFilterService,
              private sorter: Sorter, public trackby: TrackByService,
              public dialog: MatDialog) { }

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

  sort(prop: string) {
    this.sorter.sort(this.posts, prop);
}
  styleImages(isEven: boolean) {
    if(!isEven){
      return {
        'position': 'relative',
        'left': '60px'
    };
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px',
      data: { name: this.name, animal: this.city }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.city = result;
      this.food_from_modal = result.food;
    });
  }

}
