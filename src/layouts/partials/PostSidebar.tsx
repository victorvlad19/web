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
                <li><FaRegDotCircle style={{display: "inline-block"}}/> Evaluarea va avea loc sâmbătă, 28 iunie (28.06.2025) , începând cu ora 10:00 , în laboratorul C412.
                </li>
                <br/>
                <li><FaRegDotCircle style={{display: "inline-block"}}/>
                    <a style={{textDecoration: "underline"}}
                       href="https://tehnologii-web.vercel.app/evaluare"
                       target="_blank" rel="noopener noreferrer"> Planificare evaluare</a>
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
        {/*<div className="mb-8">*/}
        {/*    <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">*/}
        {/*        <h5 className="mb-6">Timp Liber</h5>*/}
        {/*        <ul>*/}
        {/*            <li> <FaSheetPlastic style={{ display: "inline-block"}}/> <a href="https://stagiipebune.ro/"> Stagii pe Bune 2024 </a></li>*/}
        {/*            <li> <FaSheetPlastic style={{ display: "inline-block"}}/> <a href="https://theuselessweb.com/"> The Useless Web </a></li>*/}
        {/*            <li> <FaSheetPlastic style={{ display: "inline-block"}}/> <a href="https://www.freecodecamp.org/news/gorillas-game-in-javascript/"> Build Gorillas with HTML Canvas + JavaScript </a></li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
  );
};

export default PostSidebar;
