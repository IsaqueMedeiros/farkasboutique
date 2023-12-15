import SectionComponent from "../components/SectionComponent";

const Index = () => {
  return (
    <main>
      <SectionComponent sectionBg="bg-farkasGreen">
       <div className=" flex flex-col lg:flex-row justify-between lg:w-[30%]  xl:w-[70%] 2xl:w-[95%] h-[90%] items-center " >

       <div className=" h-[30rem] sm:mt-[5rem] md:mt-[0rem] md:h-[33rem] w-min flex flex-col justify-between items-start ">
          <h1 className="text-farkasWhite text-6xl sm:text-8xl  leading-[5rem] sm:leading-[8rem]	">
            Lançamento
            <br />{" "}
            <span className="bg-farkasGold rounded-[1rem] sm:rounded-[1rem] p-1">
              em Breve
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
            <input
              required
              className="p-2 rounded-2xl outline-none placeholder-white text-white w-[17rem] sm:w-[25rem] bg-transparent border-2 border-farkasGold"
              placeholder=" Seu melhor E-mail"
              type="email"
              name="user_email"
            />
            <button
              type="submit"
              className="p-2 rounded-2xl shadow-md text-white w-[10rem] flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-farkasGold"
            >
              <b>Enviar</b>
            </button>
          </div>
        </div>
       <div className="flex flex-col items-center justify-evenly w-[60%] h-[40rem]" >
       <img
              src="/media/Logos/Logo_Boutique_Green.svg"
              loading="lazy"
              alt="exagono"
              className=" w-[35rem] h-[35rem] ml-[8%]"
            />
        <img
          src="/media/doubleLine.svg"
          loading="lazy"
          alt="exagono"
          width={250}
          height={250}
          className=" w-[12rem] absolute h-[12rem] sm:w-[15rem] sm:h-[15rem] mt-[24rem] ml-[37%] "
        />
       </div>

       </div>
      </SectionComponent>
      {/* second section */}
      <SectionComponent sectionBg="bg-farkasGreen">
        <div className="flex flex-col sm:justify-center lg:flex-row justify-between items-center gap-20 sm:gap-8 ">
          <div className="flex flex-col items-center bg-farkasWhite rounded-[2rem] h-[19rem] w-[20rem] sm:h-[30rem] sm:w-[30rem] md:h-[40rem] md:w-[40rem]">
          <img
              src="/media/Estevao.webp"
              loading="lazy"
              alt="Estevão"
              className="object-cover w-full center h-full rounded-[2rem]"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-farkasWhite rounded-[2rem] h-[19rem] w-[20rem] mt-4 sm:mt-0 sm:h-[30rem] sm:w-[30rem] md:h-[40rem] md:w-[40rem]">
            <div className="w-[80%] h-[90%] sm:h-[65%] flex flex-col justify-around items-start">
              <h1 className="text-farkasGreen text-2xl sm:text-6xl">Estevão</h1>
              <p className="sm:text-[1.2rem]">
                Somos uma empresa que visa ajudar
                <br className="hidden sm:block" /> empreendedores a alcançar
                suas metas, fornecendo
                <br className="hidden sm:block" /> soluções simples e eficazes
                de vendas e marketing.
                <br className="hidden sm:block" />
                Valorizamos um trabalho impactante, colaboração
                <br className="hidden sm:block" /> aberta, um espírito de
                diversidade e inclusão.
              </p>
              <button
                type="submit"
                className="p-2 rounded-2xl shadow-md bg-farkasGold text-white w-[10rem] flex items-center justify-center group hover:brightness-90 duration-500"
              >
                <b className="text-farkas">conheça</b>
              </button>
            </div>
          </div>
        </div>
      </SectionComponent>

      {/* Third section */}

      <SectionComponent sectionBg="bg-farkasGreen">
        <h1 className="text-farkasWhite text-center text-4xl sm:text-5xl  sm:mb-[5rem]">
          Conteúdos
        </h1>

        <div className="text-farkasWhite h-[90%] w-[90%] flex flex-col sm:justify-center lg:justify-between md:flex-row flex-wrap justify-between items-center gap-8 mt-8">
          <div className=" flex flex-col justify-center items-center border-2 border-farkasGold w-[15rem] h-[12rem] sm:w-[20rem] sm:h-[20rem] rounded-[1rem]">
            <h1 className="md:text-3xl mb-[2.5rem]  " >Home Office</h1>
            <div className=" flex flex-col justify-center items-center w-[100%] h-[2px] bg-farkasGold"></div>
            <p className="md:text-[1.3rem] text-center mt-[2.5rem]"  >Tenha sua empresa <br/> na palma da sua mão.</p>
          </div>
          <div className=" flex flex-col justify-center items-center border-2 border-farkasGold w-[15rem] h-[12rem] sm:w-[20rem] sm:h-[20rem] rounded-[1rem]">
            <h1  className="md:text-3xl mb-[2.5rem]" >Reduza despesas</h1>
            <div className=" flex flex-col justify-center items-center w-[100%] h-[2px] bg-farkasGold"></div>
           <p className="md:text-[1.3rem] text-center mt-[2.5rem]"  > Sem custo fixo de escritório central você lucra mais.</p>
          </div>
          <div className=" flex flex-col justify-center items-center border-2 border-farkasGold w-[15rem] h-[12rem] sm:w-[20rem] sm:h-[20rem] rounded-[1rem]">
            <h1  className="md:text-3xl mb-[2.5rem]" >Obras terceirizadas</h1>
            <div className=" flex flex-col justify-center items-center w-[100%] h-[2px] bg-farkasGold"></div>
            <p  className="md:text-[1.3rem] text-center mt-[2.5rem]" >Sem funcionários diretos com obras 100% terceirizadas.</p>
          </div>
        </div>
      </SectionComponent>
      {/* fourth section */}
      <SectionComponent sectionBg="bg-[#f2f2f2]">
        <div className="flex flex-col lg:flex-row justify-center items-center w-[90%] h-[30rem] gap-20">
          <h1 className="text-farkasGreen text-4xl sm:text-6xl sm:mb-[25rem] sm:mr-[15%] ">
            Para quem é o<br className="hidden sm:block" /> evento?
          </h1>
          <div className="text-end flex flex-col justify-between items-end  text-6xl sm:text-8xl gap-6">
            <p className="border-b-4  border-farkasGold">Engenheiros</p>
            <p className="border-b-4  border-farkasGold">Arquitetos</p>
            <p className="border-b-4  border-farkasGold">Investidores</p>
            <p className="border-b-4  border-farkasGold">Empresários</p>
          </div>
        </div>
      </SectionComponent>

      {/* fifth section */}

      <SectionComponent sectionBg="bg-farkasWhite">
        <div className="flex flex-col justify-between sm:justify-center xl:justify-between sm:gap-32 lg:gap-12 items-center lg:flex-row gap-12">
          <div className="flex flex-col items-center bg-white rounded-[2rem] h-[15rem] w-[20rem]  sm:h-[30rem] sm:w-[30rem] md:h-[30rem] md:w-[40rem]">
          <img
              src="/media/Logos/Logo_Boutique_White.svg"
              loading="lazy"
              alt="Logo Branca"
              className="object-cover w-full center h-full rounded-[2rem]"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-[2rem] h-[25rem] w-[20rem] sm:mt-0  sm:h-[30rem] sm:w-[30rem] md:h-[30rem] md:w-[40rem]">
            <div className="w-[80%] h-[90%] sm:h-[65%] flex flex-col justify-around items-start">
              <h1 className="text-farkasGreen text-2xl sm:text-6xl">
                Realize sua inscrição
              </h1>
              <p className="sm:text-[1.2rem]">
                O curso <b>Farkas Boutique</b> é uma oportunidade única de
                aprender sobre <b>Empreendimento.</b>
                <br />
                <br />
                <b>Inscreva-se</b> e você irá desenvolver as habilidades
                necessárias para se tornar um emprésario de sucesso.
              </p>
              <div
                id="botaoInscreverEmail"
                className="h-[6rem] flex flex-col justify-around items-start"
              >
                         <a href="https://www.asaas.com/c/320854417892" >

                <button
                  type="submit"
                  className="p-2 rounded-2xl shadow-md text-white w-[10rem] flex items-center justify-center group hover:brightness-90 duration-500 bg-farkasGold"
                >
                  <b>Adquira-já</b>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>

      <SectionComponent sectionBg="bg-farkasWhite">
        <div className=" h-[35rem] sm:h-[33rem] w-min sm:w-max flex flex-col justify-between	 items-start sm:mr-[50%]">
          <h1 className="text-farkasGreen text-5xl sm:text-8xl  leading-[5rem] sm:leading-[8rem]	">
           Adquira essa
            <br />{" "}
            <span className="bg-farkasGold text-farkasWhite rounded-[1rem] sm:rounded-[1rem] p-2">
            Oportunidade
            </span>
          </h1>
          <p className="text-farkasBlack">
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
                     <a href="https://www.asaas.com/c/320854417892" >

            <button
              type="submit"
              className="p-2 rounded-2xl shadow-md text-farkasGreen w-[10rem] flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-farkasGold"
            >
              <b>Comprar</b>
            </button>
            </a>
          </div>
        </div>
      </SectionComponent>

      <SectionComponent sectionBg="bg-farkasWhite">
      <div className="h-[35rem] w-[95%] flex flex-col justify-between items-center md:items-start">
      <div className="flex flex-row justify-center items-center mt-[-5rem] md:mt-[-5rem]">
            <p className="text-farkasGreen text-4xl sm:text-7xl">Farkas Boutique</p>
          </div>
        <div className=" flex flex-col justify-between  h-[35rem] items-start md:h-auto md:flex-row md:items-center md:justify-around md:w-[100%] md:mb-[5rem]" >
        <div className="h-[14rem] w-[20rem] md:h-[15rem] md:w-[26rem] md:mt-[-7rem]  bg-farkasGreen rounded-[1rem]" ></div>
         <a href="https://www.asaas.com/c/320854417892" >
         <button
              type="submit"
              className="md:absolute md:mr-[60%] md:mt-[17.5rem] p-2 rounded-2xl shadow-md text-farkasGreen w-[10rem] md:w-[20rem] flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-farkasGold"
            >
              <b>Comprar</b>
            </button>
         </a>
          <div className="h-[14rem] w-[20rem] md:h-[22.5rem] md:w-[50rem]  bg-farkasGreen rounded-[1rem]" ></div>
        </div>

      </div>
      </SectionComponent>

    {/* Footer section */}

      <SectionComponent sectionBg="bg-farkasWhite">
        <div className="w-[90%] h-[30rem] flex flex-col  justify-around  items-center sm:items-start lg:items-center ">
          <div className="flex flex-row justify-center items-center lg:ml-[-57%]">
            {" "}
            <p className="text-farkasGreen text-4xl sm:text-7xl">Farkas Boutique</p>
          </div>
          <div className="flex flex-col justify-between items-start gap-2 lg:mr-[55rem]" >
            <h1 className="text-farkasGreen text-3xl sm:text-5xl" >Entre em contato</h1>
            <p>Rua Alegre, 123 - Cidade Brasileira 12345 <br/>Tel: (12) 3456-7890 <br/>E-mail:alo@grandesite.com.br</p>
          </div>
          <div className=" flex flex-row justify-around items-center sm:justify-start sm:gap-8 text-2xl text-farkasGreen border-b-2 border-t-2 sm:border-b-3 sm:border-t-3 border-farkasGold w-[100%]  mb-[-15rem] sm:mb-[-30rem]  xl:mb-[-10rem]" >
            <p className="text-farkasGreen sm:text-4xl sm:p-4" >Siga nas redes</p>
            <a href="https://www.instagram.com/boutiqueconstrutora/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="farkasBlack"
                className="w-[16px] lg:w-[25px] bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+553194130114&text=Olá, tenho interesse em saber mais Sobre a Farkas.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="farkasBlack"
                className="w-[16px] lg:w-[25px] bi bi-whatsapp ml-4"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="farkasBlack"
                className="w-[16px] lg:w-[25px] bi bi-facebook ml-4"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </div>
        </div>
      </SectionComponent>


    </main>
  );
};

export default Index;
