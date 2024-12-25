const Team = () => {
  const teachers = [
    {
      name: "范长煜",
      title: "项目负责人",
      description: "拥有多年教育经验，专注于AI教育与创新教学方法研究。",
      image: "https://via.placeholder.com/200x200"
    },
    {
      name: "李泉",
      title: "资深教师",
      description: "具有丰富的PBL教学经验，擅长激发学生的学习兴趣。",
      image: "https://via.placeholder.com/200x200"
    },
    {
      name: "陈安娜",
      title: "课程设计师",
      description: "专注于课程开发与教学设计，致力于创造有趣的学习体验。",
      image: "https://via.placeholder.com/200x200"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">
        我们的团队
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {teachers.map((teacher, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={teacher.image} 
              alt={teacher.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{teacher.name}</h2>
              <p className="text-accent1 mb-4">{teacher.title}</p>
              <p className="text-text-secondary">{teacher.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
