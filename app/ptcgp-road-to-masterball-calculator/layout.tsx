import { FC, PropsWithChildren } from 'react';

const title = 'Road to Masterball Calculator';

export const metadata = {
  title,
  openGraph: {
    title,
    // images: [`/api/og?title=${title}`],
  },
};

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <h1>Ultraball To Masterball</h1>
      <hr></hr>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
