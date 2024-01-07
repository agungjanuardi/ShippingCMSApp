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
export class BillingHistoryService {
  baseUrl = environment.backendApi;
  constructor(private http: HttpClient) {}

  getBillingHistorybyUserId(userId: number): Observable<BillingHistory[]> {
    return this.http.get<BillingHistory[]>(`${this.baseUrl + URLConstant.GetListBillingHitstorybyUserId}/${userId}`);
  }
}
