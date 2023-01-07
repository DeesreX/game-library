import { useRouter } from 'next/router';
import Menu from './menu';

const Categories = () => {
  // the category name is in the url
  // we can get it with useRouter
  const category = useRouter().asPath.split('/').slice(2);
  const categoryName = category.find((c) => c === 'action')
  return (
    <div>
      <Menu />
      <h1>{categoryName} Games</h1>
      <ul>
        <li>Game 1</li>
        <li>Game 2</li>
        <li>Game 3</li>
      </ul>
    </div>
  );
};

export default Categories;