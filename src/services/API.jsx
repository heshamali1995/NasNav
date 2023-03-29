// Images
import ModelImage from "../images/model.jpg";
import Brand from "../images/item-brand.png";
import Color1 from "../images/color1.jpg";
import Color2 from "../images/color2.png";
import Item1 from "../images/item1.png";
import Item2 from "../images/item2.png";
import Item3 from "../images/item3.png";
import Item4 from "../images/item4.png";
import Item5 from "../images/item5.jpg";
import Item6 from "../images/item6.jpg";
import ItemBrand from "../images/item-brand.png";
import Similar1 from "../images/similar1.png";
import Similar2 from "../images/similar2.png";
import Similar3 from "../images/similar3.png";
import Similar4 from "../images/similar4.png";
import Similar5 from "../images/similar5.png";
import Similar6 from "../images/similar6.jpg";
import Similar7 from "../images/similar7.jpg";

export const services = [
    {
        id: "1",
        fullImage: ModelImage,
        brand: Brand,
        text: "Adidas Black T-Shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        category: "Men",
        rating: "4.9",
        numOfRates: "22",
        price: "9,999",
        discount: "30%",
        priceAfterDiscount: "8,000",
        availableSizes: [
            {
                id: 1,
                size: "Small"
            },
            {
                id: 2,
                size: "Medium"
            },
            {
                id: 3,
                size: "Large"
            },
            {
                id: 4,
                size: "X Large"
            },
            {
                id: 5,
                size: "XX Large"
            }
        ],
        colors: [
            {
                id: "1",
                image: Color1
            },
            {
                id: "2",
                image: Color2
            }
        ],
        otherImages: [
            {
                id: "1",
                src: Item1
            },
            {
                id: "2",
                src: Item2
            },
            {
                id: "3",
                src: Item3
            },
            {
                id: "4",
                src: Item4
            },
            {
                id: "5",
                src: Item5
            },
            {
                id: "6",
                src: Item6
            }
        ],
        similarProducts: [
            {
                id: "1",
                image: Similar1,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
                price: "9,999",
                priceAfterDiscount: "8,000",
                discount: "30%",
                brand: ItemBrand,
                rating: "4.9",
                numOfRates: "22",
                pickup: "Genena Mall"
            },
            {
                id: "2",
                image: Similar2,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
                price: "9,999",
                priceAfterDiscount: "8,000",
                discount: "30%",
                brand: ItemBrand,
                rating: "4.9",
                numOfRates: "22",
                pickup: "Genena Mall"
            },
            {
                id: "3",
                image: Similar3,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
                price: "9,999",
                priceAfterDiscount: "8,000",
                discount: "30%",
                brand: ItemBrand,
                rating: "4.9",
                numOfRates: "22",
                pickup: "Genena Mall"
            },
            {
                id: "4",
                image: Similar4,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
                price: "9,999",
                priceAfterDiscount: "8,000",
                discount: "30%",
                brand: ItemBrand,
                rating: "4.9",
                numOfRates: "22",
                pickup: "Genena Mall"
            },
            {
                id: "5",
                image: Similar5,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
                price: "9,999",
                priceAfterDiscount: "8,000",
                discount: "30%",
                brand: ItemBrand,
                rating: "4.9",
                numOfRates: "22",
                pickup: "Genena Mall"
            },
            {
                id: "6",
                image: Similar6,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
                price: "9,999",
                priceAfterDiscount: "8,000",
                discount: "30%",
                brand: ItemBrand,
                rating: "4.9",
                numOfRates: "22",
                pickup: "Genena Mall"
            },
            {
                id: "7",
                image: Similar7,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
                price: "9,999",
                priceAfterDiscount: "8,000",
                discount: "30%",
                brand: ItemBrand,
                rating: "4.9",
                numOfRates: "22",
                pickup: "Genena Mall"
            }
        ]
    }
];