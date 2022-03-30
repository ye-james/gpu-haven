import Filter from './Filter';
import ProductsList from './ProductsList';

function Products() {

  return (
    <div className="flex">
      <div className="border-r-2 basis-1/5 border-primary-light">
        <Filter/>
      </div>
      <div className='basis-4/5'>
        <ProductsList/>
      </div>
    </div>
  )
}

export default Products