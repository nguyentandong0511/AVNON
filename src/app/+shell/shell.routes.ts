import { Route } from '@angular/router';
import { FormComponent } from '../+form/ui/form.component';

export const shellRoutes: Route[] = [
    {
        path: '',
        component: FormComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'form'
            },
            {
                path: 'form',
                loadChildren: () => import('../../app/+form/form.routes'),
            }
        ],
    }
];
