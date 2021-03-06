import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Own modules
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

// Own components
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
