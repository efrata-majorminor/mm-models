module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    inventory: {
        master : {
            Discount : require('./src/inventory/master/discount')
        },
        InventoryMovement: require('./src/inventory/inventory-movement'),
        Inventory: require('./src/inventory/inventory'),
        MovementInventory: require("./src/inventory/movement-inventory"),
        SummaryInventory: require("./src/inventory/summary-inventory"),
        DocumentInventory: require("./src/inventory/document-inventory"),
        TransferInDoc: require('./src/inventory/transfer-in-doc'),
        TransferInItem: require('./src/inventory/transfer-in-item'),
        TransferOutDoc: require('./src/inventory/transfer-out-doc'),
        TransferOutItem: require('./src/inventory/transfer-out-item'),
        FinishedGoodsDoc: require('./src/inventory/finished-goods-doc'),
        ExpeditionDoc: require('./src/inventory/expedition-doc'),
        AdjusmentDoc: require('./src/inventory/adjustment-doc'),
        AdjusmentItem: require('./src/inventory/adjustment-item'),
        StockOpnameDoc: require('./src/inventory/stock-opname-doc'),
        StockOpnameDocItem: require('./src/inventory/stock-opname-doc-item'),
        InventoryDocument: require("./src/inventory/inventory-document"),
        InventorySummary: require("./src/inventory/inventory-summary"),
        StockOpnameBalance : require("./src/inventory/stock-opname-balance"),
        StockOpnameProductRecord : require("./src/inventory/stock-opname-product-record"),
        StockOpnameBalanceHistory : require("./src/inventory/stock-opname-balance-history")
    },
    manufacture: {
        FabricConsumptionDocument: require('./src/manufacture/fabric-consumption-document'),
        FabricConsumptionArticle: require('./src/manufacture/fabric-consumption-article'),
        FabricConsumptionItem: require('./src/manufacture/fabric-consumption-item'),
        CostCalculationDocument: require('./src/manufacture/cost-calculation-document'),
        CostCalculationArticle: require('./src/manufacture/cost-calculation-article'),
        CostCalculationItem: require('./src/manufacture/cost-calculation-item'),
        FinishingItem: require('./src/manufacture/finishing-item'),
        Finishing: require('./src/manufacture/finishing'),
        DesignTrackingBoard: require('./src/manufacture/design-tracking-board'),
        DesignTrackingStage: require('./src/manufacture/design-tracking-stage'),
        DesignTrackingDesign: require('./src/manufacture/design-tracking-design'),
        DesignTrackingActivity: require('./src/manufacture/design-tracking-activity')
    },
    master: {
        FinishedGoods: require('./src/master/finished-goods'),
        Item: require('./src/master/item'),
        Material: require('./src/master/material'),
        Component: require('./src/master/component'),
        Module: require('./src/master/module'),
        Storage: require('./src/master/storage'),
        Supplier: require('./src/master/supplier'),
        article: {
            ArticleApproval: require('./src/master/article/article-approval'),
            ArticleBrand: require('./src/master/article/article-brand'),
            ArticleCategory: require('./src/master/article/article-category'),
            ArticleColor: require('./src/master/article/article-color'),
            ArticleCostCalculationDetail: require('./src/master/article/article-cost-calculation-detail'),
            ArticleCostCalculation: require('./src/master/article/article-cost-calculation'),
            ArticleCounter: require('./src/master/article/article-counter'),
            ArticleMaterial: require('./src/master/article/article-material'),
            ArticleMotif: require('./src/master/article/article-motif'),
            ArticleOrigin: require('./src/master/article/article-origin'),
            ArticleSeason: require('./src/master/article/article-season'),
            ArticleSize: require('./src/master/article/article-size'),
            ArticleSubCounter: require('./src/master/article/article-sub-counter'),
            ArticleTheme: require('./src/master/article/article-theme'),
            ArticleType: require('./src/master/article/article-type'),
            ArticleVariant: require('./src/master/article/article-variant'),
            Article: require('./src/master/article/article'),
            ArticleProcess: require('./src/master/article/article-process'),
            ArticleSubProcess: require('./src/master/article/article-sub-process'),
            ArticleMaterialComposition: require('./src/master/article/article-material-composition'),
            ArticleSubMaterialComposition: require('./src/master/article/article-sub-material-composition'),
            ArticleCollection: require('./src/master/article/article-collection'),
            ArticleSubCollection: require('./src/master/article/article-sub-collection'),
        },
        Bank: require('./src/master/bank'),
        CardType: require('./src/master/card-type'),
        Store: require('./src/master/store'),
        Division: require('./src/master/division'),
        Unit: require('./src/master/unit'),
        Colour: require('./src/master/colour'),
        ExpeditionService: require('./src/master/expedition-service'),
        RangeDiscProduct: require('./src/master/range-disc-product'),
        DesignTrackingReason: require('./src/master/design-tracking-reason'),
        Budget: require('./src/master/budget'),
        Category: require('./src/master/category'),
        Currency: require('./src/master/currency'),
        Product: require('./src/master/product'),
        Uom: require('./src/master/uom'),
        Buyer: require('./src/master/buyer'),
        Vat: require('./src/master/vat')
    },
    merchandiser: {
        SPK: require('./src/merchandiser/spk-doc'),
        SPKItem: require('./src/merchandiser/spk-item')
    },
    sales: {
        Sales: require('./src/sales/sales-doc'),
        SalesItem: require('./src/sales/sales-item'),
        SalesDetail: require('./src/sales/sales-detail'),
        SalesReturn: require('./src/sales/sales-return-doc'),
        SalesReturnItem: require('./src/sales/sales-return-item'),
        Promo: require('./src/sales/promo'),
        PromoCriteria: require('./src/sales/promo-criteria'),
        PromoReward: require('./src/sales/promo-reward'),
        PromoCriteriaSelectedProduct: require('./src/sales/promo-criteria-selected-product'),
        PromoRewardDiscountProduct: require('./src/sales/promo-reward-discount-product'),
        PromoCriteriaPackage: require('./src/sales/promo-criteria-package'),
        PromoRewardSpecialPrice: require('./src/sales/promo-reward-special-price')
    },
    purchasing: {
        enum: {
            PurchaseRequestStatus: require('./src/purchasing/enum/purchase-request-status-enum'),
            PurchaseOrderStatus: require('./src/purchasing/enum/purchase-order-status-enum')
        },
        PurchaseRequestItem: require('./src/purchasing/purchase-request-item'),
        PurchaseRequest: require('./src/purchasing/purchase-request'),
        PurchaseOrder: require('./src/purchasing/purchase-order'),
        PurchaseOrderItem: require('./src/purchasing/purchase-order-item'),
        PurchaseOrderExternal: require('./src/purchasing/purchase-order-external'),
        QualityStandard: require('./src/purchasing/quality-standard'),
        DeliveryOrder: require('./src/purchasing/delivery-order'),
        DeliveryOrderItem: require('./src/purchasing/delivery-order-item'),
        DeliveryOrderItemFulfillment: require('./src/purchasing/delivery-order-item-fulfillment'),
        UnitPaymentOrder: require('./src/purchasing/unit-payment-order'),
        UnitReceiptNote: require('./src/purchasing/unit-receipt-note'),
        UnitPaymentCorrectionNote: require('./src/purchasing/unit-payment-correction-note'),
        UnitPaymentCorrectionNoteItem: require('./src/purchasing/unit-payment-correction-note-item')
    },

    map: require("./src/map"),
    validator: require("./src/validator")
}
