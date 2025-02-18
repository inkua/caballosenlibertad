"use client";

import NotFoundPage from './not-found.jsx';

export default function ErrorPage({ statusCode }) {
  if (statusCode === 404) {
    return <NotFoundPage />;
  }

  

  return (
    <div>
      <h1>Ocurrió un error inesperado.</h1>
    </div>
  );
}
