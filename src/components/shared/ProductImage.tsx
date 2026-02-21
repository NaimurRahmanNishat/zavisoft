import image from "../../../public/shoes.png";
import Image from 'next/image';

const ProductImage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
        <div>
            <Image src={image} alt='image' width={500} height={500} className='md:rounded-tl-[48px]'/>
        </div>
        <div>
            <Image src={image} alt='image' width={500} height={500} className='md:rounded-tr-[48px]'/>
        </div>
        <div>
            <Image src={image} alt='image' width={500} height={500} className='md:rounded-bl-[48px]'/>
        </div>
        <div>
            <Image src={image} alt='image' width={500} height={500} className='md:rounded-br-[48px]'/>
        </div>
    </div>
  )
}

export default ProductImage;