import React from 'react';
import { GiColombia } from "react-icons/gi";
import hacemosMemoria from './../assets/hacemosMemoria.png';
import footer from './../assets/footer.jpg';

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center h-[250px] mt-10 px-10'>
      <div className='flex flex-col items-center'> {/* Agregado estilo flex y items-center */}
        <img src={footer} alt="Indigenas de Colombia" className='h-[150px] rounded-2xl'/>
        <h2 className='text-[23px] font-bold text-center'>Reservas Indigenas de colombia</h2>
      </div>
      <div className='grid grid-cols-2 items-center'>
        <h4 className='text-[23px] font-bold flex items-center'><GiColombia/>API Colombia</h4>
        <img src={hacemosMemoria} alt="Logo de hacemos Memoria" className='h-[200px]'/>
      </div>
    </div>
  );
}

export default Footer;
