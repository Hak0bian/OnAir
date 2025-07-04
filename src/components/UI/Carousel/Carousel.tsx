import { useEffect, useRef, useState } from "react"; 
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri"; 
import './Carousel.css'; 
 

const Carousel = ({ images }: { images: string[] }) => { 
    const containerRef = useRef<HTMLDivElement>(null); 
    const [carouselArray, setCarouselArray] = useState<HTMLImageElement[]>([]); 
 
    useEffect(() => { 
        if (!containerRef.current) return; 
 
        const imgElements = Array.from( 
            containerRef.current.querySelectorAll(".galery-item") 
        ) as HTMLImageElement[]; 
 
        setCarouselArray(imgElements); 
        updateGallery(imgElements); 
 
        imgElements.forEach((img) => { 
            img.onclick = () => { 
                const currentIndex = imgElements.indexOf(img); 
                let newArray = [...imgElements]; 
 
                if (currentIndex > 2) { 
                    for (let i = 0; i < currentIndex - 2; i++) { 
                        newArray.push(newArray.shift() as HTMLImageElement); 
                    } 
                } else if (currentIndex < 2) { 
                    for (let i = 0; i < 2 - currentIndex; i++) { 
                        newArray.unshift(newArray.pop() as HTMLImageElement); 
                    } 
                } 
 
                updateGallery(newArray); 
                setCarouselArray(newArray); 
            }; 
        }); 
    }, [images]); 
 
    const updateGallery = (items: HTMLImageElement[]) => { 
        items.forEach((val) => { 
            for (let i = 1; i <= 5; i++) { 
                val.classList.remove(`galery-item-${i}`); 
            } 
        }); 
        items.slice(0, 5).forEach((val, i) => { 
            val.classList.add(`galery-item-${i + 1}`); 
        }); 
    }; 
 
    const handleControlClick = (direction: "previous" | "next") => { 
        if (!carouselArray.length) return; 
        const newArray = [...carouselArray]; 
 
        if (direction === "previous") { 
            newArray.unshift(newArray.pop() as HTMLImageElement); 
        } else { 
            newArray.push(newArray.shift() as HTMLImageElement); 
        } 
 
        updateGallery(newArray); 
        setCarouselArray(newArray); 
    }; 
 
 
    useEffect(() => { 
        const interval = setInterval(() => { 
            handleControlClick("next"); 
        }, 2000); 
        return () => clearInterval(interval); 
    }, [carouselArray]); 
 
    
    return ( 
        <div className="galery"> 
            <div className="galery-container" ref={containerRef}> 
                {images.map((src, index) => ( 
                    <img 
                        key={index} 
                        src={src} 
                        alt={`Slide ${index + 1}`} 
                        className="galery-item" 
                        data-index={index + 1} 
                    /> 
                ))} 
                <button 
                    className="galery-controls-previous" 
                    onClick={() => handleControlClick("previous")} 
                > 
                    <RiArrowLeftWideLine /> 
                </button> 
                <button 
                    className="galery-controls-next" 
                    onClick={() => handleControlClick("next")} 
                > 
                    <RiArrowRightWideLine /> 
                </button> 
            </div> 
        </div> 
    ); 
}; 
 
export default Carousel;