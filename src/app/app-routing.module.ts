import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NowComponent } from './components/now/now.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
    {path: 'now', component: NowComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
