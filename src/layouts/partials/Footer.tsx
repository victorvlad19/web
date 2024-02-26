"use client";



const Footer = () => {


  const date = new Date();
  const isoDateTime = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
  const lastUpdated = isoDateTime.slice(0, 10);

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p className="font-bold">Drd. Victor Vlad</p>
          <a href={`mailto:victorvlad.web@gmail.com`}
             className="text-light dark:text-darkmode-light underline"

          >
            victorvlad.web@gmail.com
          </a>
          <p>  Ultima actualizare: {lastUpdated} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
