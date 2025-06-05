import React from 'react'
import { useParams } from 'react-router'
import products from '../data/products.json'
import categories from '../data/categories.json'
import { Link } from 'react-router'
import { FaShoppingBasket } from "react-icons/fa";

const Categorized = () => {
    const { categorySlug } = useParams()
    const category = categories.find(cat => cat.slug === categorySlug)

    if (category) 
    {
        const categorizedProducts = products.filter(product => product.categoryId === category.id)

        return (
            <section className='lg:ml-[400px] lg:mr-[100px] mt-[50px]'> 
                <p className='text-2xl w-[97%] m-auto lg:w-auto font-semibold  text-[#4169E1] mb-5'>{category.name}</p>
                <ul className='grid grid-cols-2 w-[97%] m-auto lg:w-auto lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4'>
                {categorizedProducts.map(product =>( 
                    <li
                    key={product.id}
                    className='group bg-zinc-600 rounded-2xl shadow-md hover:shadow-lg/50 hover:shadow-[#4169E1] flex flex-col justify-between'>
                        <Link 
                        to={`/product/${product.slug}`}
                        className='h-full flex flex-col justify-between'>
                            <div className='bg-white rounded-xl h-[230px] p-8 mb-3'>
                                <img className='m-auto w-full h-full group-hover:scale-[1.03] duration-250 object-contain' src={product.image} alt={product.name} loading='lazy'/>
                            </div>
                            <div className='px-5'>
                                <p className='text-white font-semibold text-lg mt-2 mb-1'>{product.name}</p>
                                <ul className='flex flex-wrap gap-1 mb-3'>
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <li>
                                        <p className='text-zinc-300 text-xs font-semibold'>{value} |</p>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className='px-5 flex justify-between mb-5'>
                                <p className='text-[#4169E1] w-[100px] rounded-md text-center bg-white font-semibold text-lg'>{product.price}$</p>
                                <button className='text-white p-2 bg-[#4169E185] rounded-lg duration-150 hover:bg-[#4169E1]'><FaShoppingBasket /></button>
                            </div>
                        </Link>
                    </li>
                    ))}
                </ul>
            </section>
        )
    } 
    else 
    {
        return (
            <section className='w-[500px] m-auto'>
                <p className='font-semibold text-xl'>404</p>
                <p className='font-semibold text-xl'>Category not found</p>
            </section>
        )
    }
}

export default Categorized
