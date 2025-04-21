import ComponentBox from "./ComponentBox";
import Componentform from "./Componentform";
import Componentlist from "./componentlist";

function Component(){

return  <div className="page-wrapper">
    <center>
    <div className="container">
    <header className="header">
    <nav className="nav">
   <img width="50px" src="https://vismaifood.com/themes/pivisions/assets/images/logo.png" alt=" no image" />
    <ul className="list">
    <li><a href="#">Home</a></li>
    <li><a href="#">Recipee</a></li>
    <li><a href="#">Subscribe</a></li>
    </ul>
    <p className="lang">Site also available in: </p><span className="telugu">Telugu</span>
    </nav>
    </header>
    <search>
        <form action="#">
            <input className="search" type="text" placeholder="search" name="search" />
        </form>
    </search>
    <h1>Coconut Ven Pongal Recipe | Kattu Pongali Recipe | Coconut Milk Pongal Recipe</h1>
    <button className="breakfast">Breakfast Recipes</button>
    <p><b>Coconut Ven Pongal Recipe</b>  I first tasted this Coconut Pongal at a wedding in Chennai. It was incredibly soft and melted in the mouth like butter. However, it was quite bland, served alongside a spicy black pepper kolambu. Inspired by that, I decided to make it slightly spicier and paired it with Miriyala Pappucharu (Pepper Dal)—a combination that turned out to be a super hit! My method remains simple, just as I had in Chennai, but with an extra punch of flavor.</p>
    <button className="telugu">See in Telugu</button><br/>
    <img  width="55%" height="50%" src="https://vismaifood.com/storage/app/uploads/public/aee/096/3bb/thumb__700_0_0_0_auto.jpg" alt=" imab=ge" />
    <div className="buttons">
        <button><h2>Print this Recipe</h2></button>
        <button><h2>Jump to Recipe</h2></button>
    </div>
    <p>Enjoy your delicious and flavorful Coconut Pongal with a spicy side dish for the best experience!</p>
    <img width="40%" src="https://tpc.googlesyndication.com/daca_images/simgad/15673414436033931830" alt=" img" /><br />

<img src="https://vismaifood.com/storage/app/uploads/public/ffd/fe0/3f7/thumb__700_0_0_0_auto.jpg" alt="image" />
</div>
   


<Componentlist/>
<ComponentBox/>
<Componentform/>
</center>
</div>


}
export default Component;