import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const FavoritesScreen = () => {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            FavoritesScreen
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FavoritesScreen;
