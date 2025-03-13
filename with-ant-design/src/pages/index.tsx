import HomePageContent from '../components/HomePageContent';

export default async function HomePage() {
  return <HomePageContent />;
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
