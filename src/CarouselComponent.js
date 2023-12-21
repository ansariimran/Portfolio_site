import Service from './Service.js';
import React, { useEffect, useRef, useState } from 'react';
import "./CarouselComponent.css";


import Mechanical_design from "./images/Mechanical_design.jpg";
import Data_Analytics from "./images/Data-Analytics.svg";
import PPT_Presentation from "./images/PPT_Presentation.jpg";
import Transcription_Proofreading from "./images/Transcription_Proofreading.svg";
import Translation from "./images/Translation.svg";
import Web_development from "./images/Web-development.svg";
import Resume_building from "./images/Resume_building.jpg";

const CarouselComponent = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [cardPerView, setCardPerView] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false); //changed true to false to avoid the bug of infinity for the time being
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;
    const firstCardWidth = carousel.querySelector('.service-card').offsetWidth;
    const arrowBtns = document.querySelectorAll('.wrapper i');
    const carouselChildrens = [...carousel.children];

    // Get the number of cards that can fit in the carousel at once
    setCardPerView(Math.round(carousel.offsetWidth / firstCardWidth));

    // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
    });

    // Insert copies of the first few cards to the end of the carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML('beforeend', card.outerHTML);
    });

    // Scroll the carousel to an appropriate position to hide the first few duplicate cards on Firefox
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add('dragging');
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove('dragging');
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove('no-transition');
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition');
      }

      clearTimeout(timeoutId);
      if (!wrapper.matches(':hover')) {
        autoPlay();
      }
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      setTimeoutId(setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500));
    };

    autoPlay();

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
    carousel.addEventListener('scroll', infiniteScroll);
    wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseleave', autoPlay);

    return () => {
      // Cleanup event listeners
      arrowBtns.forEach(btn => {
        btn.removeEventListener('click', () => {
          carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
        });
      });

      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
      carousel.removeEventListener('scroll', infiniteScroll);
      wrapper.removeEventListener('mouseenter', () => clearTimeout(timeoutId));
      wrapper.removeEventListener('mouseleave', autoPlay);
    };
  }, [cardPerView, isAutoPlay, timeoutId]);

  const imageArray = [Web_development, Data_Analytics, Transcription_Proofreading, Resume_building, PPT_Presentation, Mechanical_design, Translation]
  const list_of_services_offered = ["Frontend Development", "Power BI Data-analysis", "Transcribing & Proof-reading", "Cover letters & Resume-Building", "PowerPoint Presentations", "Mechanical Designing & Drafting", "English-to-Hindi Translation"]

  return (

    <div className="wrapper" ref={wrapperRef}> 
      <i id="left" class="fa-solid fa-angle-left"></i>

      <div className="Service-cards" ref={carouselRef}>
        <Service service_name={list_of_services_offered[0]} image={imageArray[0]}/>
        <Service service_name={list_of_services_offered[1]} image={imageArray[1]}/>
        <Service service_name={list_of_services_offered[2]} image={imageArray[2]}/>
        <Service service_name={list_of_services_offered[3]} image={imageArray[3]}/>
        <Service service_name={list_of_services_offered[4]} image={imageArray[4]}/>
        <Service service_name={list_of_services_offered[5]} image={imageArray[5]}/>
        <Service service_name={list_of_services_offered[6]} image={imageArray[6]}/>
        <Service service_name={list_of_services_offered[6]} image={imageArray[6]}/>
      </div>

      <i id="right" class="fa-solid fa-angle-right"></i>
    </div>
  );
};

export default CarouselComponent;
