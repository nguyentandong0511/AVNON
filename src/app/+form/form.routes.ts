import { Route } from '@angular/router';

const FORM_ROUTES: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'builder'
    },
    {
        path: 'builder',
        loadComponent: () => import('../+form/ui/builder/builder.component').then(m => m.BuilderComponent),
    },
    {
        path: 'answers',
        loadComponent: () => import('../+form/ui/answers/answers.component').then(m => m.AnswersComponent),
    },
];

export default FORM_ROUTES;
