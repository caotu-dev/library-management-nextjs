import BestSelling from "../components/BestSelling";
import MostPopular from "../components/MostPopular";
import NewCommer from "../components/NewCommer";

const BookModule: React.FC<{}> = () => {
  return (
    <section className="p-4">
      <BestSelling />
      <MostPopular />
      <NewCommer />
    </section>
  );
};

export default BookModule;
