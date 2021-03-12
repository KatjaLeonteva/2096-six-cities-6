import React from 'react';
import {render} from '@testing-library/react';
import OfferGallery from './offer-gallery';
import {offerAdapted} from '../../store/offer/test-mocks';

it(`OfferGallery should render correctly`, () => {
  const {container} = render(
      <OfferGallery images={offerAdapted.images} />
  );

  expect(container).toMatchSnapshot();
});
