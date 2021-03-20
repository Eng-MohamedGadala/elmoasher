

export interface Product {
    id:                  number;
    nameEn:              string;
    nameAr:              string;
    url:                 string;
    urlEn:               null | string;
    metaEn:              null;
    metaAr:              null;
    price:               number;
    type:                Type;
    tax:                 number;
    imageDir:            string;
    image:               string;
    landingPageImage:    string;
    landingPageImageDir: null | string;
    categoryID:          number | null;
    descriptionEn:       string;
    descriptionAr:       string;
    size:                null | string;
    brandID:             number | null;
    calories:            null;
    weight:              number | null;
    components:          null;
    pieces:              null;
    nutritionFactsTable: null;
    expiryDate:          null | string;
    newProduct:          NewProduct;
    available:           number;
    imageName:           null | string;
    branchID:            number;
}

export enum NewProduct {
    No = "no",
    Yes = "yes",
}

export enum Type {
    Product = "product",
}


