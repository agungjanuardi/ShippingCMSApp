import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLConstant } from "app/shared/constant/UrlConstant";
import { AccountCredit } from "app/shared/models/account-credit.model";
import { BillingHistory } from "app/shared/models/billing-history.model";
import { environment } from "environments/environment";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class CreditInformationService {
  baseUrl = environment.backendApi;
  constructor(private http: HttpClient) {}

  getAccountCredit(userId: number): Observable<AccountCredit> {
    return this.http.get<AccountCredit>(`${this.baseUrl + URLConstant.GetAccountCredit}/${userId}`);
  }
}
