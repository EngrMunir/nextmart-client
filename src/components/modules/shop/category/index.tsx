
import { ICategory } from '@/types';
import CreateCategoryModal from './CreateCategoryModal';

type TCategoriesProps ={
    categories:ICategory[]
}

const ManageCategories = ({categories}:TCategoriesProps) => {
    return (
        <div>
           <div className='flex items-center justify-between'>
           <h1 className='text-xl font-bold'>Manage Categories</h1>
           <CreateCategoryModal/>
           </div>
        </div>
    );
};

export default ManageCategories;