import { createContext, useContext, useEffect, useState } from "react";
import { DataThree } from "../AllData";
import Shoppingcart from "../Shoppingcart";
import Favorite from "../Favorit";
import toast from "react-hot-toast";

export const contextCart = createContext({});

//check if we have data in localstorge for cart and favorit list
const intialvalue = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const itialfavo = localStorage.getItem("favo")
  ? JSON.parse(localStorage.getItem("favo"))
  : [];

const Maincontext = ({ children }) => {
  const [favo, setFavo] = useState(itialfavo);
  const [cart, setCart] = useState(intialvalue);
  const [Cartstatus, setCartstatus] = useState(false);
  const [favstate, setFavstate] = useState(false);
  const [eleId, setEleid] = useState();
  const cartCount = cart.reduce((intial, ele) => {
    return intial + ele.quantity;
  }, 0);

  // save list for cart and favorit in localstorge
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favo", JSON.stringify(favo));
  }, [cart, favo]);

  // add item to cart
  const addToCart = (id) => {
    if (cart.find((ele) => ele.id == id) == null) {
      DataThree.map((el) => {
        el.id == id
          ? setCart([
              ...cart,
              {
                ...el,
                price: el.discount ? el.discountPrice : el.price,
                quantity: 1,
              },
            ])
          : el;
      });
      toast.success("Item Added to Cart 🛒");
    } else {
      cart.map((item) => {
        if (item.id == id) {
          let all = cart.filter((ele) => ele.id !== id);
          setCart([...all, { ...item, quantity: item.quantity + 1 }]);
        }
      });
      toast.success("Item Update Quantity🛒");
    }
  };
  // delete item from cart
  const removeFromCart = (id) => {
    setCart(
      cart.filter((ele) => {
        return ele.id !== id;
      })
    );
    toast.success("Item Removed form Cart 🛒");
  };

  // state for open ad close cart
  const opencart = () => {
    setCartstatus(true);
  };
  const closecart = () => {
    setCartstatus(false);
  };
  // state for open and close favorit list
  const openfav = () => {
    setFavstate(true);
  };
  const closefav = () => {
    setFavstate(false);
  };

  // add to fovorite list
  const addTofavorite = (id) => {
    if (favo.find((ele) => ele.id == id) == null) {
      DataThree.map((el) => {
        return el.id == id
          ? setFavo([
              ...favo,
              { ...el, price: el.discount ? el.discountPrice : el.price },
            ])
          : el;
      });
      toast.success("Item Added to favorit");
    } else {
      return toast.success("Item AlReady Added");
    }
  };
  //remove frome favort list
  const removeFromfavorite = (id) => {
    setFavo(favo.filter((ele) => ele.id !== id));
    toast.success("Item Removed form favorit");
  };

  // add element from favort list to cart
  const addToCartFromefavo = (id) => {
    addToCart(id);
    removeFromfavorite(id);
    toast.success("Item Added to Cart 🛒");
  };

  return (
    <contextCart.Provider
      value={{
        favo,
        cart,
        Cartstatus,
        favstate,
        eleId,
        setEleid,
        cartCount,
        addToCart,
        removeFromCart,
        opencart,
        closecart,
        openfav,
        closefav,
        addTofavorite,
        removeFromfavorite,
        addToCartFromefavo,
      }}
    >
      {children}
      <Shoppingcart Cartstatus={Cartstatus} closecart={closecart} />
      <Favorite />
    </contextCart.Provider>
  );
};

export const useContextCart = () => {
  return useContext(contextCart);
};

export default Maincontext;
