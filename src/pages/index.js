import React from "react"
import Header from '../components/Header';

const data = {
    intro : {
        title: 'IT For Small Business',
        content: 'At JDavis Solutions we provide professional IT services for small businesses. Let us take care of your technology strategy so you can spend more time growing your business. Learn how we can help your small business today.'
    },
    about : {
        title: 'About Us',
        content : 'JDavis Solutions provides affordable IT services	for small businesses that have minimal IT needs. We stay knowledgeable of current and proven technology trends. We also believe in building strong relationships with our customers. These things allow us to create solutions that are most beneficial to our customer\'s needs.'
    },
    services : [
        {
            title: 'Strategic Technology',
            content: 'Monotonous tasks, disorganization and lack of resources are all workflow inefficiencies that plague small businesses. There are many tools available that can improve or even eliminate these inefficiencies. Let us identify solutions catered to your small business.'
        },
        {
            title: 'Online Presence',
            content: 'The internet has quickly become an essential part of everyday life. Without a proper online presence your business is limiting its exposure to potential customers. Let us help maximize your visibility by helping create a professional online presence.'
        },
        {
            title: 'Professional Advice',
            content: 'Technology can pose more questions then answers. In order to provide you with the best advice we are committed to staying knowledgeable of current and proven technology trends. Let us answer any questions you may have so that you can spend more time growing your business.'
        }
    ]
}

const Intro = (props) => (
    <div>
        <div class="large-4 columns"></div>
        <div class="large-8 columns" id="intro-text">
            <h1>{props.title}</h1>
            <h3>{props.content}<br />
            </h3>
        </div>
    </div>
)

const About = (props) => (
    <div>
        <div class="medium-6 columns">
            <h1 class="text-left">{props.title}</h1>
            <hr />
            <p>{props.content}</p>
        </div>
        <div class="medium-6 columns show-for-medium-up">
            <img class="hide-for-small-only" src="images/computer_small.png" alt="about JDavis Solutions LLC"/>
        </div>
    </div>
)

const Service = (props) => (
    <div class="large-4 columns">
        <h3 class="subheader text-center subheadertext">{props.title}</h3>
        <p>{props.content}</p>
    </div>
)

export default () => (
    <div>
        <Header /> 
        <div class="hero" id="intro-hero" />
        <div class="row intro">
            <Intro title={data.intro.title} content={data.intro.content} />
        </div>
      
      <div class="hero" id="about">
        <div class="row">
            <About title={data.about.title} content={data.about.content} />
        </div>
      </div>

      <div class="hero" id="services">
        <div class="row">
            <h1 class="text-left">Services</h1>
            <hr />
            {data.services.map(service => (
                <Service title={service.title} content={service.content} />
            ))}
        </div>
      </div>	
    </div>
)