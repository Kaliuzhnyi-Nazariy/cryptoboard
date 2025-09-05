import Image from "next/image";
import { Coin } from "./type";

const CoinListItem = ({ coin }: { coin: Coin }) => {
  return (
    <li className="px-4 py-3 flex rounded-[6px] border border-[var(--black20)] justify-between">
      <div className="flex gap-3">
        <div className="relative size-10 min-[768px]:size-6">
          <Image src={coin.image} alt={""} fill className="object-center" />
        </div>
        <div className="mts flex flex-col items-start">
          <p>{coin.name}</p>
          <h5 className="text-[var(--black80)]">{coin.symbol}</h5>
        </div>
      </div>
      <p className="mts">${coin.current_price}</p>
    </li>
  );
};

export default CoinListItem;
