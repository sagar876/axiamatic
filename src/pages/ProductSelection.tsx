import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/productCard.component";
import { products, placeholders } from "../data/products";
import { SearchBox } from "../components/SearchBox/searchBox.component";
import { ProductsList } from "../components/ProductsList/productsList.component";
import {
  ProductSelectionWrapper,
  SelectProducts,
  ProductInfoBox,
  SelectProductsRow,
  InfoButton,
} from "./global.styles";
import "bootstrap/dist/css/bootstrap.css";
import { ProductProps } from "../components/ProductCard/productCard.type";

const ProductSelection = () => {
  const [selectedProducts, setSelectedProducts] = useState(placeholders);
  const [searchData, setSearchData] = useState([]);
  const [isListOpen, setListOpen] = useState(false);
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const availableProductsArray = [] as any;
    const searchValue = e.target.value;
    products.forEach((item) => {
      if (
        item?.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        searchValue.length > 0
      ) {
        availableProductsArray.push(item);
        return;
      }
    });
    setSearchData(availableProductsArray);
  };

  const onSelection = (product: ProductProps) => {
    const productsArray = [...selectedProducts] as any;
    selectedProducts.some((item, idx) => {
      if (Object.keys(item).length === 0) {
        productsArray[idx] = product;
        return true;
      }
    });
    onListClose();
    setSelectedProducts(productsArray);
  };

  const onNextClick = async () => {
    ///Save to backend via API
    // const payload = selectedProducts;
    // Post API call with payload
    // try {
    //   const result = await services.setProducts({payload});
    //   console.log('Response => ', result);
    // } catch (err) {}
  };

  useEffect(() => {
    if (searchData.length) {
      setListOpen(true);
    } else {
      setListOpen(false);
    }
  }, [searchData]);

  const onListClose = () => {
    setListOpen(false);
  };

  const onRemove = () => {};

  return (
    <ProductSelectionWrapper className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <SelectProducts className="col-md-5">
          <SelectProductsRow className="row">
            {selectedProducts.map((item, idx) => (
              <ProductCard {...item} />
            ))}
          </SelectProductsRow>
        </SelectProducts>
        <div className="col-md-2"></div>
        <ProductInfoBox className="col-md-5 position-relative">
          <InfoButton>1 of 3</InfoButton>
          <h4>Let's add your internal tools</h4>
          <h5>
            Search to quickly add products your team uses today.<br></br>
            You will be able to add as many as you need later but for now let's
            add four.
          </h5>
          <SearchBox onChange={onSearch} />
          {isListOpen ? (
            <ProductsList
              data={searchData}
              onClick={(item) => onSelection(item as ProductProps) as any}
            />
          ) : null}
          <button className="next-btn" onClick={onNextClick}>
            Next
          </button>
        </ProductInfoBox>
      </div>
    </ProductSelectionWrapper>
  );
};

export default ProductSelection;
