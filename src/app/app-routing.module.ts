import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './admin/adminpage/accounts/accounts.component';
import { EditComponent } from './admin/adminpage/accounts/edit/edit.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { ContentComponent } from './admin/adminpage/content/content.component';
import { ContenteditComponent } from './admin/adminpage/content/contentedit/contentedit.component';
import { ContentlistComponent } from './admin/adminpage/content/contentlist/contentlist.component';
import { NewsletterComponent } from './admin/adminpage/newsletter/newsletter.component';
import { SettingsComponent } from './admin/adminpage/settings/settings.component';
import { TeamsComponent } from './admin/adminpage/teams/teams.component';
import { ArticlelistComponent } from './components/articlelist/articlelist.component';
import { ArticlepageComponent } from './components/articlelist/articlepage/articlepage.component';
import { LandingComponent } from './components/landing/landing.component';

import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  {
    path: 'articles/:id',
    component: ArticlepageComponent,
  },
  {
    path: 'articles',
    component: ArticlelistComponent,
  },
  {
    path: 'authpanel',
    component: AdminpageComponent,
    children: [
      {
        path: 'accounts',
        component: AccountsComponent,
        children: [
          {
            path: 'edit',
            component: EditComponent,
          },
        ],
      },
      {
        path: 'content',
        component: ContentComponent,
        children: [
          {
            path: '',
            component: ContentlistComponent,
          },
          {
            path: 'edit',
            component: ContenteditComponent,
          },
        ],
      },
      {
        path: 'newsletter',
        component: NewsletterComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
