import styles from './Projects.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../svg/2xlogo.svg';
import projectItem from '../../../../image/plant_offer.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import arrow from './arrow.svg';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './data';
import MyLogo from '../../../GlobalStyles/MyLogo';
// import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';

// import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

// const Projects = () => {
//     const [xPos, setXpos] = useState(358);
//     const transformValue = 'translateX(' + xPos + 'px)';
//     console.log(transformValue);
//     const [slide, setSlide] = useState({ transform: transformValue });

//     const onClick = (direction) => {
//         setXpos((prevXPos) =>
//             direction === 'right' && prevXPos === -358
//                 ? 358
//                 : direction === 'left' && prevXPos === 358
//                 ? -358
//                 : direction === 'left'
//                 ? prevXPos + 358
//                 : prevXPos - 358,
//         );

//         // setXpos((prevXPos) => (direction === 'left' ? prevXPos + 358 : prevXPos - 358));
//     };
//     React.useEffect(() => {
//         setSlide({ transform: transformValue });
//     }, [transformValue]);
//     return (
//         <div className={cx('wrapper')}>
//             <div className={cx('header')}>
//                 <div className={cx('logo', 'logo-revert')}>
//                     <img className={cx('logo-img')} src={logo} alt="" style={{ fill: 'rgb(164, 190, 12' }} />
//                 </div>
//                 <h2 className={cx('title-session', 'title')}>Projects</h2>
//                 <div className={cx('logo')}>
//                     <img src={logo} alt="" className={cx('logo-img')} style={{ color: ' #a4be7b' }} />
//                 </div>
//             </div>
//             <div className={cx('project')}>
//                 <button className={cx('btn-arrow', 'btn-arrow-left')} onClick={() => onClick('left')}>
//                     {/* <FontAwesomeIcon className={cx('arrow')} icon={faCircleArrowLeft} /> */}
//                     <img src={arrow} alt="" className={cx('arrow', 'arrow-left')} />
//                 </button>
//                 <button className={cx('btn-arrow', 'btn-arrow-right')} onClick={() => onClick('right')}>
//                     {/* <FontAwesomeIcon className={cx('arrow')} icon={faCircleArrowRight} /> */}
//                     <img
//                         src={arrow}
//                         alt=""
//                         className={cx('arrow', 'arrow-right')}
//                         style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
//                     />
//                 </button>
//                 <div
//                     className={cx('project_list')}
//                     style={{ transform: transformValue, transition: 'transform 250ms ease-in-out' }}
//                 >
//                     <div className={cx('project_item')}>
//                         <div className={cx('project-img-wrapper')}>
//                             <img src={projectItem} alt="" className={cx('project-img')} />
//                         </div>
//                         <h6 className={cx('project-title')}>Dự án trồng 1000 cây xanh ở Bình Phước</h6>
//                     </div>
//                     <div className={cx('project_item')}>
//                         <div className={cx('project-img-wrapper')}>
//                             <img src={projectItem} alt="" className={cx('project-img')} />
//                         </div>
//                         <h6 className={cx('project-title')}>Dự án trồng 1000 cây xanh ở Bình Phước</h6>
//                     </div>
//                     <div className={cx('project_item')}>
//                         <div className={cx('project-img-wrapper')}>
//                             <img src={projectItem} alt="" className={cx('project-img')} />
//                         </div>
//                         <h6 className={cx('project-title')}>Dự án trồng 1000 cây xanh ở Bình Phước</h6>
//                     </div>
//                     <div className={cx('project_item')}>
//                         <div className={cx('project-img-wrapper')}>
//                             <img src={projectItem} alt="" className={cx('project-img')} />
//                         </div>
//                         <h6 className={cx('project-title')}>Dự án trồng 1000 cây xanh ở Bình Phước</h6>
//                     </div>
//                     <div className={cx('project_item')}>
//                         <div className={cx('project-img-wrapper')}>
//                             <img src={projectItem} alt="" className={cx('project-img')} />
//                         </div>
//                         <h6 className={cx('project-title')}>Dự án trồng 1000 cây xanh ở Bình Phước</h6>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

const images = [projectItem, projectItem, projectItem, projectItem, projectItem, projectItem];

const Projects = () => {
    const settings = {
        className: 'center',
        dots: true,
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };
    return (
        <div>
            <div className={cx('header')}>
                <div className={cx('logo', 'logo-revert')}>
                    {/* <img className={cx('logo-img')} src={logo} alt="" style={{ fill: 'rgb(164, 190, 12' }} /> */}
                    <MyLogo name="wifi" fill="#5F8D4E" />
                </div>
                <h2 className={cx('title-session', 'title')}>Projects</h2>
                <div className={cx('logo')}>
                    <MyLogo name="wifi" fill="#5F8D4E" />
                </div>
            </div>
            <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                    <div className={cx('project_list')}>
                        <div className={cx('project_item')}>
                            <div className={cx('project-img-wrapper')}>
                                <img src={projectItem} alt="" className={cx('project-img')} />
                            </div>
                            <h6 className={cx('project-title')}>Dự án trồng 1000 cây xanh ở Bình Phước</h6>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Projects;
