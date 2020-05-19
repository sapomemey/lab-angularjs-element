import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './paths/home/home.module';
import { HomeComponent } from './paths/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent, children: [
          { path: 'presentation', loadChildren: () => import('./paths/presentation/presentation.module').then(m => m.PresentationModule) },
          { path: 'example', loadChildren: () => import('./paths/example/example.module').then(m => m.ExampleModule) }
        ]
      },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
