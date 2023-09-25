import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { shellRoutes } from './shell.routes';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';

export const shellConfig: ApplicationConfig = {
    providers: [
        provideRouter(shellRoutes),
        provideAnimations(),
        importProvidersFrom([]),
        provideAnimations(),
    ],
};
