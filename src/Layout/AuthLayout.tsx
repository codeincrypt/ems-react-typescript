import { LayoutProps } from '../models/layout';
const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default AuthLayout;