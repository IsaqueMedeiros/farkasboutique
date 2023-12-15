import SectionComponent from "../components/SectionComponent"

const Purschase = () => {
  return (
   <main>
     <SectionComponent sectionBg="bg-farkasGreen">
        <div className=" h-[35rem] sm:h-[33rem] w-min sm:w-max flex flex-col justify-between	 items-start sm:mr-[50%]">
          <div className="w-[10rem] flex flex-row justify-between items-center">
            <img
              src="/media/exagono.svg"
              loading="lazy"
              alt="exagono"
              width={250}
              height={250}
              className=" w-[2rem] h-[2rem]"
            />
            <p className="text-farkasWhite">
              <b>Farkas Boutique</b>
            </p>
          </div>
          <h1 className="text-farkasWhite text-5xl sm:text-8xl  leading-[5rem] sm:leading-[8rem]	">
           Adquira essa
            <br />{" "}
            <span className="bg-farkasGold rounded-[1rem] sm:rounded-[2rem] p-2">
            Oportunidade
            </span>
          </h1>
          <p className="text-farkasWhite">
            A engenharia não precisa parecer que é um outro
            <br className="hidden sm:block" /> idioma. Criamos a Farkas Boutique
            para garantir que
            <br className="hidden sm:block" /> a inovação funcione para você,
            seu negócio e equipe.<br className="hidden sm:block" /><b> Entre em contato conosco.</b>
          </p>
          <div
            id="botaoInscreverEmail"
            className="h-[6rem] flex flex-col justify-around items-start"
          >
            <button
              type="submit"
              className="p-2 rounded-2xl shadow-md text-white w-[10rem] flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-farkasGold"
            >
              <b>Comprar</b>
            </button>
          </div>
        </div>
      </SectionComponent>

      <SectionComponent sectionBg="bg-farkasGreen">
      <div className="h-[35rem] w-[95%] flex flex-col justify-between items-center md:items-start">
      <div className="flex flex-row justify-center items-center mt-[-5rem] md:mt-[-5rem]">
            {" "}
            <img
              src="/media/losangulo.svg"
              loading="lazy"
              alt="exagono"
              width={250}
              height={250}
              className=" w-[2rem] h-[2rem] mr-[1rem]  sm:w-[5rem] sm:h-[5rem]"
            />
            <p className="text-farkasWhite text-4xl sm:text-7xl">Farkas Boutique</p>
          </div>
        <div className=" flex flex-col justify-between  h-[35rem] items-start md:h-auto md:flex-row md:items-center md:justify-around md:w-[100%] md:mb-[5rem]" >
        <div className="h-[14rem] w-[20rem] md:h-[15rem] md:w-[26rem] md:mt-[-7rem]  bg-farkasWhite rounded-[1rem]" ></div>
          <button
              type="submit"
              className="md:absolute md:mr-[60%] md:mt-[17.5rem] p-2 rounded-2xl shadow-md text-white w-[10rem] md:w-[20rem] flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-farkasGold"
            >
              <b>Comprar</b>
            </button>
          <div className="h-[14rem] w-[20rem] md:h-[22.5rem] md:w-[50rem]  bg-farkasWhite rounded-[1rem]" ></div>
        </div>

      </div>
      </SectionComponent>
   </main>

  )
}

export default Purschase