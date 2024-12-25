import React from 'react';

const AIExplore = () => {
  const activities = [
    {
      title: '变化/差异：植物生长"智观"记',
      description: '通过种植红薯和石蒜，观察它们如何生长和变化，了解植物如何随着环境的变化而调整。利用AI工具，记录和分析植物的生长过程，培养观察力和数据分析能力。',
      image: '/images/activities/plant-growth.jpg'
    },
    {
      title: '系统：生态鱼缸"智造"记',
      description: '自己动手设计并搭建一个生态鱼缸，探索自然生态系统的相互作用。通过这个活动，学会如何维持生态平衡，理解生物之间的相互依赖，并使用AI进行模拟和分析。',
      image: '/images/activities/eco-aquarium.jpg'
    },
    {
      title: '路径：来自哪里"智寻"记',
      description: '带领孩子们回溯自己家庭的历史，探索家族与社区的迁移故事。利用地图工具，分析和呈现家人、社区与社会的联系，理解个人与社会发展路径的深远意义。',
      image: '/images/activities/family-history.jpg'
    },
    {
      title: '��程：3D木屋"智建"记',
      description: '设计并建造一座3D小木屋，亲自参与到建筑的创意和实现过程中。通过3D建模软件将创意变为现实，锻炼动手能力和空间思维。',
      image: '/images/activities/3d-house.jpg'
    },
    {
      title: '目标：生涯成败"智查"记',
      description: '探索大学生的学习与职业目标，通过数据分析、访谈和调查，帮助理解如何设定个人目标，制定人生规划，为未来职业生涯做好准备。',
      image: '/images/activities/career-planning.jpg'
    },
    {
      title: '偏好/品位：舌尖香茗"智作"记',
      description: '走进茶文化的世界，在福建的茶园中探索茶叶的种植、制作和冲泡过程，通过品茶与创意茶饮的调配，提升对茶文化的理解和审美品位。',
      image: '/images/activities/tea-culture.jpg'
    },
    {
      title: '可续：资源再用"智生"记',
      description: '通过废物回收和资源再利用的实践，学习如何减少浪费，理解可持续发展的重要性。设计创新的环保项目，提升环保意识和社会责任感。',
      image: '/images/activities/recycling.jpg'
    },
    {
      title: '习惯：日常生活"智养"记',
      description: '反思和记录自己的日常习惯，探索如���通过健康的生活方式、良好的时间管理和自律，促进个人成长。通过福格行为模型，学会养成有益于健康和学习的好习惯。',
      image: '/images/activities/daily-habits.jpg'
    },
    {
      title: '价值：重要事实"智评"记',
      description: '分析生活中物品的价值，通过对比和讨论，理解什么才是真正重要的东西。通过使用AI工具进行多维度的价值评估，培养判断力和价值观。',
      image: '/images/activities/value-assessment.jpg'
    },
    {
      title: '可能：未来已来"智规"记',
      description: '学习人工智能的基本概念，探索它如何改变我们的生活和社会。通过设计未来愿景，学会如何利用AI解决现实问题，积极思考和规划未来的创新与发展。',
      image: '/images/activities/future-planning.jpg'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-[#002B5B] mb-6">携手AI，智探世界——10大主题系列活动</h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            在这里，我们为孩���们设计了10个创新的PBL（项目式学习）活动，通过与人工智能（AI）深度融合，带领孩子们在科学、艺术、社会与未来之间架起桥梁，激发他们的创新力和实践力。
          </p>
        </div>

        {/* 系列活动展示 */}
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#002B5B] mb-4">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 活动特色 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-6">为什么选择"携手AI，智探世界"？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-[#002B5B] pl-4">
                <h3 className="font-bold text-[#002B5B] mb-2">创新与跨学科结合</h3>
                <p className="text-gray-600 text-sm">结合科学、艺术、环保、社会等多个领域，通过跨学科的学习方式，帮助孩子们在实际探索中锻炼综合能力。</p>
              </div>
              <div className="border-l-4 border-[#002B5B] pl-4">
                <h3 className="font-bold text-[#002B5B] mb-2">人工智能赋能，个性化学习</h3>
                <p className="text-gray-600 text-sm">每个活动都通过AI工具来提升学习体验，从数据分析到创意设计，在实践中学会使用AI技术。</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#002B5B] pl-4">
                <h3 className="font-bold text-[#002B5B] mb-2">动手实践，激发创造力</h3>
                <p className="text-gray-600 text-sm">每一个项目都是动手实践的机会，帮助从构思到执行，亲自解决实际问题，体验创意和���计的乐趣。</p>
              </div>
              <div className="border-l-4 border-[#002B5B] pl-4">
                <h3 className="font-bold text-[#002B5B] mb-2">家长与孩子共同成长</h3>
                <p className="text-gray-600 text-sm">鼓励家长与孩子一起参与，共同完成任务。通过合作与分享，建立更紧密的亲子关系。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIExplore; 