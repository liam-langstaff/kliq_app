import {Component, Input, OnInit} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {AsyncPipe, CurrencyPipe, DatePipe, NgClass} from "@angular/common";
import {DiscountType} from "../../enums/promotions";
import {ProductCodes} from "../../../shared/enums/product-codes";
import {Status} from "../../../shared/enums/status";
import {BehaviorSubject, delay, Observable, of} from "rxjs";

export interface PromotionElement {
  name: string;
  discount: {
    level: string;
    type: string;
    amount: number;
    code?: string;
  };
  endDate: Date;
  productName: string;
  status: string;
  productCode: string
}

@Component({
  selector: 'kliq-promotions-table',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    CurrencyPipe,
    DatePipe,
    NgClass,
    AsyncPipe
  ],
  providers: [
    CurrencyPipe  ],
  templateUrl: './promotions-table.component.html',
  styleUrl: './promotions-table.component.scss',
})
export class PromotionsTableComponent implements OnInit{
  displayedColumns: string[] = ['name', 'discountType', 'discountOff', 'endDate', 'products', 'status'];
  dataSource: PromotionElement[] = [];
  discountType: typeof DiscountType = DiscountType;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  @Input() data$: Observable<PromotionElement[]> = of([]);
  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit() {
    this.data$.pipe(delay(2000)).subscribe(data => {
      this.dataSource = data;
      this.isLoading$.next(false);
    })
  }

  getDiscountOffCell(element: PromotionElement) {
    if (element?.discount.type === DiscountType.FixedFee)
      return this.currencyPipe.transform(element.discount.amount, element.discount.code);
    return `${element.discount.amount} %`
  }

  getProductBadgeClass(productCode: string): string {
    let className;

    switch (productCode) {
      case ProductCodes.MealPlan:
        className = 'badge-mealplan';
        break;

      case ProductCodes.Course:
        className = 'badge-course';
        break;
      default:
          className = 'badge-course';
    }

    return className;
  }

  getStatusBadgeClass(status: string) {
    let className;

    switch (status) {
      case Status.Active:
        className = 'badge-active';
        break;

      case Status.InActive:
        className = 'badge-inactive';
        break;
      default:
        className = '';
    }

    return className;
  }
}
