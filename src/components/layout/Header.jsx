import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { WechatOutlined } from '@ant-design/icons';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#002B5B] text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo 区域 */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/brand/logo.png" 
                alt="未来视界教育科技" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">AI+PBL项目制学习</span>
                <span className="text-xs text-white/80">科技点亮教育</span>
              </div>
            </Link>

            {/* 导航菜单 */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-white/80">首页</Link>
              <Link to="/about" className="text-white hover:text-white/80">关于我们</Link>
              <Link to="/cases" className="text-white hover:text-white/80">案例及作品</Link>
              <Link to="/teachers" className="text-white hover:text-white/80">师资介绍</Link>
              <button
                onClick={showModal}
                className="bg-white text-[#002B5B] px-6 py-2 rounded-full hover:bg-white/90 transition-colors"
              >
                立即报名
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* 报名弹窗 */}
      <Modal
        title="联系老师报名"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <div className="py-8 text-center">
          <div className="flex flex-col items-center space-y-6">
            <img 
              src="/images/contact/qrcode-signup.jpg" 
              alt="李老师微信二维码"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
            <div>
              <p className="text-lg font-medium mb-2">李老师微信：xujinhuanli</p>
              <p className="text-gray-500">添加微信，了解更多课程详情</p>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
