import React from "react";

function Card(props) {
  return (
    <div>

      <div className="card">
        <div className="top">
          <h2 className="name" >{props.heading}</h2>
          <img class="circle-img"
            src={props.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom ">
          <p class="info">{props.tel}</p>
          <p class="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card heading="Samarth" img="https://pbs.twimg.com/profile_images/1274790656817291264/j2bx8w25_400x400.jpg" tel="+123 456 789" email="samarth@gmail.com

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
