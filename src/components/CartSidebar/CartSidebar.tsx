import CartItem from "@components/CartItem";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Button from "@ui/Button";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import React from "react";

interface Props {
  onClose: () => void;
}
const CartSidebar = ({ onClose }: Props) => {
  return (
    <aside className="h-screen">
      <header className="flex flex-row items-center justify-between p-4">
        <IconButton onClick={onClose}>
          <ArrowLeftIcon className="h-6 w-6" />
        </IconButton>

        <Typography variant="h5" className="text-DARK_BLUE">
          Cart
        </Typography>

        <Button className="rounded-full border font-semibold text-gray-600">
          Clear
        </Button>
      </header>

      <div className="flex h-full flex-col justify-between gap-4 rounded-t-3xl bg-SECONDARY_DARK py-8 px-4">
        <div className="flex h-full flex-col gap-2 overflow-y-scroll scrollbar-hide">
          <CartItem />
        </div>
        <div className="rounded-3xl bg-CHECKOUT_BG p-4">
          <div className="flex flex-row items-center justify-between py-4">
            <Typography className="capitalize text-gray-400">
              Subtotal
            </Typography>
            <span className="text-gray-400">$ 25</span>
          </div>

          <div className="flex flex-row items-center justify-between pt-4 pb-6">
            <Typography className="capitalize text-gray-400">
              Delivery
            </Typography>
            <span className="text-gray-400">$ 25</span>
          </div>

          <div className="flex flex-row items-center justify-between border-t py-6">
            <Typography className="text-lg capitalize text-white">
              Total
            </Typography>
            <span className="text-gray-400">$ 25</span>
          </div>

          <Button
            fullWidth
            className="bg-MAIN_COLOR font-semibold text-white transition-colors duration-150 ease-linear hover:opacity-90"
          >
            Checkout
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default CartSidebar;
