import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountlistComponent } from './admin/adminpage/accounts/accountlist/accountlist.component';
import { AccountsComponent } from './admin/adminpage/accounts/accounts.component';
import { AddComponent } from './admin/adminpage/accounts/add/add.component';
import { EditComponent } from './admin/adminpage/accounts/edit/edit.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { ContentComponent } from './admin/adminpage/content/content.component';
import { ContentaddComponent } from './admin/adminpage/content/contentadd/contentadd.component';
import { ContenteditComponent } from './admin/adminpage/content/contentedit/contentedit.component';
import { ContentlistComponent } from './admin/adminpage/content/contentlist/contentlist.component';
import { NewsletterComponent } from './admin/adminpage/newsletter/newsletter.component';
import { SettingsComponent } from './admin/adminpage/settings/settings.component';
import { TeamaddComponent } from './admin/adminpage/teams/teamadd/teamadd.component';
import { TeamlistComponent } from './admin/adminpage/teams/teamlist/teamlist.component';
import { TeamsComponent } from './admin/adminpage/teams/teams.component';
import { TeamupdateComponent } from './admin/adminpage/teams/teamupdate/teamupdate.component';
import { ApplypageComponent } from './apply/applypage/applypage.component';
import { ArticlelistComponent } from './components/articlelist/articlelist.component';
import { ArticlepageComponent } from './components/articlelist/articlepage/articlepage.component';
import { ArticlesmultipleComponent } from './components/articlelist/articlesmultiple/articlesmultiple.component';
import { LandingComponent } from './components/landing/landing.component';

import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'apply', component: ApplypageComponent },
  {
    path: 'articles',
    component: ArticlelistComponent, children: [
      {  path: 'page/:id', component: ArticlesmultipleComponent
      }
    ]
  },
  {
    path: 'articles/:id',
    component: ArticlepageComponent,
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
            path: '',
            component: AccountlistComponent,
          },
          {
            path: 'add',
            component: AddComponent,
          },
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
          {
            path: 'add',
            component: ContentaddComponent,
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
        children: [
          {
            path: '',
            component: TeamlistComponent,
          },
          {
            path: 'add',
            component: TeamaddComponent,
          },
          {
            path: 'update',
            component: TeamupdateComponent,
          },
        ],
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
