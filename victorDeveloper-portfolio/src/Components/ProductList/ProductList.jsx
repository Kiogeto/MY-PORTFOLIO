import './ProductList.css'
import Product from '../Product/Product';
import {products} from '../../data'

function ProductList(){
    return(
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Cretae & inspire. It's Victor</h1>
                <p className="pl-desc">
                I'm a dedicated web developer with a passion for creating innovative and user-friendly digital experiences. I enjoy combining creativity with technical expertise to deliver projects that not only meet functional requirements but also inspire and engage users. My goal is to drive innovation and make a lasting impact.
            </p>

            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>

                ))}
                
                
            </div>
        </div>
    );

}
export default ProductList
