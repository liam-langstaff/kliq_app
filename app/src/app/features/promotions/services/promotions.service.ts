import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PromotionElement} from "../components/promotions-table/promotions-table.component";

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<PromotionElement[]> {
    return this.http.get<PromotionElement[]>(`${this.baseUrl}/promotions`);
  }
}
