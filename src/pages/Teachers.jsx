import React from 'react';

const Teachers = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-[#002B5B] mb-6">师资团队（Our Team）</h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            我们拥有一支经验丰富、充满热情、跨学科背景的卓越师资团队，他们是本项目成功的基石。我们深信，优秀的导师不仅能传授知识，更能点燃孩子们的学习热情，引导他们探索未知的世界。这是一个经过科学设计的为期一年的系列项目制学习课程，以培养孩子们的科学素养为核心目标，我们强大的师资团队将全程护航。
          </p>
        </div>

        {/* 梅志罡副教授 - 单独一行 */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/5">
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src="/images/teachers/mei.jpg"
                    alt="梅志罡副教授"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>
              <div className="p-6 md:w-4/5">
                <h3 className="text-xl font-bold text-[#002B5B] mb-2">指导老师：梅志罡副教授</h3>
                <p className="text-gray-600 leading-relaxed">
                  梅教授是著名的公共社会学者、知名媒体评论人、社会公益行动者，并担任武汉市政协常委及三届洪山区人大代表。他拥有深厚的社会学理论功底和丰富的社会实践经验，对社会发展和公共议题有着深刻的洞察力。梅教授将从宏观层面指导项目的开展，为项目提供理论支撑和方向指引，确保项目与社会发展趋势紧密结合，培养孩子们的社会责任感和公民意识。他的参与，为本项目注入了更深层次的社会意义和价值。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 其他核心导师 - 两行两列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 范长煜副教授 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <div className="aspect-[3/4] bg-gray-100">
                  <img
                    src="/images/teachers/fan.jpg"
                    alt="范长煜副教授"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>
              <div className="p-4 sm:w-2/3">
                <h3 className="text-lg font-bold text-[#002B5B] mb-2">范长煜副教授</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  范教授是南京大学社会学博士，现任华中师范大学副教授，是一位资深的PBL儿童教育学者。他长期致力于PBL教学法的研究与实践，拥有丰富的儿童教育经验。
                </p>
              </div>
            </div>
          </div>

          {/* 陈安娜副教授 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <div className="aspect-[3/4] bg-gray-100">
                  <img
                    src="/images/teachers/chen.jpg"
                    alt="陈安娜副教授"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>
              <div className="p-4 sm:w-2/3">
                <h3 className="text-lg font-bold text-[#002B5B] mb-2">陈安娜副教授</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  陈安娜老师拥有香港中文大学社会福利哲学博士学位，并曾于加州大学伯克利分校担任访问学生学者。现任华中师范大学副教授。
                </p>
              </div>
            </div>
          </div>

          {/* 吴耀建博士 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <div className="aspect-[3/4] bg-gray-100">
                  <img
                    src="/images/teachers/wu.jpg"
                    alt="吴耀建博士"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>
              <div className="p-4 sm:w-2/3">
                <h3 className="text-lg font-bold text-[#002B5B] mb-2">吴耀建博士</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  吴耀建老师拥有香港浸会大学博士后经历，拥有深厚的学术背景和研究能力。他的加入将为本项目带来更前沿的学术视野和研究方法。
                </p>
              </div>
            </div>
          </div>

          {/* 李泉老师 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <div className="aspect-[3/4] bg-gray-100">
                  <img
                    src="/images/teachers/li.jpg"
                    alt="李泉老师"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>
              <div className="p-4 sm:w-2/3">
                <h3 className="text-lg font-bold text-[#002B5B] mb-2">李泉老师</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  李泉老师是武汉大学文学学士，同时也是一位资深的PBL儿童教育学者和未来视界教育科技的主理人。她拥有丰富的PBL实践经验。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 志愿者团队 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-[#002B5B] mb-4">志愿者团队</h3>
          <p className="text-gray-600 leading-relaxed">
            我们还将有一支由华中师范大学本科生和研究生组成的专业且充满爱心的志愿者团队加入。他们将为项目提供辅助支持，与孩子们进行互动和交流，为孩子们创造更丰富的学习体验。同时，我们也热烈欢迎有教育热情和责任心的家长们加入我们的志愿者团队，共同为孩子们的成长贡献力量。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teachers; 