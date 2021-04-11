import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import {FaWallet} from 'react-icons/fa';
import {GiReceiveMoney,GiPayMoney } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  ProductsSection,
  ProductsWrapper,
  ProductsHeading,
  ProductsContainer,
  ProductsCard,
  ProductsCardInfo,
  ProductsCardIcon,
  ProductsCardPlan,
  // ProductsCardCost,
  // ProductsCardLength,
  ProductsCardFeatures,
  ProductsCardFeature
} from './Products.elements';

function Products() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ProductsSection>
        <ProductsWrapper>
          <ProductsHeading>Our Products</ProductsHeading>
          <ProductsContainer>
            <ProductsCard to='/sign-up'>
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <GiReceiveMoney />
                </ProductsCardIcon>
                <ProductsCardPlan>Buy </ProductsCardPlan>
                {/* <ProductsCardCost>$99.99</ProductsCardCost> */}
                {/* <ProductsCardLength>per month</ProductsCardLength> */}
                <ProductsCardFeatures>
                  <ProductsCardFeature>100 New Users</ProductsCardFeature>
                  <ProductsCardFeature>$10,000 Budget</ProductsCardFeature>
                  <ProductsCardFeature>Retargeting analytics</ProductsCardFeature>
                </ProductsCardFeatures>
                <Button primary>Get Started</Button>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to='/sign-up'>
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <FaWallet />
                </ProductsCardIcon>
                <ProductsCardPlan>Wallet </ProductsCardPlan>
                {/* <ProductsCardCost>$299.99</ProductsCardCost> */}
                {/* <ProductsCardLength>per month</ProductsCardLength> */}
                <ProductsCardFeatures>
                  <ProductsCardFeature>1000 New Users</ProductsCardFeature>
                  <ProductsCardFeature>$50,000 Budget</ProductsCardFeature>
                  <ProductsCardFeature>Lead Gen Analytics</ProductsCardFeature>
                </ProductsCardFeatures>
                <Button primary>Get Started</Button>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to='/sign-up'>
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <GiPayMoney />
                </ProductsCardIcon>
                <ProductsCardPlan>Sell </ProductsCardPlan>
                {/* <ProductsCardCost>$999.99</ProductsCardCost> */}
                {/* <ProductsCardLength>per month</ProductsCardLength> */}
                <ProductsCardFeatures>
                  <ProductsCardFeature>Unlimited Users</ProductsCardFeature>
                  <ProductsCardFeature>Unlimited Budget</ProductsCardFeature>
                  <ProductsCardFeature>24/7 Support</ProductsCardFeature>
                </ProductsCardFeatures>
                <Button primary>Get Started</Button>
              </ProductsCardInfo>
            </ProductsCard>
          </ProductsContainer>
        </ProductsWrapper>
      </ProductsSection>
    </IconContext.Provider>
  );
}
export default Products;