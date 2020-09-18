import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { FavoriteAuthorsComponent } from './favorite-authors/favorite-authors.component';


const routes: Routes = [
  {path: '', component: FavoriteAuthorsComponent},
  {path: 'new', component: AddAuthorComponent},
  {path: 'edit/:id', component: EditAuthorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
