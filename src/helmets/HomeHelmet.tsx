import { Helmet, HelmetProvider } from "react-helmet-async";

export default function HomeHelmet() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Alsafwh_dashboard_forMy</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </HelmetProvider>
  );
}
