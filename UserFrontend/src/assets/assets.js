// Image Imports
import argon from './argon.jpg'
import c1 from './c1.jpeg'
import coco from './coco.jpg'
import image from './image.png'
import jour from './jour.jpg'
import kera from './kera.jpeg'
import keratin from './keratin.jpeg'
import mask from './mask.png'
import oil from './oil.jpg'
import s1 from './s1.jpg'
import s2 from './s2.jpeg'
import sham from './sham.jpg'
import she from './she.jpeg'
import shea from './shea.jpg'
import shamp from './shamp.jpg'
import mask1 from './mask1.jpg'
import oil1 from './oil1.jpg'
import shampo from './shampo.jpeg'
import minus from './minus.png'
import add from './add.png'
import cross from './cross.png'
import shea1 from './shea1.jpeg'
import kera1 from './kera1.jpeg'
import smile from './smile.png'


// Asset Object
export const assets = {
    argon,
    c1,
    coco,
    smile,
    image,
    jour,
    kera,
    keratin,
    mask,
    mask1,
    oil,
    oil1,
    s1,
    s2,
    sham,
    shampo,
    she,
    shea,
    shamp,
    minus,
    add,
    cross,
    shea1,
    kera1
}

// Category List
export const category_list = [
    {
        category_name: "Keratin Care",
        category_image: kera
    },
    {
        category_name: "Shea Moisture",
        category_image: she
    },
    {
        category_name: "Hair Oils",
        category_image: oil
    },
    {
        category_name: "Hair Masks",
        category_image: mask
    },
    {
        category_name: "Shampoo",
        category_image: sham
    }
]

// Product List
export const product_list = [
    {
        _id: "1",
        name: "Shampoo for Fine Hair",
        image: shampo,
        price: 250,
        description: "Lightweight shampoo designed for fine, flat hair.",
        category: "Shampoo"
    },
    {
        _id: "2",
        name: "Hair Mask for Dry Hair",
        image: mask1,
        price: 234,
        description: "Deep conditioner to restore moisture in dry hair.",
        category: "Hair Masks"
    },
    {
        _id: "3",
        name: "Leave-In Shea Moisture for Fine Hair",
        image: s1,
        price: 450,
        description: "Leave-in formula for detangling and softening fine hair.",
        category: "Shea Moisture"
    },
    {
        _id: "4",
        name: "Leave-In Hair Oil",
        image: oil1,
        price: 235,
        description: "Nourishing oil to add shine and tame frizz.",
        category: "Hair Oils"
    },
    {
        _id: "5",
        name: "Texturizing Hair Keratin",
        image: s2,
        price: 654,
        description: "Keratin treatment to enhance texture and strength.",
        category: "Keratin Care"
    },
    {
        _id: "6",
        name: "Dry Shampoo Foam",
        image: shamp,
        price: 456,
        description: "No-rinse foam to refresh hair instantly.",
        category: "Shampoo"
    },
      {
        _id: "7",
        name: "Shea ultra moist butter",
        image: shea1,
        price: 799,
        description: "Moist butter for dry split end hair",
        category: "Shea Moisture"
    },
     {
        _id: "8",
        name: "Argon oil keratin serum",
        image: kera1,
        price: 899,
        description: "Keratin Serum for long lasting shiny hair",
        category: "Keratin Care"
    }
]
