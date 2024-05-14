import { LayoutProps } from '../models/layout';
const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default HomeLayout;