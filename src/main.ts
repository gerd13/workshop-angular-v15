import {bootstrapApplication} from '@angular/platform-browser';
import {PancakeReceiptsAppComponent} from './app/pancake-receipts-app/pancake-receipts-app.component';
import {provideRouter, Routes} from "@angular/router";
import {PancakeReceiptListComponent} from "./app/pancake-receipt-list/pancake-receipt-list.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: PancakeReceiptListComponent},
  {path: 'list/:id', loadComponent: () => import('./app/pancake-receipt-details/pancake-receipt-details.component')}
]


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(PancakeReceiptsAppComponent,{
  providers: [provideRouter(routes)]
})
  .catch(err => console.error(err));
