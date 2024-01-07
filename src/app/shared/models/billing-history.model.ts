export class BillingHistory {
    UserId: number;
    InvoiceNo: string;
    InvoiceDate: Date;
    InvoiceName: string;
    InvoiceTotal: number;
    InvoiceLink: string;

    constructor(BillingHistory) {
        {
          this.UserId = null
          this.InvoiceNo = '';
          this.InvoiceDate = null;
          this.InvoiceName = '';
          this.InvoiceTotal = 0;
          this.InvoiceLink = 'Download'
        }
    }
}