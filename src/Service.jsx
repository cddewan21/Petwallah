import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = (Props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Products for {Props.category}  {Props.brand} {Props.itemonsale}</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                   if ((Props.category && Props.category==val.category) || (Props.brand && Props.brand==val.brand)||(Props.itemonsale && Props.itemonsale==val.itemonsale))
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title}  brand={val.brand} price={val.price}/>;
                else
                return false
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
