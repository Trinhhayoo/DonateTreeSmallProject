
import styles from './Projects.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../svg/2xlogo.svg';
import projectItem from '../../../../image/plant_offer.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import arrow from './arrow.svg';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from './data';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);



const images = [projectItem, projectItem, projectItem, projectItem, projectItem, projectItem];



const Projects = () => {

  const settings = {

    dots: true,

    centerPadding: '10px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,

    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  const renderSlides = data.map((num) => (



    <div className="wrap-slide">
      <img className="trending-img" key={num.id} src={num.linkImg} alt="" />
      <h3 className='content-slide'>{num.title}</h3>
    </div>

  ));
  return (

    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('logo', 'logo-revert')}>
          <img className={cx('logo-img')} src={logo} alt="" style={{ fill: 'rgb(164, 190, 12' }} />
        </div>
        <h2 className={cx('title-session', 'title')}>Projects</h2>
        <div className={cx('logo')}>
          <img src={logo} alt="" className={cx('logo-img')} style={{ color: ' #a4be7b' }} />
        </div>
      </div>

      <section className="center slider">
        <div>
          <Slider {...settings}>{renderSlides}</Slider>
        </div>
      </section>
    </div>









  );
}


export default Projects;
