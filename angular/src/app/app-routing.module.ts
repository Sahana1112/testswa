import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TestApisComponent } from './test-apis/test-apis.component';


const routes: Routes = [{path:'test',component: TestApisComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
