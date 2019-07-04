import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SecretPasswordComponent } from './secret-password/secret-password.component';

// Angular uses components to build web pages and modules to basically bundle components into packages

// Here we use the NgModule Decorators, remember components ? we used the Component Decorator
// bootstrap tells which components you should recognize in the index.html, we won't add more components into this bootstrap
// But we added a new component, we need to tell that we have a new component, so we have to register it here in NgModule
// Add the new components in the declarations array
// WebPack bundles everything
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent, // <- CLI already added this
    WarningAlertComponent, LoginComponent, SecretPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
