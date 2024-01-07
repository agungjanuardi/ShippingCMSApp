import { Component, OnInit, TemplateRef, inject } from "@angular/core";
import { BillingHistoryService } from "./billing-history.service";
import { BillingHistory } from "app/shared/models/billing-history.model";
import { AccountCredit } from "app/shared/models/account-credit.model";
import { FormArrayName, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NavigationConstant } from "app/shared/constant/NavigationConstant";

@Component({
  selector: "app-billing-history",
  templateUrl: "./billing-history.component.html",
  styleUrls: ["./billing-history.component.scss"]
})
export class BillingHistoryComponent implements OnInit {
  
  InvoiceNo: string;
  InvoiceDate: string;
  InvoiceName: string;
  InvoiceTotal: string;
  invoiceSearch: any;
  UserId: number;
  page = 1;
  pageSize = 6;
  BillingHistoryList: BillingHistory[] = [];
  totalList: number;
  pageSizes = [6, 10, 15, 20];
  templist = [];
  order: string = '';
  key: string = 'InvoiceNo';
  reverse: boolean = false;
  isDataReady:boolean = false;

	closeResult = '';

  constructor(private billingHistoryService: BillingHistoryService, private router: Router) {
    
  }

  async ngOnInit() {
    await this.getBillingHistory();
  }

  async getBillingHistory() {
    this.billingHistoryService
      .getBillingHistorybyUserId(this.UserId)
      .toPromise()
      .then((res) => {
        this.BillingHistoryList = res;
      });

    //dev only
    this.dataDevOnly();

    if (this.BillingHistoryList.length > 0)
    {
      this.isDataReady = true;
    }
  }

  onChangeSize()
  {
    this.page = 1;
    console.log("OK")
  }

  invoiceFilter()
  {
    console.log(this.invoiceSearch);
    if (this.invoiceSearch == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.BillingHistoryList = this.BillingHistoryList.filter(res => {
        return res.InvoiceNo.toLocaleLowerCase().match(this.invoiceSearch.toLocaleLowerCase());
      });
    }
  }

  sort(key)
  {
    this.key = key;
    this.reverse = !this.reverse;
  }

  showFilter()
  {
    
  }

  btnDashboard()
  {
    this.router.navigateByUrl(NavigationConstant.Dashboard);
  }

  dataDevOnly(){
    this.BillingHistoryList =
    [
      {UserId: null, InvoiceNo: "XXXXX", InvoiceDate: null, InvoiceName: "Gunawan", InvoiceTotal: 100, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "ZZZZZ", InvoiceDate: null, InvoiceName: "Satria", InvoiceTotal: 400, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "YYYYY", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 200, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "MMMMM", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 500, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "XXXXX", InvoiceDate: null, InvoiceName: "Gunawan", InvoiceTotal: 100, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "ZZZZZ", InvoiceDate: null, InvoiceName: "Satria", InvoiceTotal: 400, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "YYYYY", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 200, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "MMMMM", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 500, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "XXXXX", InvoiceDate: null, InvoiceName: "Gunawan", InvoiceTotal: 100, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "ZZZZZ", InvoiceDate: null, InvoiceName: "Satria", InvoiceTotal: 400, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "YYYYY", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 200, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "MMMMM", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 500, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "XXXXX", InvoiceDate: null, InvoiceName: "Gunawan", InvoiceTotal: 100, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "ZZZZZ", InvoiceDate: null, InvoiceName: "Satria", InvoiceTotal: 400, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "YYYYY", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 200, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "MMMMM", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 500, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "XXXXX", InvoiceDate: null, InvoiceName: "Gunawan", InvoiceTotal: 100, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "ZZZZZ", InvoiceDate: null, InvoiceName: "Satria", InvoiceTotal: 400, InvoiceLink: "Download"}, 
      {UserId: null, InvoiceNo: "YYYYY", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 200, InvoiceLink: "Download"},
      {UserId: null, InvoiceNo: "LLLLL", InvoiceDate: null, InvoiceName: "Dana", InvoiceTotal: 500, InvoiceLink: "Download"}
    ];
  }
}
