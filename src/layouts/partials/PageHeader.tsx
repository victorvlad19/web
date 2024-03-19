import Breadcrumbs from "@/components/Breadcrumbs";
import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <section>
      <div className="container text-center">
        <div className="from-body to-theme-light px-8 pt-12 pb-0 dark:from-darkmode-body dark:to-darkmode-theme-light">
          <h1>{humanize(title)}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
