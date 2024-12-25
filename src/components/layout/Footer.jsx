import { motion } from 'framer-motion';
import { 
  WechatOutlined, 
  EnvironmentOutlined, 
  MailOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import XiaohongshuIcon from '../icons/XiaohongshuIcon';

const Footer = () => {
  return (
    <footer className="bg-[#002B5B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">联系我们</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <WechatOutlined className="mr-2 text-white/90" />
                  <span>微信：xujinhuanli（李老师）</span>
                </li>
                <li className="flex items-center">
                  <EnvironmentOutlined className="mr-2 text-white/90" />
                  <span>地址：武汉市洪山区华中师范大学</span>
                </li>
                <li className="flex items-center">
                  <MailOutlined className="mr-2 text-white/90" />
                  <span>邮箱：459792256@qq.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">关注我们</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <WechatOutlined className="mr-2 text-white/90" />
                  <span>微信公众号：老范和小范</span>
                </li>
                <li className="flex items-center">
                  <VideoCameraOutlined className="mr-2 text-white/90" />
                  <span>视频号：老范和小范</span>
                </li>
                <li className="flex items-center">
                  <XiaohongshuIcon className="mr-2 text-white/90" />
                  <span>小红书号：范老师和小范</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
            <p>© {new Date().getFullYear()} AI+PBL项目制学习. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
