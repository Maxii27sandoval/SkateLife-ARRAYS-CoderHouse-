
const html = document.querySelector("#result");
const brands = document.getElementsByName("brand");
const filter = document.getElementsByName("filter");
const form = document.querySelector("#form");
const btnSwitch = document.querySelector('#switch');



const products = [
    { id: 1, name: 'Element section ', brand:'wodoo', price: 20000, img: 'https://i.pinimg.com/564x/6c/c3/30/6cc330f8cd91afebe95dce47d7d6aef3.jpg'},
    { id: 2, name: 'Element Seal ', brand:'wodoo', price: 21000, img: 'https://i.pinimg.com/564x/2c/17/08/2c170882a08f353f10ce8135bf41f476.jpg'},
    { id: 3, name: 'Element Nijah huston night owl', brand:'wodoo', price: 21700, img: 'https://i.pinimg.com/564x/33/df/58/33df586bbdd8bb27194d42492a2bcbce.jpg'},
    { id: 4, name: 'Woodoo Lagoonpink', brand:'wodoo', price: 10800, img: 'https://i.pinimg.com/564x/5f/bd/9e/5fbd9eb4d390f74e1b57a5e47e745374.jpg'},
    { id: 5, name: 'Woodoo bh white & black', brand:'wodoo', price: 14700, img: 'https://i.pinimg.com/564x/35/cd/18/35cd184f7fa9ac68d93ee6f4892d9004.jpg'},
    { id: 6, name: 'Woodoo Skunk', brand:'wodoo', price: 17200, img: 'https://i.pinimg.com/564x/c1/6a/41/c16a41238a277bf376da373557661148.jpg'},
    { id: 7, name: 'Nativos the faces', brand:'wodoo', price: 8000, img: 'https://i.pinimg.com/564x/2b/0f/65/2b0f65687d54fe4c39cea38900cc6e60.jpg'},
    { id: 8, name: 'Nativos giraffe', brand:'wodoo', price: 6700, img: 'https://i.pinimg.com/564x/3f/e5/da/3fe5da1520e4f69347b8913f88bc3a01.jpg'},
    { id: 9, name: 'Nativos bloodvision', brand:'wodoo', price: 5400, img: 'https://i.pinimg.com/564x/c8/dd/0b/c8dd0b11ddca16e70fe46fdedbb5fb58.jpg'},
    { id: 10, name: 'Santa Cruz Screaming Hand', brand:'wodoo', price: 26000, img: 'https://i.pinimg.com/564x/fc/c0/a3/fcc0a3d05484d78a80b6b60d4292e5ce.jpg'},
    { id: 11, name: 'Santa Cruz Gross Out', brand:'wodoo', price: 26600, img: 'https://i.pinimg.com/564x/2e/7b/59/2e7b59e1828e444bae7f9b6539eed639.jpg'},
    { id: 12, name: 'Santa Cruz Hand', brand:'wodoo', price: 28000, img: 'https://i.pinimg.com/564x/a5/06/3c/a5063c3497a5fd137b16c00d8e452b5e.jpg'},
    { id: 13, name: 'Birdhouse Team Blue', brand:'wodoo', price: 24700, img: 'https://i.pinimg.com/564x/00/35/c9/0035c90a71f31eeec0783eb1cbc4e4ae.jpg'},
    { id: 14, name: 'Birdhouse Eagle', brand:'wodoo', price: 29000, img: 'https://i.pinimg.com/564x/6e/e1/ca/6ee1caacf347507593173c886f154ed8.jpg'},
    { id: 15, name: 'Birdhouse LIQUID DEATH', brand:'wodoo', price: 50000, img: 'https://uncrate.com/assets_c/2021/08/liquid-death-tony-hawk-deck-thumb-960xauto-136149.jpg'},
    { id: 16, name: 'Element Evan Smith', brand:'wodoo', price: 25000, img: 'https://i.pinimg.com/564x/82/81/50/82815072b931fc948f722bf0d5fe362d.jpg'},
]

form.addEventListener("submit", (e) => {
    e.preventDefault();
    html.innerHTML = '';

    const brandSelected = [];
    let filterSelected;

    for(brand of brands){
        if(brand.checked){
            brandSelected.push(brand.value)
        }else{
        }
    }

    for(f of filter){
        f.selected ? filterSelected = f : '';
    }

    if(brandSelected.length < 1 || !filterSelected){
        return alert("Por favor Complete el formulario para continuar.")
    }

    const filterBrands = brandSelected.map(brand => products.filter(product => product.brand.toUpperCase() === brand.toUpperCase() ? product : '')).reduce((a,b) => [...a, ...b]);

    const filteredProducts = filterBrands.sort((a, b) => {
        if(filterSelected.value === "menor-mayor"){
            if(a.price < b.price) return -1
            if(a.price > b.price) return 1
            return 0
        }

        if(filterSelected.value === "mayor-menor"){
            if(a.price > b.price) return -1
            if(a.price < b.price) return 1
            return 0
        }
                
        if(filterSelected.value === "wata"){
            if(a.name < b.name) return -1
            if(a.name > b.name) return 1
            return 0
        }

        if(filterSelected.value === "maple"){
            if(a.name > b.name) return -1
            if(a.name < b.name) return 1
            return 0
        }
    })

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {style: 'currency',currency: 'ARS', minimumFractionDigits: 2}).format(price)
    }

    const createHtml = () => {
        return filteredProducts.map(product => {
            html.innerHTML += `
            <div class="product-card" id="product-${product.id}">
                <img src="${product.img}" alt="${product.name}" role="product-image" aria-label="product-image" loading="lazy" class="product-img"/>
                <div class="product-data">
                    <h2 class="product-name">${product.name.toUpperCase()}</h2>
                    <span class="product-price">${formatPrice(product.price)}</span>
                </div>
            </div>
        `})
    }

    return createHtml();
})