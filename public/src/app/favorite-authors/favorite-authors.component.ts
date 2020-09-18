import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.scss']
})
export class FavoriteAuthorsComponent implements OnInit {
  all_authors: []
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.show_authors()
    
  }

  show_authors(){
    this._httpService.show_authors()
    .subscribe(data => {
      console.log('Here are all the authors', data)
      this.all_authors = data
    })
  }

  delete_author(id){
    this._httpService.delete_author(id)
    .subscribe(data => {
      console.log('Here is the author being deleted', data)
      this.show_authors()
    })
  }
}
