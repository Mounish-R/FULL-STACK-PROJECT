// E:\angular17_login\src\app\app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { CodeEditorComponent } from './code_editor/code-editor.component';  // Import the component

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  { path: 'admin', component: AdminSectionComponent },
  { path: 'user', component: UserSectionComponent },
  { path: 'codeEditor', component: CodeEditorComponent } // Proper route for CodeEditor
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
