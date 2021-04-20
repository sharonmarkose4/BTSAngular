import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SearchbugComponent } from './searchbug/searchbug.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes=[
 {path: '',component: BugFormComponent},
 {path: 'search',component: SearchbugComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BugFormComponent,
    FooterComponent,
    SearchbugComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    {enableTracing:true}
  ),
    BrowserModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
