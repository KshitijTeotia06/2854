import React from 'react';
// import sections
import HeroSubteam from '../components/sections/HeroSubteam';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Typing from "../components/elements/Typing";
import Contact from "../components/sections/Contact";
import Auto from '../components/sections/Auto';
import FRCAbout from '../components/sections/FRCAbout';

const Prototypes = () => {
  const [num, setNum] = React.useState(100);
  const tileInput =[["Test1","2"],["3","4"],["5","6"]];
  return (
    <>
    {console.log(tileInput)}
      <HeroSubteam featureHeader = {tileInput} teamName="The Prototypes" className="illustration-section-01" />
      <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto mt-5" style = {{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', marginTop: -75, marginBottom: 20}}>
                
                <div className="flex flex-wrap -m-4 text-center float-center" style = {{overflow: "hidden"}}>
                  <div className="w-1/3 p-4" style = {{float: "left"}}>
                    <h2 className="text-3xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={35} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Competitions</p>
                  </div>

                  <div className="w-1/3 p-4" style = {{float: "left", marginRight: 200, marginLeft: 200}}>
                    <h2 className="text-4xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={125} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Members</p>
                  </div>

                  <div className="w-1/3 p-4" style = {{float: "left"}}>
                    <h2 className="text-4xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={13} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Years</p>
                  </div>
                </div>
              </div>
            </section>

            <div style = {{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
        {/* <iframe style = {{width: 800, height: 500}}src="https://calendar.google.com/calendar/embed?src=simpletutornp%40gmail.com&ctz=America%2FLos_Angeles"></iframe> */}
      </div>

       {/* <FeaturesTiles /> */}
      <section >
        {/* <h1>
          Autonomous
        </h1> */}
                <Auto topDivider={true} useVideo={true} videoURL={"https://www.youtube.com/embed/u20f3Vbwvio"} header={"AUTONOMOUS"} description={'Our autonomous routine shoots the preloaded note in the shooter and then backs up to get other notes around. We have a 2 note, 3 note, and 4 note autos that work consistently.'} /> 
                {/* <p>{"6 POINTS We then traverse to the charge station where we DOCK and ENGAGE - 12 POINTS"}</p> */}

                <Auto topDivider={true} useVideo={true} header={"TELEOPERATED"} isTeleop={true} description={'Our robot is equipped with the capability to collect notes from both the ground and the source. Utilizing a swerve drive and a custom-build neural network, it can precisely aim and shoot while in motion by continuously calculating the optimal arm angle and flywheel speed.'}/>
                <Auto topDivider={true} useVideo={true} header={"ENDGAME"} isTeleop={false} isEndgame={true} description={'Our endgame strategy is to be able to climb onto the stage with our polycarb climbers. We utilize our arm system to pull the robot up onto the chains.'}/>
        {/* <Auto topDivider={true} useVideo={true} videoURL={"https://www.youtube.com/embed/ayUBQiOhlPs"} header={"ENDGAME"} description={'Our endgame autobalance has a 100% success rate on every ramp we have tested on. Driver involvement not required :)'}/> */}
      
      
      </section>
      <Cta split />
      <Contact />
    </>
  );
}

export default Prototypes;