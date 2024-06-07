"use client";

import HorizontalList from "../components/HorizontalList";

const BookModule: React.FC<{}> = () => {
  return (
    <section className="p-4">
      <HorizontalList title={`Best selling`} subject={`love`} />
      <HorizontalList title={`Most popular`} subject={`fiction`} />
      <HorizontalList title={`New commer`} subject={`history`} />
    </section>
  );
};

export default BookModule;
