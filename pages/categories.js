import { useRouter } from 'next/router';
import Menu from './menu';

const Categories = () => {
  // the category name is in the url
  // we can get it with useRouter
  const category = useRouter().asPath.split('/').slice(2);
  const categoryName = category[0];
  return (
    <div>
      <Menu />
      <h1>{categoryName} Games</h1>
      </div>
  );
};

export default Categories;