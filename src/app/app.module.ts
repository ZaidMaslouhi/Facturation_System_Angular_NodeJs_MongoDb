import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoices/sevices/invoice.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { InvoiceFromComponent } from './invoices/components/invoice-from/invoice-from.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    InvoicesComponent,
    ClientsComponent,
    InvoiceFromComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
