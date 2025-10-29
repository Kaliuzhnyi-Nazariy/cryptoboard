import CreateWalletButton from "./wallet/CreateWalletButton";
import MyWallet from "./wallet/MyWallet";

const Page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MyWallet />
      <CreateWalletButton />
    </div>
  );
};

export default Page;
