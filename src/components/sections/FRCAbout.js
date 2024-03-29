import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FRCAbout = ({
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
    title: 'MEET THE TEAM',
    paragraph: 'Learn more about the hands and minds behind our robot.'  
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id = "about"/>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                  Captain
                  </div>
                <h3 className="mt-0 mb-12">
                  Siddhi Jain
                  </h3>
                <p className="m-0">
                  Siddhi, a senior, has been in robotics for four years. She enjoys going to the gym and listening to music.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/siddhi.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
<div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                  CO-PRESIDENT
                  </div>
                <h3 className="mt-0 mb-12">
                  Tiffany Dang
                  </h3>
                <p className="m-0">
                  President of EVHS Robotics & Co-captain of FTC Artemis.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/tiffany.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                  Programming Lead
                  </div>
                <h3 className="mt-0 mb-12">
                  Vishal Singh
                  </h3>
                <p className="m-0">
                 Vishal is a senior that has been a part of robotics for four years. He can run a sub-five minute mile. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vishal.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                  Programming Lead
                </div>
                <h3 className="mt-0 mb-12">
                  Kshitij Teotia
                </h3>
                <p className="m-0">
                Kshitij, a junior, has been a part of robotics for four years. His favorite place to go is Santa Cruz. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/kshitij.jpeg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                Programming Lead
                  </div>
                <h3 className="mt-0 mb-12">
                    Krish Iyengar
                  </h3>
                <p className="m-0">
                Krish, a junior, has been a part of robotics for two years. He enjoys running.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/krish.jpeg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>


            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder
                  </div>
                <h3 className="mt-0 mb-12">
                  Hemanth Nandakumar
                  </h3>
                <p className="m-0">
                Description
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div> */}

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                Mechanical Lead
                  </div>
                <h3 className="mt-0 mb-12">
                  Mihir Garg
                  </h3>
                <p className="m-0">
                    Mihir, a junior, has been on robotics for two years. He likes to bike, run, and be outdoors.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mihir.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                Mechanical Lead
                  </div>
                <h3 className="mt-0 mb-12">
                  Priyanka Karunakaran
                  </h3>
                <p className="m-0">
                   Priyanka, a junior, has been in robotics for two years.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/priyanka.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxl text-color-primary fw-600 tt-u mb-8">
                Electrical Lead
                  </div>
                <h3 className="mt-0 mb-12">
                  Karun Pai
                  </h3>
                <p className="m-0">
                   Karun Pai, a junior, has been in robotics for two years.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/karun.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Algebra 1 instructor
                </div>
                <h3 className="mt-0 mb-12">
                Saurav Rekapalli
                  </h3>
                <p className="m-0">
                Co-founder and Algebra 1 instructor, Saurav Rekapalli is a 11th grader at Evergreen Valley High School. He is an experienced teacher, and is qualified in the field of mathematics. Saurav excels in his highschool classes and competes in many math competitions. He is a block-chain enthusiast, musician, and entrepreneur. He loves to bike, practice carnatic music, and spend time with his friends and family. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/saurav.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div> */}
{/* 
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Algebra 1 instructor
                </div>
                <h3 className="mt-0 mb-12">
                Neil Gadagkar
                  </h3>
                <p className="m-0">
                Neil is a junior at Archbishop Mitty High School who enjoys coding his own games in python and participating in math competitions in his free time. He loves serving his community by working in soup kitchens over the weekend as well as making blankets and scarves for distribution at local shelters. Neil is very fond of tutoring and loves to inspire and educate young members of his community in the fields of math and computer science. Apart from this, he is an avid mountain biker and fisherman who loves spending time in nature.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/neil.jpeg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

FRCAbout.propTypes = propTypes;
FRCAbout.defaultProps = defaultProps;

export default FRCAbout;