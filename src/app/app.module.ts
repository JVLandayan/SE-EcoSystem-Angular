import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TeamComponent } from './components/team/team.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ApplyComponent } from './components/apply/apply.component';
import { ContactComponent } from './components/contact/contact.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatSliderModule } from '@angular/material/slider';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { AccountsComponent } from './admin/adminpage/accounts/accounts.component';
import { ContentComponent } from './admin/adminpage/content/content.component';
import { TeamsComponent } from './admin/adminpage/teams/teams.component';
import { NewsletterComponent } from './admin/adminpage/newsletter/newsletter.component';
import { SettingsComponent } from './admin/adminpage/settings/settings.component';
import { ArticlelistComponent } from './components/articlelist/articlelist.component';
import { ArticlepageComponent } from './components/articlelist/articlepage/articlepage.component';
import { EditComponent } from './admin/adminpage/accounts/edit/edit.component';
import { ContentlistComponent } from './admin/adminpage/content/contentlist/contentlist.component';
import { ContenteditComponent } from './admin/adminpage/content/contentedit/contentedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    ArticlesComponent,
    TeamComponent,
    ProjectsComponent,
    ApplyComponent,
    ContactComponent,
    SubscriptionComponent,
    NavbarComponent,
    LandingComponent,
    LoginpageComponent,
    AdminpageComponent,
    AccountsComponent,
    ContentComponent,
    TeamsComponent,
    NewsletterComponent,
    SettingsComponent,
    ArticlelistComponent,
    ArticlepageComponent,
    EditComponent,
    ContentlistComponent,
    ContenteditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, MatSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
