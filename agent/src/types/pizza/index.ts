export enum ToppingCategory {
    CHEESE = "CHEESE",
    MEAT = "MEAT",
    VEGETABLE = "VEGETABLE",
    HERB = "HERB",
    SEAFOOD = "SEAFOOD",
    OIL = "OIL"
}

export enum PizzaSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE",
}

export enum CrustType {
    NEAPOLITAN = "NEAPOLITAN",
    THIN = "THIN",
    REGULAR = "REGULAR",
    THICK = "THICK",
    STUFFED = "STUFFED"
}

export enum SauceType {
    TOMATO = "TOMATO",
    WHITE = "WHITE",
    MARINARA = "MARINARA",
    GARLIC_OIL = "GARLIC_OIL",
    NONE = "NONE"
}

export type Topping = {
    id: string;
    name: string;
    price: number;
    category: "MEAT" | "VEGETABLE" | "CHEESE" | "SPECIAL";
    isAvailable: boolean;
}

export type Pizza = {
    id: string;
    size: PizzaSize;
    crustType: CrustType;
    sauce: SauceType;
    toppings: Topping[];
    extraCheese: boolean;
    instructions?: string;
    price: number;
}

export type CustomerInfo = {
    id: string;
    name: string;
    phone: string;
    email?: string;
    address?: DeliveryAddress;
}

export type DeliveryAddress = {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    instructions?: string;
}

export enum OrderType {
    PICKUP = "PICKUP",
    DELIVERY = "DELIVERY",
    DINE_IN = "DINE_IN"
}

export enum OrderStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    PREPARING = "PREPARING",
    READY = "READY",
    IN_DELIVERY = "IN_DELIVERY",
    DELIVERED = "DELIVERED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export type Order = {
    id: string;
    customer: CustomerInfo;
    pizzas: Pizza[];
    orderType: OrderType;
    status: OrderStatus;
    totalPrice: number;
    tax: number;
    tip?: number;
    deliveryFee?: number;
    createdAt: Date;
    estimatedDeliveryTime?: Date;
    specialInstructions?: string;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
}

export enum PaymentMethod {
    CASH = "CASH",
    CREDIT_CARD = "CREDIT_CARD",
    DEBIT_CARD = "DEBIT_CARD",
    DIGITAL_WALLET = "DIGITAL_WALLET"
}

export enum PaymentStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
}

// Customer-related types
export enum CustomerType {
    NEW = "NEW",
    REGULAR = "REGULAR",
    VIP = "VIP",
    BLACKLISTED = "BLACKLISTED"
}

export type CustomerPreferences = {
    favoriteOrders: string[];
    dietaryRestrictions?: string[];
    preferredCrust: CrustType;
    preferredSize: PizzaSize;
    spicePreference?: "MILD" | "MEDIUM" | "HOT";
    allergies?: string[];
    preferredOrderType: OrderType;
    preferredPaymentMethod: PaymentMethod;
}

export type CustomerHistory = {
    totalOrders: number;
    totalSpent: number;
    averageOrderValue: number;
    lastOrderDate: Date;
    cancelledOrders: number;
    loyaltyPoints: number;
    memberSince: Date;
}

// Order tracking and kitchen states
export enum KitchenStatus {
    QUEUED = "QUEUED",
    PREPPING_DOUGH = "PREPPING_DOUGH",
    ADDING_TOPPINGS = "ADDING_TOPPINGS",
    IN_OVEN = "IN_OVEN",
    QUALITY_CHECK = "QUALITY_CHECK",
    BOXING = "BOXING",
    READY_FOR_PICKUP = "READY_FOR_PICKUP",
    READY_FOR_DELIVERY = "READY_FOR_DELIVERY"
}

export type KitchenTimer = {
    startTime: Date;
    estimatedCompletionTime: Date;
    actualCompletionTime?: Date;
    stage: KitchenStatus;
    assignedChef?: string;
}

export type DeliveryInfo = {
    driverId?: string;
    estimatedArrival: Date;
    actualDeliveryTime?: Date;
    deliveryNotes?: string;
    currentLocation?: {
        lat: number;
        lng: number;
    };
    deliveryStatus: "ASSIGNED" | "PICKED_UP" | "IN_TRANSIT" | "DELIVERED" | "FAILED";
    contactlessDelivery: boolean;
}

// Order management
export type OrderModification = {
    orderId: string;
    modifiedAt: Date;
    originalDetails: Partial<Order>;
    newDetails: Partial<Order>;
    reason?: string;
    approvedBy?: string;
}

export type RefundRequest = {
    orderId: string;
    requestDate: Date;
    reason: string;
    amount: number;
    status: "PENDING" | "APPROVED" | "REJECTED" | "PROCESSED";
    processedBy?: string;
    processedAt?: Date;
}

// Loyalty and promotions
export type LoyaltyProgram = {
    customerId: string;
    points: number;
    tier: "BRONZE" | "SILVER" | "GOLD" | "PLATINUM";
    pointsToNextTier: number;
    benefits: string[];
    expiryDate?: Date;
}

export type Promotion = {
    id: string;
    code: string;
    type: "PERCENTAGE" | "FIXED_AMOUNT" | "FREE_ITEM" | "BOGO";
    value: number;
    minimumOrder?: number;
    startDate: Date;
    endDate: Date;
    usageLimit?: number;
    usageCount: number;
    applicablePizzas?: string[];
    restrictions?: string[];
}

// Extended Order type with new fields
export interface ExtendedOrder extends Order {
    kitchenStatus: KitchenTimer;
    deliveryInfo?: DeliveryInfo;
    promotion?: Promotion;
    modifications?: OrderModification[];
    refundRequest?: RefundRequest;
    customerLoyaltyEarned?: number;
    qualityCheck?: {
        checkedBy: string;
        temperature: number;
        appearance: "PERFECT" | "GOOD" | "NEEDS_REMAKE";
        notes?: string;
    };
}

// Store management
export type StoreStatus = {
    isOpen: boolean;
    currentWaitTime: number;
    availableDrivers: number;
    ovenCapacity: number;
    ingredientAlerts: string[];
    activeOrders: number;
    emergencyMode: boolean;
    weatherImpact?: "NONE" | "DELAYED" | "CLOSED";
}



export const DefaultToppings = {
    // Cheeses
    MOZZARELLA: { id: "mozz", name: "Mozzarella di Bufala", category: ToppingCategory.CHEESE, price: 3.00 },
    PARMIGIANO: { id: "parm", name: "Parmigiano-Reggiano", category: ToppingCategory.CHEESE, price: 2.50 },
    GORGONZOLA: { id: "gorg", name: "Gorgonzola", category: ToppingCategory.CHEESE, price: 3.00 },
    
    // Meats
    PROSCIUTTO: { id: "prosc", name: "Prosciutto di Parma", category: ToppingCategory.MEAT, price: 4.00 },
    SALAMI: { id: "salami", name: "Salami Piccante", category: ToppingCategory.MEAT, price: 3.50 },
    ANCHOVIES: { id: "anch", name: "Acciughe", category: ToppingCategory.SEAFOOD, price: 3.00 },
    
    // Vegetables
    BASIL: { id: "basil", name: "Basilico Fresco", category: ToppingCategory.HERB, price: 1.00 },
    TOMATOES: { id: "tom", name: "Pomodori San Marzano", category: ToppingCategory.VEGETABLE, price: 2.00 },
    ARUGULA: { id: "arug", name: "Rucola", category: ToppingCategory.VEGETABLE, price: 2.00 },
    MUSHROOMS: { id: "mush", name: "Funghi Porcini", category: ToppingCategory.VEGETABLE, price: 3.00 },
    OLIVES: { id: "olives", name: "Olive Nere", category: ToppingCategory.VEGETABLE, price: 2.00 },
    
    // Oils & Specialties
    OLIVE_OIL: { id: "oil", name: "Olio d'Oliva Extra Vergine", category: ToppingCategory.OIL, price: 1.00 },
    TRUFFLE_OIL: { id: "truffle", name: "Olio al Tartufo", category: ToppingCategory.OIL, price: 5.00 }
} as const;

export const TraditionalPizzas = {
    MARGHERITA: {
        id: "marg",
        name: "Margherita",
        description: "The classic Neapolitan pizza with San Marzano tomatoes, buffalo mozzarella, fresh basil, and olive oil",
        toppings: [
            DefaultToppings.TOMATOES,
            DefaultToppings.MOZZARELLA,
            DefaultToppings.BASIL,
            DefaultToppings.OLIVE_OIL
        ],
        isDoc: true // Denominazione di Origine Controllata
    },

    MARINARA: {
        id: "mar",
        name: "Marinara",
        description: "The oldest pizza variety: tomatoes, garlic, oregano, and olive oil",
        toppings: [
            DefaultToppings.TOMATOES,
            DefaultToppings.OLIVE_OIL
        ]
    },

    QUATTRO_FORMAGGI: {
        id: "4formaggi",
        name: "Quattro Formaggi",
        description: "Four cheese pizza with mozzarella, gorgonzola, parmesan, and fontina",
        toppings: [
            DefaultToppings.MOZZARELLA,
            DefaultToppings.GORGONZOLA,
            DefaultToppings.PARMIGIANO
        ]
    },

    PROSCIUTTO_E_RUCOLA: {
        id: "prosc_ruc",
        name: "Prosciutto e Rucola",
        description: "Pizza with prosciutto di Parma, fresh arugula, and shaved parmesan",
        toppings: [
            DefaultToppings.MOZZARELLA,
            DefaultToppings.PROSCIUTTO,
            DefaultToppings.ARUGULA,
            DefaultToppings.PARMIGIANO
        ]
    },

    DIAVOLA: {
        id: "diav",
        name: "Diavola",
        description: "Spicy salami pizza with tomato sauce and mozzarella",
        toppings: [
            DefaultToppings.TOMATOES,
            DefaultToppings.MOZZARELLA,
            DefaultToppings.SALAMI
        ]
    },

    NAPOLI: {
        id: "nap",
        name: "Napoli",
        description: "Traditional Neapolitan pizza with anchovies, olives, and capers",
        toppings: [
            DefaultToppings.TOMATOES,
            DefaultToppings.MOZZARELLA,
            DefaultToppings.ANCHOVIES,
            DefaultToppings.OLIVES
        ]
    },

    FUNGHI: {
        id: "funghi",
        name: "Funghi",
        description: "Mushroom pizza with fresh porcini and truffle oil",
        toppings: [
            DefaultToppings.MOZZARELLA,
            DefaultToppings.MUSHROOMS,
            DefaultToppings.TRUFFLE_OIL
        ]
    }
} as const;

export type TraditionalPizza = {
    id: string;
    name: string;
    description: string;
    toppings: typeof DefaultToppings[keyof typeof DefaultToppings][];
    isDoc?: boolean;
}

export type ToppingType = typeof DefaultToppings[keyof typeof DefaultToppings]; 