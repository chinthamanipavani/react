 function Componentform(){
return <div className="formdetails">
    <h3>Leave a comment</h3>
    <hr />
    <form action="#"><br /><br />
        <input type="text" placeholder="Name" name="Name" /><br /><br />
        <input type="email" placeholder="Email" name="email" /><br /><br />
        <textarea name="comment" placeholder="Leave a comment....."  id=" comment"></textarea><br /><br />
    </form>
    <span>Rate this Recipe: <a href="https://thumbs.dreamstime.com/z/single-yellow-star-isolated-white-33363387.jpg"></a>
    </span>
    <p>Your email address will not be published.<br />
    <button className="comment">Post Comment</button><br />
    </p>
</div>

 }
 export default Componentform;