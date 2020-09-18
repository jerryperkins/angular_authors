import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {
  author_id: string
  single_author = {}
  
  error_message: string
  constructor(private _httpService: HttpService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe(params=> {
      console.log('here is the params', params)
      this.author_id = params.get('id')
      console.log('Here is author id', this.author_id)
    })
    this.show_single_author(this.author_id)
    this.error_message = ''
    
  }

  show_single_author(id){
    this._httpService.show_single_author(id)
    .subscribe(data => {
      console.log("Here is the single author data", data)
      this.single_author = data
    })
  }

  edit_author(id){
    this._httpService.edit_author(id, this.single_author)
    .subscribe(data => {
    console.log("here is the updated author", data)
    console.log('Here is data message', data.message)
    if (data.errors){
        this.error_message = data.message
        console.log("Here is the error", this.error_message)
      }
      else {

      this.router.navigate(['/'])
      }
    })
  }

}
