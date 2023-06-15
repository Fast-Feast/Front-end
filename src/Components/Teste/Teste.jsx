import React from 'react';
import Asd from '../../assets/Novo.png'

const Teste = () => {
  return ( 
    <div className="relative w-full h-[355.39px] text-left text-13xl text-darkslategray font-inter">
      <div className="absolute w-[calc(100%_-_384px)] top-[35px] right-[425px] left-[-41px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg h-[396px]">
        <b className="absolute top-[78px] left-[58px] leading-[48px] flex items-center w-[635.14px] h-[39px]">
          Faça um teste grátis e veja os resultados
        </b>
        <div className="absolute top-[122px] left-[58px] w-[641.69px] h-[81px] text-lg">
          <div className="absolute top-[35px] left-[0px] leading-[27px] flex items-center w-[702px] h-[75px]">
            Com o FastFeast, você terá acesso a um sistema de delivery fácil de
            usar, projetado para tornar o processo de entrega o mais simples
            possível. A venda por delivery nunca foi tão fácil. Seus clientes
            terão acesso a visualizar todo seu cardapio e se deliciar com suas
            opções.
          </div>
        </div>
        <div className="absolute top-[265.39px] left-[57px] rounded bg-mediumspringgreen h-[45px] flex flex-row py-[15px] pr-[29.979995727539062px] pl-[30px] box-border items-start justify-start text-center text-sm">
          <b className="relative leading-[14px]">Contrate Agora*</b>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_713px)] top-[-20px] right-[-25px] left-[738px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none h-[345px]">
        <img
        className="absolute top-[calc(50%_-_197.5px)] left-[calc(50%_-_241.5px)] w-[436px] h-[370px] object-cover"
        alt=""
        src={Asd}/>

      </div>
    </div>
  );
};

export default Teste;
