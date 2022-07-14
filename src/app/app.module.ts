import { UserService } from './../shared/services/user.service';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'shared/guard/auth.guard';
import { AuthInterceptor } from 'shared/guard/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule,
        AuthModule,
    ],
    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass:AuthInterceptor,
            multi:true
        },
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
