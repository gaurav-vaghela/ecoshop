export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  features: string[];
  specs: ProductSpecs;
  onSale?: boolean;
  salePrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CategoryData {
  name: string;
  subcategories: string[];
}

export interface WishlistState {
  items: Product[];
}