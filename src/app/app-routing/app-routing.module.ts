import { ClientsComponent } from '../clients/clients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from '../invoices/invoices.component';
import { InvoiceFromComponent } from '../invoices/components/invoice-from/invoice-from.component';


const routes: Routes = [
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/new', component: InvoiceFromComponent },
  { path: 'invoices/:id', component: InvoiceFromComponent },
  { path: 'clients', component: ClientsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
