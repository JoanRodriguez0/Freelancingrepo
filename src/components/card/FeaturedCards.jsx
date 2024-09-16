import { CONSTANTS } from "../utils/Constants";
import FeaturedCard from "./FeaturedCard";

export function FeaturedCards() {
  return (
    <div className="pt-10 px-4 md:mx-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        { CONSTANTS.OVERVIEW.featureCards.map( (item, i) => (
          <FeaturedCard
            key={i}
            icon={
              <div className={`rounded-full bg-amber-${400 + i*100} p-3.5 dark:bg-amber-${500 + i*100}`}>
                <item.icon className="h-5 w-5 text-white" />
              </div>
            }
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
