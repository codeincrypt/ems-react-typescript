import { LayoutProps } from '../models/layout';
const AdminAuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default AdminAuthLayout;