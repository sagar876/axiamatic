import { StyledProductsList } from "./productsList.styles";
import React from "react";
import { ProductListProps } from "./productList.type";

export const ProductsList = (props: ProductListProps) => {
  const { data, onClick } = props;
  return (
    <StyledProductsList>
      <ul>
        {data?.map((item) => {
          return (
            <li onClick={() => onClick(item)}>
              <span><img src={item?.image}/></span>
              <span>{item?.title}</span>
            </li>
          );
        })}
      </ul>
    </StyledProductsList>
  );
};
