import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">联系我们</h1>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* 联系信息 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">联系方式</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">地址</h3>
                <p className="text-text-secondary">北京市朝阳区xxx街道xxx号</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">电话</h3>
                <p className="text-text-secondary">123-456-7890</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">邮箱</h3>
                <p className="text-text-secondary">info@ai-pbl.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">工作时间</h3>
                <p className="text-text-secondary">周一至周五: 9:00 - 18:00</p>
                <p className="text-text-secondary">周六至周日: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">在线咨询</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">电话</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="请输入您的联系电话"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">邮箱</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="请输入您的邮箱地址"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">留言内容</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                  placeholder="请输入您想咨询的内容"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
