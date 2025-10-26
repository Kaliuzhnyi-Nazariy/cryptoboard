import Image from "next/image";
import { Coin } from "./type";
import { SquareArrowDown, SquareArrowUp, SquareMinus } from "lucide-react";

const CoinListItem = ({ coin }: { coin: Coin }) => {
  const percent = () => {
    if (coin.price_change_percentage_24h > 0) {
      return (
        <p className="mts text-[var(--success100)] font-semibold flex gap-1">
          <SquareArrowUp />
          <span>+{coin.price_change_percentage_24h.toFixed(2)}%</span>
        </p>
      );
    } else if (coin.price_change_percentage_24h < 0) {
      return (
        <p className="mts text-[var(--error100)] font-semibold flex gap-1">
          <SquareArrowDown />
          <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
        </p>
      );
    } else {
      return (
        <p className="mts font-semibold flex gap-1">
          <SquareMinus />
          <span>0%</span>
        </p>
      );
    }
  };

  return (
    <>
      <li className="px-4 py-3 flex rounded-[6px] border border-[var(--black20)] justify-between min-[768px]:hidden ">
        <div className="flex gap-3 items-center">
          <div className="relative size-10 min-[768px]:size-6">
            <Image src={coin.image} alt={""} fill className="object-center" />
          </div>
          <div className="mts flex flex-col items-start ">
            <p className="overflow-ellipsis w-3/5 overflow-hidden text-nowrap">
              {coin.name}
            </p>
            <h5 className="text-[var(--black80)]">{coin.symbol}</h5>
          </div>
        </div>
        <div className="">
          <p className="mts">${coin.current_price.toFixed(2)}</p>
          <>{percent()}</>
        </div>
      </li>
      <li className="hidden min-[768px]:grid min-[768px]:grid-cols-4 px-2 py-3">
        <div className="flex gap-3 col-start-1 justify-self-start overflow-hidden overflow-ellipsis w-full h-full ">
          <div className="relative size-10 min-[768px]:size-6">
            <Image src={coin.image} alt={""} fill className="object-center" />
          </div>
          <p className="mts font-semibold overflow-hidden overflow-ellipsis w-3/5 text-nowrap">
            {coin.name}
          </p>
        </div>
        <p className="mts col-start-2 self-center  h-full w-full justify-self-start">
          ${coin.current_price.toFixed(2)}
        </p>
        <div className="col-start-3 self-center  h-full w-full justify-self-start">
          {percent()}
        </div>
        <div className="col-start-4 self-center  h-full w-full justify-self-start">
          {percent()}
        </div>
      </li>
    </>
  );
};

export default CoinListItem;

{
  /* <li className="flex min-[768px]:grid min-[768px]:grid-cols-[repeat(1fr,4)]">
        <div className="flex gap-3 col-end-1 justify-self-start">
          <div className="relative size-10 min-[768px]:size-6">
            <Image src={coin.image} alt={""} fill className="object-center" />
          </div>
          <p className="mts font-semibold">{coin.name}</p>
        </div>
        <p className="mts col-end-2 justify-self-start">
          ${coin.current_price.toFixed(2)}
        </p>
        <div className="col-end-3 justify-self-start">{percent()}</div>
        <div className="col-end-4 justify-self-start">{percent()}</div>
      </li> */
}

// outline outline-fuchsia-600
// outline outline-fuchsia-600
// outline outline-fuchsia-600
