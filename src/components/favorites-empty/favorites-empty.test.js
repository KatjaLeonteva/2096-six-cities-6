import React from 'react';
import {render} from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

it(`FavoritesEmpty should render correctly with text prop`, () => {
  const {getByText} = render(
      <FavoritesEmpty />
  );

  expect(getByText(`Nothing yet saved.`)).toBeInTheDocument();
  expect(getByText(`Save properties to narrow down search or plan your future trips.`)).toBeInTheDocument();
});
