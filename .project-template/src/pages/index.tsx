export default async function HomePage() {
  return <div>template</div>;
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
