import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={"text-white sm:my-20 sm:mt-14 my-6 flex items-center justify-between flex-wrap gap-2"}>
    {stats.map((stat) => (
      <div key={stat.id} className="flex gap-4 items-center w-80">
        <h4 className=" text-4xl ss:text-5xl font-poppins font-semibold">{stat.value}</h4>
        <p className="text-gradient text-base ss:text-xl font-poppins">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
