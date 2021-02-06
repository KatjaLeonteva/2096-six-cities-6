import React from 'react';
import {useParams} from 'react-router-dom';
import Header from "../header/header";

const RoomScreen = () => {
  const {id} = useParams();

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__container container">
            RoomScreen: {id}
          </div>
        </section>
      </main>
    </div>
  );

};

export default RoomScreen;
