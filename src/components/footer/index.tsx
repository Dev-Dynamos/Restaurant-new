export const Footer = () => {
  return (
    <>
      <footer className="md:px-44 px-10 bg-[#E3B258] w-full h-auto  text-white py-8">
        <div className="w-full flex md:flex-row flex-col gap-10">
          <div className="flex flex-col gap-24 justify-between ">
            <h3 className="text-lg">Dona Makenda</h3>
            <span className="text-sm">
              © 2023 Restaurant | Todos os direitos reservados
            </span>
          </div>
        </div>
      </footer>
      <div className="w-full h-8 bg-[#202020] text-center flex items-center justify-center text-xs text-white">
        <p>
          Este site é protegido pelo reCAPTCHA e são aplicáveis a Política de
          Privacidade e os Termos de Serviço da Google.
        </p>
      </div>
    </>
  );
};
