import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const NotFound = async () => {
  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
                404
              </span>
              <h1 className="h2 mb-4">Pagina nu a fost gasită</h1>
              <div className="content">
                <p>
                  Este posibil ca pagina pe care o căutați să fi fost eliminată, sau este temporar indisponibilă.
                </p>
              </div>
              <Link href="/" className="btn btn-primary mt-8">
                Înapoi la pagina principală
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
