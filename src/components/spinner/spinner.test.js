import React from 'react';
import {render} from '@testing-library/react';
import Spinner from './spinner';


describe(`Spinner should render correctly`, () => {
  it(`Spinner should render correctly without text prop`, () => {
    const {getByText} = render(
        <Spinner />
    );

    const textElement = getByText(`Loading...`);

    expect(textElement).toBeInTheDocument();
  });

  it(`Spinner should render correctly with text prop`, () => {
    const {getByText} = render(
        <Spinner text={`Please wait...`} />
    );

    const textElement = getByText(`Please wait...`);

    expect(textElement).toBeInTheDocument();
  });
});
