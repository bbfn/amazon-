import data from '../data.js';
const HomeScreen = {
    render: () =>{
        const {products} = data;
        return `
        <ul class="products">
            ${products.map(
                 (product) => `
            <li>
            <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="${product.Image}" alt="${product.name}"/>
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-brand">
                            ${product.brand}
                        </div>
                        <div class="product-price">
                            ksh ${product.price}/=
                        </div>
                    </div>

            </li>

           ` )
        .join('\n')
        }
        `;
    },
};
export default HomeScreen;