import { motion } from 'framer-motion';
import { 
  RocketOutlined, 
  HeartOutlined, 
  TeamOutlined, 
  GlobalOutlined,
  BulbOutlined,
  UserOutlined,
  BookOutlined,
  StarOutlined,
  SafetyOutlined,
  HomeOutlined
} from '@ant-design/icons';

const About = () => {
  const coreValues = [
    {
      icon: <RocketOutlined className="text-3xl" />,
      title: "创新与探索",
      description: "鼓励孩子在实践中解决问题，培养他们探索未知的勇气与能力。"
    },
    {
      icon: <TeamOutlined className="text-3xl" />,
      title: "合作与共享",
      description: "团队协作精神，让孩子们在学会共同学习的过程中分享、分享和合作。"
    },
    {
      icon: <HeartOutlined className="text-3xl" />,
      title: "个性化关注",
      description: "孩子都是独特的，我们关注每个孩子的个性化成长需求，提供定制化的教育方案。"
    },
    {
      icon: <GlobalOutlined className="text-3xl" />,
      title: "社会责任",
      description: "我们不仅关注孩子的学习成绩，更关注他们的社会情感发���和人生价值观的培养。"
    }
  ];

  const advantages = [
    {
      icon: <BulbOutlined className="text-3xl" />,
      title: "创新的教育模式",
      description: "通过项目式学习（PBL）与人工智能的结合，我们打破传统教育的惯例，将学习与实际问题紧密联系，孩子们在解决现实问题中获得成长和成就感。"
    },
    {
      icon: <UserOutlined className="text-3xl" />,
      title: "个性化学习体验",
      description: "每个孩子都有独特的兴趣和学习节奏。我们的AI技术能够根据孩子的学习进展和特点，提供定制化的学习支持，让每个孩子都在适合自己的节奏中茁壮成长。"
    },
    {
      icon: <BookOutlined className="text-3xl" />,
      title: "跨学科项目与实践导向",
      description: "PBL的本质是跨学科的，通过整合不同学科的知识，孩子们能够从多个角度理解问题，提升他们的综合能力。"
    },
    {
      icon: <TeamOutlined className="text-3xl" />,
      title: "专业的师资团队",
      description: "我们拥有一支由经验丰富的教育专家、AI技术专家和实践导师组成的强大团队。范长煜老师（211高校副教授）及教师团队（985、211研究生等）等资深教育工作者帮助孩子们实现AI知识启航。"
    }
  ];

  const whyChooseUs = [
    {
      icon: <StarOutlined className="text-3xl" />,
      title: "未来导向",
      description: "我们不仅关注当前的学业成绩，更关注孩子未来战斗力的培养。"
    },
    {
      icon: <RocketOutlined className="text-3xl" />,
      title: "创新与探索精神",
      description: "在我们的项目中，孩子们通过自主探究与实践，不断提升自我，学习独立思考。"
    },
    {
      icon: <SafetyOutlined className="text-3xl" />,
      title: "温暖的学习氛围",
      description: "我们创造了一个温暖、包容、充满支持的学习环境，鼓励孩子们勇于表达，允许他们在成长中犯错。"
    },
    {
      icon: <HomeOutlined className="text-3xl" />,
      title: "家长参与与支持",
      description: "我们鼓励家长积极参与到孩子的学习过程中，通过活动与交流，与孩子共同成长。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bg-light">
      {/* 标题区域 */}
      <div className="relative w-full bg-gradient-to-r from-[#002B5B] to-[#0056B3] text-white overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#002B5B]/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="py-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold mb-6"
              >
                关于未来视界教育科技公司
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-24 h-1 bg-white/50 mx-auto rounded-full"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container mx-auto px-4 -mt-10">
        {/* PBL+AI项目介绍 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">我们的PBL+AI项目</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              我们的PBL+AI项目是一种全新的教育模式，将项目式学习（PBL）与人工智能技术相结合，帮助孩子们通过实践、探索与创新，解决现实问题，提升他们的综合素质。我们通过AI技术为孩子提供个性化的学习支持，帮助他们在跨学科的活动中不断发现自我、锻炼能力和思维能力。
            </p>
          </div>
        </motion.section>

        {/* 教育理念 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">教育理念</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              我们坚信每个孩子都是拥有无限潜力的创新者。在我们的PBL+AI项目中教育不仅是知识的传授，而是通过任务驱动、团队合作、实践探索的方式，让孩子们成长。我们相信，这种教育方式能够提升孩子们的批判性思维、解决问题的学习能力和协作精神，激发他们的兴趣，培养他们在未来社会中不可或缺的核心能力。
            </p>
          </div>
        </motion.section>

        {/* 我们的优势 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-8">我们的优势</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-bg-light hover:shadow-md transition-shadow"
                >
                  <div className="text-primary">{advantage.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-text-secondary">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 为什么选择我们 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-8">为什么选择我们</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-bg-light hover:shadow-md transition-shadow"
                >
                  <div className="text-primary">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-text-secondary">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 核心价值观 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-8">核心价值观</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-bg-light hover:shadow-md transition-shadow"
                >
                  <div className="text-primary">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-text-secondary">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 联系我们 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pb-16 text-center"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">联系我们</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            如果您对我们的PBL+AI项目有任何问题或想要了解更多信息，欢迎联系我们！
            <br />我们期待与您一起见证孩子们的成长与飞跃。
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
