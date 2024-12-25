import { motion } from 'framer-motion';
import { 
  RocketOutlined, 
  TeamOutlined, 
  ExperimentOutlined,
  HeartOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: <RocketOutlined className="text-4xl" />,
      title: "AI赋能PBL",
      description: "将人工智能与项目制学习相结合，激发孩子无限潜能",
      color: "text-blue-500"
    },
    {
      icon: <TeamOutlined className="text-4xl" />,
      title: "跨学科融合",
      description: "打破学科界限，培养全面的未来核心素养",
      color: "text-green-500"
    },
    {
      icon: <ExperimentOutlined className="text-4xl" />,
      title: "复杂问题的解决能力",
      description: "培养分析问题、解决问题的综合能力",
      color: "text-orange-500"
    },
    {
      icon: <HeartOutlined className="text-4xl" />,
      title: "社会情感学习",
      description: "培养同理心、团队协作和社交沟通能力",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bg-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          项目特色
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <div className={`${item.color} mb-6`}>{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {item.title}
              </h3>
              <p className="text-text-secondary">
                {item.description}
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/ai-explore"
                  className="inline-block bg-[#002B5B] text-white px-8 py-3 rounded-full hover:bg-[#002B5B]/90 transition-colors"
                >
                  探索更多
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
