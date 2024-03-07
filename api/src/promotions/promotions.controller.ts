import {Controller, Get} from '@nestjs/common';

export enum DiscountType {
    Percentage = 'percentage',
    FixedFee = 'fixed'
}


interface PromotionElement {
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


const ELEMENT_DATA: PromotionElement[] = [
    {
        name: 'Platinum Subscription',
        discount: {
            level: 'Premium',
            type: DiscountType.FixedFee,
            amount: 100,
            code: 'USD'
        },
        endDate: new Date('2026-05-28'),
        productName: 'Course',
        status: 'inactive',
        productCode: 'kq200'
    },
    {
        name: 'Gold Subscription',
        discount: {
            level: 'Gift',
            type: DiscountType.Percentage,
            amount: 25,
            code: 'CAD'
        },
        endDate: new Date('2024-04-30'),
        productName: 'Meal plan',
        status: 'active',
        productCode: 'kq100'
    },
    {
        name: 'Silver Subscription',
        discount: {
            level: 'Premium',
            type: DiscountType.FixedFee,
            amount: 30,
            code: 'EUR'
        },
        endDate: new Date('2023-09-12'),
        productName: 'Course',
        status: 'inactive',
        productCode: 'kq200'
    },
    {
        name: 'Bronze Subscription',
        discount: {
            level: 'Gift',
            type: DiscountType.Percentage,
            amount: 15,
            code: 'AUD'
        },
        endDate: new Date('2024-03-18'),
        productName: 'Meal plan',
        status: 'active',
        productCode: 'kq100'
    },
    {
        name: 'Diamond Subscription',
        discount: {
            level: 'Premium',
            type: DiscountType.FixedFee,
            amount: 60,
            code: 'GBP'
        },
        endDate: new Date('2025-12-19'),
        productName: 'Course',
        status: 'inactive',
        productCode: 'kq200'
    },
    {
        name: 'Ruby Subscription',
        discount: {
            level: 'Gift',
            type: DiscountType.Percentage,
            amount: 30,
            code: 'JPY'
        },
        endDate: new Date('2023-08-15'),
        productName: 'Meal plan',
        status: 'active',
        productCode: 'kq100'
    },
    {
        name: 'Emerald Subscription',
        discount: {
            level: 'Premium',
            type: DiscountType.FixedFee,
            amount: 70,
            code: 'GBP'
        },
        endDate: new Date('2025-07-07'),
        productName: 'Course',
        status: 'inactive',
        productCode: 'kq200'
    },
    {
        name: 'Sapphire Subscription',
        discount: {
            level: 'Gift',
            type: DiscountType.Percentage,
            amount: 20,
            code: 'SEK'
        },
        endDate: new Date('2024-06-06'),
        productName: 'Meal plan',
        status: 'active',
        productCode: 'kq100'
    }
];

@Controller('promotions')
export class PromotionsController {
    @Get()
    getPromotions() {
        return ELEMENT_DATA.sort(() => Math.random() - 0.5);
    }
}
