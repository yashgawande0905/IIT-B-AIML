import { HelmetProvider, Helmet } from "react-helmet-async";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  // Simple provider — no redirects, no extra logic
  return <HelmetProvider>{children}</HelmetProvider>;
};

const PageMeta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  // Only sets metadata — nothing else.
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default PageMeta;
