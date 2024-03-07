import { Component } from '@angular/core';
import {PromotionElement, PromotionsTableComponent} from "../../components/promotions-table/promotions-table.component";
import {BehaviorSubject, Observable} from "rxjs";
import {PromotionsService} from "../../services/promotions.service";

@Component({
  selector: 'kliq-promotions',
  standalone: true,
  imports: [
    PromotionsTableComponent
  ],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {
  promotionalData$: BehaviorSubject<PromotionElement[]> = new BehaviorSubject<PromotionElement[]>([])
  constructor(private _promotionsService: PromotionsService) {
      this._promotionsService.getPromotions().subscribe(res => {
        this.promotionalData$.next(res)
      })
  }
}
