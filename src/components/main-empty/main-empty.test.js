import React from 'react';
import {render} from '@testing-library/react';
import MainEmpty from './main-empty';
import {Cities} from '../../const';


it(`MainEmpty should render correctly`, () => {
  const {getByText} = render(
      <MainEmpty activeCity={Cities.PARIS} />
  );

  const statusElement = getByText(`No places to stay available`);
  const descElement = getByText(`We could not find any property available at the moment in ${Cities.PARIS}`);

  expect(statusElement).toBeInTheDocument();
  expect(descElement).toBeInTheDocument();
});
