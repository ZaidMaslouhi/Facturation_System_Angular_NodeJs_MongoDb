import { Invoice } from './../../models/invoice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../../sevices/invoice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-from',
  templateUrl: './invoice-from.component.html',
  styleUrls: ['./invoice-from.component.css']
})
export class InvoiceFromComponent implements OnInit {

  invoiceForm : FormGroup;
  invoice :Invoice;

  constructor(private fb: FormBuilder,
              private invoiceServ: InvoiceService,
              private snackBar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.createFrom();
    this.setInvoiceToFrom();
  }

  createFrom = ()=>{
    this.invoiceForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: ['', Validators.required],
      rate: '',
      tax: '',
    });
  }

  setInvoiceToFrom = ()=>{
    // Get the id of the invoice
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(!id) return;
      this.invoiceServ.getOneInvoice(id).subscribe(
        invc=>{
          this.invoice = invc;
          this.invoiceForm.patchValue(this.invoice);
        },
        _=>this.errorHandler('Failed to get the invoice !!')
      );
    });
  }


  onSubmit = ()=>{
    if(this.invoice){
      this.invoiceServ.updateInvoices(this.invoice._id,this.invoiceForm.value).subscribe(
        _=>{
          this.snackBar.open("Invoice Updated!", "Success", {duration: 3000});
          this.invoiceForm.reset();
          this.router.navigate(['invoices']);
        },
        _=>this.errorHandler('Failed to update the invoice !!')
      );
    }
    else{
      this.invoiceServ.createInvoices(this.invoiceForm.value).subscribe(
        _=>{
          this.snackBar.open("Invoice Created!", "Success", {duration: 3000});
          this.invoiceForm.reset();
          this.router.navigate(['invoices']);
        },
        _=>this.errorHandler('Failed to create the invoice !!')
      );
    }
  }

  private errorHandler = (message)=>{
    this.snackBar.open(message, 'Error', {duration: 3000});
  }


}
