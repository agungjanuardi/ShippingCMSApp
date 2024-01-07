import { Component, OnInit } from '@angular/core';
import { AccountCredit } from 'app/shared/models/account-credit.model';
import { CreditInformationService } from './credit-information.service';
import { getLocaleNumberSymbol } from '@angular/common';

@Component({
  selector: 'app-credit-information',
  templateUrl: './credit-information.component.html',
  styleUrls: ['./credit-information.component.scss']
})
export class CreditInformationComponent implements OnInit {

  UserId: number;
  AccountCredit: AccountCredit;
  
  constructor(private creditInformationService: CreditInformationService) { }

  async ngOnInit(){
    await this.getAccountCredit();
  }

  async getAccountCredit() {
    this.creditInformationService
      .getAccountCredit(this.UserId)
      .toPromise()
      .then((res) => {
        this.AccountCredit = res;
      });

      this.dataDevOnly();
  }

  dataDevOnly(){
    this.AccountCredit =
    {
      UserId: 228967,
      AccountName: 'John Doe',
      AccountBalance: '100000'
    }
  }

}
