import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { SettingPage } from './setting/setting.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{
    path: 'login',
    component : LoginPage
  },
  {
    path: 'home',
    component : HomePage
  },
  
  {
    path: 'setting',
    component : SettingPage
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
