import { ProductProps } from "../ProductCard/productCard.type";

export type ProductListProps = {
    data: ProductProps[];
    onClick: (item: {}) => Promise<void> | any
}