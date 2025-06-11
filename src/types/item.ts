export interface Item {
    id: string
    name: string,
    price: number,
    category: string
    image: Image
}

export interface Image {
    mobile: string,
    tablet: string,
    desktop: string,
    thumbnail: string
}