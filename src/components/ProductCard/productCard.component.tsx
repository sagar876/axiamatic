import {
  StyledAddIcon,
  StyledProductCard,
  StyledProductImage,
  StyledRemoveIcon,
} from "./productCard.styles";
import { ProductProps } from "./productCard.type";
import React from "react";
import plus from "../../assets/plus.svg";
import cross from "../../assets/x.svg";
export const ProductCard = (props: ProductProps) => {
  const { image, title } = props;
  return (
    <StyledProductCard className="col-md-6">
      <div>
        {Object.keys(props).length ? (
          <>
            <StyledRemoveIcon>
              <img alt="prd-img" src={cross} />
              <span>Remove</span>
            </StyledRemoveIcon>

            <StyledProductImage>
              <img alt="prd-img" src={image} />
              <h5>{title}</h5>
            </StyledProductImage>
          </>
        ) : (
          <StyledAddIcon>
            <img alt="plus-icon " src={plus} />
          </StyledAddIcon>
        )}
      </div>
    </StyledProductCard>
  );
};
