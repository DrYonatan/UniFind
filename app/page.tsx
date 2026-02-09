import InfoCard from "./components/info-card";
import { infoCards } from "./content/home-info-cards";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 mx-50 my-30">
      {infoCards.map((card, index) => (
        <div
          key={index}
          className={`${index % 2 == 0 ? "self-start" : "self-end"} my-10`}
        >
          <InfoCard card={card} />
        </div>
      ))}
    </div>
  );
}
