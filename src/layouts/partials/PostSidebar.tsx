import { humanize } from "@/lib/utils/textConverter";
import Link from "next/link";

import { FaSheetPlastic } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";

const PostSidebar = ({
  tags,
  categories,
  allCategories,
}: {
  tags: string[];
  categories: string[];
  allCategories: string[];
}) => {
  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <h5 className="mb-6">Anunțuri</h5>
            <ul>
                <li><FaRegDotCircle style={{display: "inline-block"}}/> Sesiunea de restanțe se organizează sâmbătă, 06.07.2024 în laboratorul C413. Toate grupele trebuie sa fie prezente de la ora 9:00.
                </li>
                <br/>
                <li><FaRegDotCircle style={{display: "inline-block"}}/>
                    <a style={{textDecoration: "underline"}}
                       href="https://docs.google.com/spreadsheets/d/10K-Jmxh-eGZPkHtUCezMRnD9GVO_aImYjE8DF5JxgRM/edit?usp=sharing"
                       target="_blank" rel="noopener noreferrer"> Planificare evaluare componenta S </a>
                </li>
                {/*<br/>*/}
                {/*<li><FaRegDotCircle style={{display: "inline-block"}}/> Studenţii din grupa <span*/}
                {/*    style={{fontWeight: "bolder"}}>A4</span> sunt rugați să vina sâmbătă de la 10:00 in laboratorul*/}
                {/*    C411.*/}
                {/*</li>*/}
                {/*<br/>*/}
                {/*<li><FaRegDotCircle style={{display: "inline-block"}}/> Studenţii din grupa <span*/}
                {/*    style={{fontWeight: "bolder"}}>B1</span> sunt rugați să vina sâmbătă de la 10:00 in laboratorul*/}
                {/*    C411.*/}
                {/*</li>*/}

            </ul>
        </div>
      </div>
        {/* <!-- tags --> */}
        <div className="mb-8">
            <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
                <h5 className="mb-6">Timp Liber</h5>
                <ul>
                    <li> <FaSheetPlastic style={{ display: "inline-block"}}/> <a href="https://stagiipebune.ro/"> Stagii pe Bune 2024 </a></li>
                    <li> <FaSheetPlastic style={{ display: "inline-block"}}/> <a href="https://theuselessweb.com/"> The Useless Web </a></li>
                    <li> <FaSheetPlastic style={{ display: "inline-block"}}/> <a href="https://www.freecodecamp.org/news/gorillas-game-in-javascript/"> Build Gorillas with HTML Canvas + JavaScript </a></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default PostSidebar;
