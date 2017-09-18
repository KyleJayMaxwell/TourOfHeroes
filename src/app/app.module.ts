import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//  Components
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Services
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // redirect route
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailsComponent
    }
  ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
