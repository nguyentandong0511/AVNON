import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { shellConfig } from './app/+shell/shell.config';

bootstrapApplication(AppComponent, shellConfig).catch(err => console.error(err));