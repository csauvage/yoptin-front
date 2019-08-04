import React from 'react';
import logo from '../../assets/logo.svg'
import sendgrid from '../../assets/sendgrid.svg'
import screen from '../../assets/Screen.png'
import './App.sass'

const App = () => {
  return (
    <div className="Home">
      <section className={"Header"}>

        <h1>Managin' your marketing list with ease</h1>
        <div className={'Dotted'}/>

        <p>
          Yopt'in is yet the easiest solution to manage your Sendgrid's marketing list from email collection to unsubscribes (it happen's...), the GDPR way
        </p>
        <div className={'Header__CTA'}>
          August 2019
        </div>

        <div className={'Header__For'}>
          <span>Built for</span>
          <img src={sendgrid}/>
        </div>

      </section>
      <div className={"Header__Border"}/>
      <section className={"Sample"}>

        <img src={screen}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cupiditate, debitis enim ex inventore minima molestiae natus nobis non odit placeat possimus quasi recusandae, saepe, totam veritatis vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cupiditate, debitis enim ex inventore minima molestiae natus nobis non odit placeat possimus quasi recusandae, saepe, totam veritatis vero.</p>

      </section>


      <div className={"Features__before"}/>
      <section className={"Features"}>

        <div className={'Feature'}>
          <h2>Easy to use</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur eaque eveniet ex iste itaque
        </div>

        <div className={'Feature'}>
          <h2>RGPD Compilant</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur eaque eveniet ex iste itaque
        </div>

        <div className={'Feature'}>
          <h2>Easy to use</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur eaque eveniet ex iste itaque
        </div>

      </section>
      <div className={"Features__after"}/>


    </div>
  );
};

export default App