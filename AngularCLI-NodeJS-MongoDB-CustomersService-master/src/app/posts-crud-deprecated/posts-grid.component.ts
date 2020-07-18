import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IPost } from '../shared/interfaces';
import { Sorter } from '../core/sorter';
import { TrackByService } from '../core/trackby.service';

@Component({
  selector: 'app-posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrls: ['./posts-grid.component.css'],
  //When using OnPush detectors, then the framework will check an OnPush
  //component when any of its input properties changes, when it fires
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsGridComponent implements OnInit {

  @Input() posts: IPost[] = [];

  constructor(private sorter: Sorter, public trackby: TrackByService) { }

  ngOnInit() {

  }

  sort(prop: string) {
      this.sorter.sort(this.posts, prop);
  }

}
