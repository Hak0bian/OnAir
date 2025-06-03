import './test.css'

import { useEffect, useRef } from 'react';
import './test.css';

const imageCount = 5;
const autoplayDelay = 3000; 
const Test = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const images = slider.querySelectorAll<HTMLImageElement>('.slider__image');
    const next = slider.querySelector<HTMLDivElement>('#next');
    const prev = slider.querySelector<HTMLDivElement>('#prev');
    const sliderInner = slider.querySelector<HTMLDivElement>('.slider__inner');
    let isWheel: ReturnType<typeof setTimeout>;

    const updateImages = (forward = true) => {
      images.forEach((img) => {
        const index = parseInt(img.getAttribute('data-index') || '1', 10);
        const newIndex = forward
          ? index > 1 ? index - 1 : imageCount
          : index < imageCount ? index + 1 : 1;

        const newClass = `image--${newIndex}`;
        img.className = img.className.replace(/image--\d/, '').trim();
        img.setAttribute('data-index', newIndex.toString());
        img.classList.add(newClass);
        img.classList.toggle('active', newIndex === 1);
      });
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      updateImages(e.deltaY > 0);
      const active = slider.querySelector('.active');
      const name = active?.getAttribute('alt') || '';
      clearTimeout(isWheel);
      isWheel = setTimeout(() => {
        alert(name);
      }, 1500);
    };

    const swipedetect = (
      el: HTMLElement,
      callback: (dir: 'left' | 'right') => void
    ) => {
      let startX = 0;
      let startY = 0;
      let startTime = 0;

      const threshold = 150;
      const restraint = 100;
      const allowedTime = 300;

      el.addEventListener(
        'touchstart',
        (e) => {
          const touchobj = e.changedTouches[0];
          startX = touchobj.pageX;
          startY = touchobj.pageY;
          startTime = new Date().getTime();
          e.preventDefault();
        },
        { passive: false }
      );

      el.addEventListener(
        'touchend',
        (e) => {
          const touchobj = e.changedTouches[0];
          const distX = touchobj.pageX - startX;
          const distY = touchobj.pageY - startY;
          const elapsedTime = new Date().getTime() - startTime;

          if (
            elapsedTime <= allowedTime &&
            Math.abs(distX) >= threshold &&
            Math.abs(distY) <= restraint
          ) {
            const dir = distX < 0 ? 'left' : 'right';
            callback(dir);
          }
          e.preventDefault();
        },
        { passive: false }
      );
    };

    // Autoplay setup
    intervalRef.current = setInterval(() => {
      updateImages(true);
    }, autoplayDelay);

    // Event Listeners
    next?.addEventListener('click', () => updateImages(true));
    prev?.addEventListener('click', () => updateImages(false));
    slider.addEventListener('wheel', handleWheel);
    if (sliderInner) {
      swipedetect(sliderInner, (dir) => {
        if (dir === 'left') updateImages(true);
        if (dir === 'right') updateImages(false);
      });
    }

    // Cleanup
    return () => {
      next?.removeEventListener('click', () => updateImages(true));
      prev?.removeEventListener('click', () => updateImages(false));
      slider.removeEventListener('wheel', handleWheel);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div id="slider" className="slider" ref={sliderRef}>
      <div className="slider__inner">
        <img src="https://s1.1zoom.ru/prev2/540/Fields_Sunflowers_Closeup_539973_300x200.jpg" alt="Sunflowers" data-index="1" className="slider__image image--1 active" />
        <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png" alt="AI" data-index="2" className="slider__image image--2" />
        <img src="https://s1.1zoom.ru/prev2/546/Germany_Rivers_Fields_Moselle_Hill_545275_300x200.jpg" alt="Germany" data-index="3" className="slider__image image--3" />
        <img src="https://s1.1zoom.ru/prev2/547/China_Taiwan_Mountains_Forests_Fields_Roads_Night_546672_300x200.jpg" alt="Taiwan" data-index="4" className="slider__image image--4" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Quba_385.jpg/300px-Quba_385.jpg" alt="Mountains" data-index="5" className="slider__image image--5" />
      </div>
    </div>
  );
};

export default Test;