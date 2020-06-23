import React from "react";
import Avatar from "./Avatar";
import Information from "./Information";
function Card(props) {
  return (
    <div>

      <div className="card">
        <div className="top">
          <h2 className="name" >{props.heading}</h2>
          <Avatar img={props.img}></Avatar>
        </div>
        <div className="bottom ">
          <Information tel={props.tel} email={props.email}> </Information>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pbs.twimg.com/profile_images/1274790656817291264/j2bx8w25_400x400.jpg"></Avatar>
      <Card heading="Shreya" img="https://media-exp1.licdn.com/dms/image/C5603AQH7r7JJqn-vXw/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=CJxiSTV1aMZ1k8dGe6YxBmLLr8zbk99eyYDKnl5okFk"
        tel="+91 99999 99999"
        email="shreya@gmail.com

" >

      </Card>


      <Card heading="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com

" >

      </Card>



      <Card heading="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="+987 654 321" email="jack@nowhere.com

" >

      </Card>



      <Card heading="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" tel="+918 372 574" email="gmail@chucknorris.com" >

      </Card>




    </div>
  )
}

export default App;
