import { motion } from 'framer-motion';
import { Carousel } from 'antd';
import { useEffect, useState } from 'react';

const Banner = () => {
  const bannerItems = [
    {
      image: "/images/banner/banner1.jpg",
      title: "携手AI，智探世界",
      subtitle: "让孩子在AI与PBL的结合中探索无限可能",
      description: "通过项目制学习激发创造力，培养未来核心素养",
      overlayOpacity: "bg-opacity-50"
    },
    {
      image: "/images/banner/banner2.jpg",
      title: "快乐学习，智慧成长",
      subtitle: "在动手实践中培养解决问题的能力",
      description: "让每个孩子都能找到自己的兴趣所在",
      overlayOpacity: "bg-opacity-40"
    },
    {
      image: "/images/banner/banner3.jpg",
      title: "创新思维，科技未来",
      subtitle: "培养面向未来的核心竞争力",
      description: "让科技创新成为孩子成长的助推器",
      overlayOpacity: "bg-opacity-30"
    }
  ];

  // 添加图片预加载功能
  useEffect(() => {
    bannerItems.forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  // 添加图片加载状态
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <section className="relative">
      <Carousel
        autoplay
        effect="fade"
        dots={{ className: "custom-dots" }}
        autoplaySpeed={5000}
      >
        {bannerItems.map((item, index) => (
          <div key={index} className="relative h-[80vh] max-h-[800px] min-h-[600px]">
            {/* 图片容器 */}
            <div className="absolute inset-0 overflow-hidden">
              {/* 图片加载占位 */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              
              {/* 实际图片 */}
              <img 
                src={item.image} 
                alt={item.title}
                className={`
                  w-full h-full object-cover object-center transform scale-[1.02]
                  transition-all duration-1000 hover:scale-[1.05]
                  ${imagesLoaded ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  objectPosition: '50% 30%'
                }}
                onLoad={(e) => {
                  e.target.classList.add('loaded');
                  setImagesLoaded(true);
                }}
              />

              {/* 渐变遮罩 */}
              <div 
                className={`
                  absolute inset-0 
                  bg-gradient-to-r from-black/70 via-black/50 to-black/30
                  ${item.overlayOpacity}
                `}
              />
            </div>

            {/* 文字内容 */}
            <div className="relative h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="container mx-auto px-4 h-full flex flex-col justify-center"
              >
                <div className="max-w-3xl">
                  <h1 className="
                    text-4xl md:text-5xl lg:text-6xl 
                    font-bold mb-4 text-white
                    leading-tight
                  ">
                    {item.title}
                  </h1>
                  <p className="
                    text-lg md:text-xl lg:text-2xl 
                    mb-6 text-white/90
                    leading-relaxed
                  ">
                    {item.subtitle}
                  </p>
                  <p className="
                    text-base md:text-lg 
                    mb-8 text-white/80
                    max-w-2xl
                  ">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      bg-primary hover:bg-primary-dark 
                      text-white px-8 py-3 
                      rounded-full text-lg 
                      inline-block w-max
                      shadow-lg hover:shadow-xl
                      transition-all duration-300
                    "
                  >
                    了解更多
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* 自定义轮播指示器样式 */}
      <style jsx>{`
        .custom-dots {
          bottom: 30px !important;
          z-index: 20;
        }
        .custom-dots li {
          margin: 0 6px;
        }
        .custom-dots li button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white !important;
          opacity: 0.5;
          transition: all 0.3s;
        }
        .custom-dots li.slick-active button {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Banner; 