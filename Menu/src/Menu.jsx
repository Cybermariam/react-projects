import React from "react";

const Menu = ({ menus }) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-10">
      {menus.map((menuItems) => {
        const { id, img, price, title, desc } = menuItems;
        return (
          <div key={id} className="shadow ">
            <img src={img} className="h-[200px]  w-full object-cover" />
            <div className="capitalize px-3">
              <div className="flex justify-between items-center mt-6 pb-6">
                <h3 className="mt-3 text-xl tracking-wide">{title}</h3>
                <p>{price}</p>
              </div>
              <p className="mb-3">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
