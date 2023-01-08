import { useRouter } from 'next/router';

const Categories = () => {
  // the category name is in the url
  // we can get it with useRouter
  const category = useRouter().asPath.split('/').slice(2);
  const categoryName = category[0];
  return (
    <div>
      <h1 className='h1-unique'>{categoryName} Games</h1>
      </div>
  );
};

export default Categories;