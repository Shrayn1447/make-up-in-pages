import React, { Component } from "react";


function Footer({ children }) {
  return (
    <>
      <div className=" mr-[-100px] z-10 footer flex justify-between fixed w-[100%] m-0 bg-[#F1F2FB] items-center mt-[-140px]">
        <a className="w-[400px]" href="#"><img className="ml-[5%]" src="./img/LOGO.svg" alt="LOGO" /></a>
        <nav className="mr-[5%]">
          <ul className="flex gap-5 text-4xl font-bold">
            <li className="hover:underline">
              <a className="" href="#">Дом</a>
            </li>
            <li className="hover:underline">
              <a href="#">Сервис</a>
            </li>
            <li className="hover:underline">
              <a href="#">Партфолио</a>
            </li>
            <li className="hover:underline">
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
  </>
  );
}
function FooterMain() {
  return (
    <div className="main flex justify-between pl-[200px]  mt-[110px] ">
      <div className="  w-[720px] mt-[5%] ml-[10%">
        <h1 className=" logo text-5xl font-bold w-[600px] leading-[55px]">TECHNOGO, TRANSFORMANDO IDEIAS EM REALIDADE</h1>
        <p className="text-2xl text-[#646464]">
          Somos uma agência especializada em oferecer soluções de tecnologia da
          informação e marketing digital para empresas de todos os tamanhos.
          Combinando nossa expertise técnica com a criatividade, ajudamos nossos
          clientes a otimizar processos, aumentar a eficiência e impulsionar o
          crescimento.
        </p>
        <div className="flex justify mt-[40px] ">
          <a src='#' className="transition hover:bg-sky-400 hover:scale-[0.99] flex items-center cursor-pointer justify-center btn-blue w-72 h-[60px] bg-sky-600 text-[25px] font-bold text-white rounded-md">Começar agora <img className="pl-3" src="./img/arrow.png" alt="" /></a>
          <a src='#' className="transition hover:bg-[#eb9659] hover:scale-[0.99] flex items-center cursor-pointer justify-center btn-blue w-72 h-[60px] bg-[#FF7008] text-[25px] font-bold text-white rounded-md ml-[30px]">Inscrever-se</a>
        </div>
        <img className="mt-[30px]" src="./img/USERS.svg" alt="USERS" />
      </div>
      <div>
      <img className="w-[1350px] h-[500px]" src="./img/IMAGE.svg" alt="Garle" />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <Footer>
      <FooterMain/>
    </Footer>
  );
}
