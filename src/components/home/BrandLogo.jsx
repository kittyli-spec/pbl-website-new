import { motion } from 'framer-motion';

const BrandLogo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo 图片 */}
          <motion.img
            src="/images/brand/logo.png" // 确保添加实际的 logo 图片
            alt="AI+PBL项目制学习"
            className="w-48 md:w-64 mb-6" // 调整 logo 大小
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* 品牌标语 */}
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-primary text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            AI+PBL项目制学习
          </motion.h1>
          
          {/* 品牌描述 */}
          <motion.p 
            className="text-gray-600 text-center max-w-2xl text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            让每个孩子在AI与PBL的结合中探索无限可能
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogo; 