import React from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from './Layout'
import Index from './pages/Index'
import NewProducts from './pages/NewProducts'
import Categorized from './pages/Categorized'
import Product from './pages/Product'
import Cart from './pages/Cart'

export const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Index
            },
            {
                path: "/new-products",
                Component: NewProducts
            },
            {
                path: "category/:categorySlug", 
                Component: Categorized
            },
            {
                path: "product/:productSlug",
                Component: Product
            },
            {
                path: "cart",
                Component: Cart
            }
        ]
    }
]) 




