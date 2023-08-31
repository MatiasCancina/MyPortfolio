"use client";
import React, { useState } from "react";
import ProyectsComponent from "./ProyectsComponent";

const ContainerProyects = () => {
  let [position, setPosition] = useState(0);
  const proyect = [
    <ProyectsComponent name={'PigCommander'} tecnologies={'next, react, redux'}/>,
    <ProyectsComponent name={"Dogs Api"} tecnologies={'js, html, css'}/>,
    <ProyectsComponent name={"libreria de lucas"} tecnologies={'angular, vue, c++'}/>,
  ];

  const onClickNext = () => {
    if (position < proyect.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(proyect.length - 1);
    }
  };

  return (
    <div className="place-items-center bg-gray-400 rounded-3xl col-span-4 row-span-4 h-72 p-6">
      <button onClick={onClickNext}>next</button>
      <button onClick={onClickPrev}>prev</button>
      {proyect[position]}
    </div>
  );
};

export default ContainerProyects;
