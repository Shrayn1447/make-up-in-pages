import React, { Component } from "react";

function Grid({ name, text }) {
  return (
    <div className="div w-[440px] h-[500px] transition bg-white rounded-xl pt-[50px] pl-[20px] pr-[20px]">
      <img src={'./img/software.svg'} alt="Картинка" />
      <h1 className="font-bold text-[25px] pt-[10px] w-[250px] h-[90px]">{name}</h1>
        <p className="text-[20px] text antialiased pt-[10px] mt-[70px]">{text}</p>
    </div>
  );
}

export default function Main() {
  return (
    <div>
      <h1 className="text-[60px] font-bold text-center mt-[40px] antialiased">Nossos serviços</h1>
      <h3 className="text-[25px] antialiased text-gray-400 text-center">
        Soluções Tecnológicas Personalizadas para Impulsionar o seu Negócio
      </h3>
      <div className="flex gap-[40px] justify-center mt-[40px]">
        <Grid
          name={"Desenvolvimento de software:"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          }
        />
        <Grid
          name={"Design system"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          }
        />
        <Grid
          name={"Assistência técnica especializada"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          }
        />
      </div>
    </div>
  );
}
