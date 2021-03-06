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
import { HomeComponent } from './home/home.component';
const appRoutes: Routes=[
 {path: '',component: HomeComponent},
 {path: 'create',component: BugFormComponent},
 {path: 'search',component: SearchbugComponent},
 {path: 'update/:id',component: BugFormComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BugFormComponent,
    FooterComponent,
    SearchbugComponent,
    HomeComponent,
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
