import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RightOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`
          ${className}
          transition-opacity duration-500
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        onError={() => setImgSrc('/images/cases/fallback.jpg')}
        {...props}
      />
    </div>
  );
};

const CaseStudies = () => {
  const singleCases = [
    {
      title: "我的端午之书",
      drivingQuestion: "如何制作一本书来向朋友展示我家乡的端午节习俗",
      image: "/images/cases/single/dragon-boat/cover.jpg",
      tag: "文化传承",
      links: [
        {
          title: "上篇：端午习俗探索",
          url: "https://mp.weixin.qq.com/s/gf2tLai_Rdzm_DNDiY5o3Q?token=1657170634&lang=zh_CN"
        },
        {
          title: "下篇：端午绘本制作",
          url: "https://mp.weixin.qq.com/s/88kg4ie0M1-xOp3v2EzP0Q?token=1657170634&lang=zh_CN"
        }
      ],
      details: {
        coverImage: "/images/cases/single/dragon-boat/cover.jpg",
        gallery: [
          "/images/cases/single/dragon-boat/detail-1.jpg",
          "/images/cases/single/dragon-boat/detail-2.jpg"
        ]
      }
    },
    {
      title: "街区商铺探索调查",
      drivingQuestion: "如何经营好一家街区店铺",
      image: "/images/cases/single/neighborhood/cover.jpg",
      tag: "商业认知",
      links: [
        {
          title: "上篇：街区探索初体验",
          url: "https://mp.weixin.qq.com/s/ST-RJ2XZo4OCNsTdYeLLCg?token=1657170634&lang=zh_CN"
        },
        {
          title: "下篇：商业街铺奥秘探索",
          url: "https://mp.weixin.qq.com/s/nes3Bj71AKQdD4SNBlZBmw?token=1657170634&lang=zh_CN"
        }
      ],
      details: {
        coverImage: "/images/cases/single/neighborhood/cover.jpg",
        gallery: [
          "/images/cases/single/neighborhood/detail-1.jpg",
          "/images/cases/single/neighborhood/detail-2.jpg"
        ]
      }
    }
  ];

  const seriesCase = {
    title: "携手AI，智探世界",
    drivingQuestion: "通过十大主题项目，探索AI与现实世界的无限可能",
    image: "/images/cases/series/cover.jpg",
    path: "/cases/ai-explorer-series",
    tag: "系列活动",
    themes: [
      {
        name: "自然科学",
        image: "/images/cases/series/themes/nature.jpg"
      },
      {
        name: "社会科学",
        image: "/images/cases/series/themes/social.jpg"
      }
    ]
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-center mb-8 text-primary"
        >
          精选案例
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 单个案例卡片 */}
          {singleCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all h-full flex flex-col"
            >
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover rounded-t-lg"
                />
                <span className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 text-sm rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  驱动问题：{item.drivingQuestion}
                </p>
                {item.links ? (
                  <div className="space-y-2">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 text-sm hover:text-blue-600 transition-colors group"
                      >
                        <span className="mr-1">{link.title}</span>
                        <RightOutlined className="text-xs group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <Link to={item.path} className="flex items-center text-blue-500 text-sm">
                    查看详情
                    <RightOutlined className="ml-1" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}

          {/* 系列活动卡片 */}
          <Link to={seriesCase.path} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all h-full flex flex-col"
            >
              <div className="relative">
                <img 
                  src={seriesCase.image} 
                  alt={seriesCase.title}
                  className="w-full aspect-[4/3] object-cover rounded-t-lg"
                />
                <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-sm rounded-full">
                  {seriesCase.tag}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {seriesCase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {seriesCase.drivingQuestion}
                </p>
                <div className="space-y-2 flex-1">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                    <AppstoreOutlined className="mr-2" />
                    十大探索主题
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {seriesCase.themes.slice(0, 6).map((theme, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {theme.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-blue-500 text-sm mt-4">
                  探索更多
                  <RightOutlined className="ml-1" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
