import Nav from "./Nav"



function HeroSection() {
  return (
    <div>
    {/* <!-- Hero Section --> */}

    <div className="hero-sec w-full">

      {/* <!-- Navigation --> */}

      <Nav/>
      
      {/* <!-- content --> */}

      <div className="content absolute">
        <div className="intro align-left relative">
          <h4 className="font-h4 text-secondary">Hello, my name is</h4>
          <h1 className="font-h1 text-white">Adedeji <span className="text-primary">Okubanjo</span></h1>
          <h3 className="font-h3 text-white">I'm a Web Developer.</h3>
        </div>
          
        <div className="newletter">
          <form className="relative">
            <input type="email" name="email"  id="mail" placeholder="Enter your Email" className="inline-block w-full"/>
            <input type="submit" name="submit"  value="Let's Start" className="absolute inline-block"/>
          </form>
        </div>
      </div>
    </div>
    


    {/* <!-- About Section --> */}


    <section className="about w-full bk">
      <div className="main flex align-center space-around">
        <img src="assets/about-img.jpg" alt=""/>

        {/* <!-- About Text  --> */}

        <div className="about-text">
          <h1 className="font-h1 text-white">About Me</h1>

          <h4 className="font-h4 text-white">Developer & <span className="text-primary">Designer</span></h4>

          <p className="font-display text-secondary"> I'm a frontend developer dedicated to crafting visually stunning and user-friendly websites. With expertise in HTML, CSS,
            and JavaScript, I transform ideas into engaging online experiences.<br/>
          
            I'm passionate about creating elegant, responsive designs and am committed to web standards, accessibility, and
            performance. Collaborative and always up-to-date with industry trends, I love turning concepts into reality.<br/>
          
            Let's work together to bring your web vision to life. Reach out, and let's get started.
          </p>

          <a className="text-center " href="#">Let's Talk</a>
        </div>
      </div>
    </section>



    {/* <!-- Service Section --> */}


    <div className="service w-full bk-secondary">
      <div className="title">
        <h2 className="text-white font-h1 text-center">Our Services</h2>
      </div>

      <div className="container flex space-center align-center">

        <div className="card text-center">
          <i className="fa-solid fa-bars block text-center"></i>
          <h3 className="font-h3 text-white">Web Development</h3>

          <div className="pra">
            <p>
              Every website should be built with two primary goals:
              Firstly, it needs to work on all devices.
              Secondly, it needs to be as fast as possible.
            </p>
            <a className="text-center rd-button text-white" href="#">Read More</a>
          </div>
        </div>
       


        <div className="card text-center">
          <i className="fa-solid fa-user block text-center"></i>
          <h3 className="font-h3 text-white">Web Development</h3>

          <div className="pra">
            <p>
              Every website should be built with two primary goals:
              Firstly, it needs to work on all devices.
              Secondly, it needs to be as fast as possible.
            </p>
            <a className="text-center rd-button text-white" href="#">Read More</a>            
          </div>
        </div>
        
          


        <div className="card text-center">
          <i className="fa-regular fa-bell block text-center"></i>
          <h3 className="font-h3 text-white">Web Development</h3>
          
          <div className="pra">
            <p>
              Every website should be built with two primary goals:
              Firstly, it needs to work on all devices.
              Secondly, it needs to be as fast as possible.
            </p>
            <a className="text-center rd-button text-white" href="#">Read More</a>            
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Contact Me --> */}
    <div className="contact-me w-full bk flex align-center space-center">
      <p className="text-white font-h2">Let Me Get You A Beautiful Website</p>
      <a className="contact-btn" href="#">Hire Me</a>
    </div>

    {/* <!-- Footer --> */}
    <footer className="relative w-full bk-secondary flex align-center space-center">
      <p className="text-white">Okubanjo Adedeji</p>
      <p className="text-white text-center"></p>

      <div className="social flex">
        <a className="flex space-center align-center font-h4" href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a className="flex space-center align-center font-h4" href="#"><i className="fa-brands fa-instagram"></i></a>
        <a className="flex space-center align-center font-h4" href="#"><i className="fa-brands fa-dribbble"></i></a>
      </div>

      <p className="end absolute text-primary font-xs">CopyRight By Okubanjo Adedeji</p>
    </footer>
    </div>
  )
}

export default HeroSection