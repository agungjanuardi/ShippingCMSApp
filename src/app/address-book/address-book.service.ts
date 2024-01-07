import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLConstant } from "app/shared/constant/UrlConstant";
import { AccountCredit } from "app/shared/models/account-credit.model";
import { Address } from "app/shared/models/address.model";
import { BillingHistory } from "app/shared/models/billing-history.model";
import { environment } from "environments/environment";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class AddressBookService {
  baseUrl = environment.backendApi;
  constructor(private http: HttpClient) {}

  getAddressBookbyUserId(userId: number): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl + URLConstant.GetListAddressbyUserId}/${userId}`);
  }
}
