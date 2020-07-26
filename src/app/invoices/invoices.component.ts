import { Invoice } from './models/invoice';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from './sevices/invoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})

export class InvoicesComponent implements OnInit {

  displayedColumns: string[] = ['item', 'date', 'due', 'qty', 'rate', 'tax', 'actions'];
  dataSource = new MatTableDataSource<Invoice> ();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
            private invoiveSrvice:InvoiceService,
            private snackBar: MatSnackBar,
            private route: Router) { }

  ngOnInit() {
    this.invoiveSrvice.getInvoices().subscribe(
      (data)=>{
        this.dataSource = new MatTableDataSource<Invoice> (data),
        this.dataSource.paginator = this.paginator;
      },
      (err)=>this.snackBar.open("Failed to get Invoices!!", 'Error', {
        duration: 3000
      })
    );
  }

  routeToNew = ()=> this.route.navigate(['invoices/new']);

  routeToEdit = (id: string)=> this.route.navigate([`invoices/${id}`])

  deleteBtnHandler = (id: string)=>{
    this.invoiveSrvice.deleteInvoices(id).subscribe(
      _=>{
        this.snackBar.open("Invoice Deleted!", "Success", {
          duration: 3000,
        });
        this.ngOnInit();
      },
      _=>this.snackBar.open("Failed to delete Invoice!!", 'Error', {
        duration: 3000
      })
    );
  }



}
