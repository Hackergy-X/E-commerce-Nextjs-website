import Image from 'next/image';
import styles from  '../styles/Product.module.css';
import Link from 'next/link';

const Products = ({product}) => {

    const {title, price, image, id} = product;

    return (
        <div className={styles.product}>
            <div>
                <Image src={image} width="200" height="300" alt=""/>
            </div>
            <ul>
                <li>Title: {title}</li>
                <li>Price: {price}$</li>
            </ul>
            <Link href={`/products/${product.id}`} ><a className="button">More Details</a></Link>
        </div>
    )
}

export default Products;