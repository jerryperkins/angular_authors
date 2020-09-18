import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  new_author = {}
  error_message: string
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.new_author = {name: ""}
    this.error_message = ""
  }

  add_author(){
    this._httpService.add_author(this.new_author)
    .subscribe(data => {
      console.log('Here is the author being added', data)
      this.new_author = {name: ""}
      if (data.errors){
        this.error_message = data.message
      }
      else {
        this.router.navigate(['/'])
      }
    })
  }
}
