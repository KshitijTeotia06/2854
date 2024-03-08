import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import video from '../sections/autoVid.mov';



const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Auto = ({
    
    header, 
    description,
    useVideo,
    videoURL,
    isTeleop,
    isEndgame,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

    const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: header,
    paragraph: description  
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id = "about"/>
    { useVideo ? (
    isTeleop ? (
      <div className="video-responsive center-content">
             <iframe src="https://www.youtube.com/embed/ort86M_-fX4" style={{ width: '570px', height: '600px', borderRadius: "10px" }} title="Frame 1"></iframe>

  </div>
    ) : (isEndgame ? (
      <div className="video-responsive center-content">
             <iframe src="https://www.youtube.com/embed/-33osmrYIEk" style={{ width: '570px', height: '600px', borderRadius: "10px" }} title="Frame 1"></iframe>

  </div>
    ) : (
<div> 
         <h3>2 Note Autos</h3>

         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '15px', paddingLeft: '5px', paddingRight: '5px' }}>

      <div style={{ padding: '10px' }}>
        <iframe src="https://www.youtube.com/embed/uKLsXTzA5Zs" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 1"></iframe>
        <h6>BackUp Left</h6>
      </div>
      <div style={{ padding: '10px' }}>
        <iframe src="https://www.youtube.com/embed/XKpn1jaauG8" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 2"></iframe>
        <h6>BackUp Middle</h6>
      </div>
      <div style={{ padding: '10px' }}>
        <iframe src="https://www.youtube.com/embed/oP26rzdX6n0" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 3"></iframe>
        <h6>BackUp Right</h6>
      </div>

    </div>

    <h3>3 Note Autos</h3>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: '15px', paddingLeft: '5px', paddingRight: '5px' }}>
  <div style={{ padding: '10px' }}>
  <iframe src="https://www.youtube.com/embed/RiiXzz2qQok" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 3"></iframe>
  <h6>BackUp Left Center</h6>
</div>
<div style={{ padding: '10px' }}>
  <iframe src="https://www.youtube.com/embed/UT3lGaqkBn4" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 1"></iframe>
  <h6>Middle Left</h6>
</div>

<div style={{ padding: '10px' }}>
  <iframe src="https://www.youtube.com/embed/1a5OCOUBnFA" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 3"></iframe>
  <h6>Right Center</h6>
</div>

<div style={{ padding: '10px' }}>
  <iframe src="https://www.youtube.com/embed/0UjNZhAaqus" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 2"></iframe>
  <h6>BackUp Right Center</h6>
</div>

</div>
  <h3>4 Note Autos</h3>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '15px', paddingLeft: '5px', paddingRight: '5px' }}>
    <div style={{ padding: '10px' }}>
    <iframe src="https://www.youtube.com/embed/ZQSOnCxKg7w" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 2"></iframe>
    <h6>BackUp Left</h6>
    </div>
    <div style={{ padding: '10px' }}>
    <iframe src="https://www.youtube.com/embed/uIzeo10054k" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 1"></iframe>
    <h6>BackUp Right</h6>
    </div>
  </div>
  <h3>5 Note Autos</h3>

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '15px', paddingLeft: '5px', paddingRight: '5px' }}>
  <div style={{ padding: '10px' }}>
  <iframe src="https://www.youtube.com/embed/arH6s-kDfsY" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 2"></iframe>
  <h6>BackUp Left</h6>
  </div>
  <div style={{ padding: '10px' }}>
  <iframe src="https://www.youtube.com/embed/DRb6awDRoVQ" style={{ width: '100%', height: '300px', borderRadius: "10px" }} title="Frame 1"></iframe>
  <h6>BackUp Right</h6>
  </div>
</div>
</div>



        // <video width="750" height="500" controls >
        //     <source src={video} type="video/mov"/>
        // </video>
                
        ))
        ) : (
          <div className="center-content"> 
            {/* Ensure you have `roboPic.jpg` in your project directory or adjust the path accordingly */}
            <img width={"450"} style={{borderRadius: "15px"}} src={require('./roboPic.jpg')} alt="RoboPic" />
          </div>
        )
      }
          
        </div>
      </div>
    </section>
  );
}

Auto.propTypes = propTypes;
Auto.defaultProps = defaultProps;

export default Auto;