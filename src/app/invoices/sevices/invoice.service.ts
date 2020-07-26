import { Invoice } from './../models/invoice';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Base_URL = "http://localhost:3000/api";
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoice: Invoice;
  constructor(private httpClient: HttpClient) { }

  getInvoices =  (): Observable<Invoice[]>=>
    this.httpClient.get<Invoice[]>(`${Base_URL}/invoices`)

  createInvoices = (body: Invoice): Observable<Invoice[]>=>
    this.httpClient.post<Invoice[]>(`${Base_URL}/invoices`, body)

  deleteInvoices = (id: string): Observable<Invoice[]>=>
    this.httpClient.delete<Invoice[]>(`${Base_URL}/invoices/${id}`)

  getOneInvoice = (id: string): Observable<Invoice>=>
    this.httpClient.get<Invoice>(`${Base_URL}/invoices/${id}`)

  updateInvoices = (id :string,  invoice :Invoice): any=>
    this.httpClient.put<Invoice[]>(`${Base_URL}/invoices/${id}`, invoice)



}
