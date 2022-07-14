import { AuthGuard } from 'shared/guard/auth.guard';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

const routes: Routes =[
    { path: '', redirectTo: 'auth/log', pathMatch: 'full' },
    { path: 'index',component: ComponentsComponent, canActivate:[AuthGuard],data:{roles:['d_rh']} },
    {path: 'auth',
      loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
     },
     { path: 'test',                component: TestComponent },

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{useHash:true})
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
