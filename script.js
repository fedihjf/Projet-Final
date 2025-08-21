// Product Data
const products = [
    // Football
    { id: 'barca-home', name: 'FC Barcelona Home Kit 2025', price: 100, image: 'https://foot-star.com/wp-content/uploads/2024/07/Maillot-Barca-2024-2025-Domicile-Match-1-1.jpg', category: 'Football' },
    { id: 'barca-away', name: 'FC Barcelona Away Kit 2025', price: 80, image: 'https://www.foot-sport.com/cdn/shop/files/Maillot-Barca-2024-2025-Exterieur.jpg?v=1744234456', category: 'Football' },
    { id: 'real-home', name: 'Real Madrid Home Kit 2026', price: 100, image: 'https://ultimefoot.fr/cdn/shop/files/WhatsAppImage2025-06-11a00.37.32_54565b8c.jpg?v=1749654509&width=1500', category: 'Football' },
    { id: 'real-away', name: 'Real Madrid Away Kit 2026', price: 80, image: 'https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0920_1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50', category: 'Football' },
    { id: 'bayern-home', name: 'Bayern Munich Home Kit 2026', price: 100, image: 'https://thumblr.uniid.it/product/396781/19bdfc0449e7.jpg?width=3840&format=webp&q=75', category: 'Football' },
    { id: 'bayern-away', name: 'Bayern Munich Away Kit 2026', price: 80, image: 'https://numeroo10.com/cdn/shop/files/IMG-20250512-WA0017.jpg?v=1747323768', category: 'Football' },
    { id: 'city-home', name: 'Manchester City Home Kit 2026', price: 100, image: 'https://thumblr.uniid.it/product/400427/465eb64e644a.jpg?width=3840&format=webp&q=75', category: 'Football' },
    { id: 'city-away', name: 'Manchester City Away Kit 2026', price: 80, image: 'https://foot-star.com/wp-content/uploads/2025/07/Maillot-Manchester-City-Exterieur-2025-2026-Femme-1.jpg', category: 'Football' },
    { id: 'liverpool-home', name: 'Liverpool Home Kit 2026', price: 100, image: 'https://thumblr.uniid.it/product/397044/d1eda93d45bb.jpg?width=3840&format=webp&q=75', category: 'Football' },
    { id: 'liverpool-away', name: 'Liverpool Away Kit 2026', price: 80, image: 'https://footdealer.co/wp-content/uploads/2025/08/Maillot-Liverpool-Exterieur-2025-2026-1.jpg', category: 'Football' },
    { id: 'arsenal-home', name: 'Arsenal Home Kit 2026', price: 100, image: 'https://foot-star.com/wp-content/uploads/2025/05/Maillot-Arsenal-Domicile-2025-2026.jpg', category: 'Football' },
    { id: 'arsenal-away', name: 'Arsenal Away Kit 2026', price: 80, image: 'https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=300&h=300&cmp=100&c=999&img=A1116902000&iset=0100&iindex=0007&retBlank=1x1&bg=f6f6f6', category: 'Football' },
    { id: 'milan-home', name: 'AC Milan Home Kit 2026', price: 100, image: 'https://1216451790.rsc.cdn77.org/temp/1749023967_0aacafe35194c0edbd1c65f4ec51c5f9.jpg', category: 'Football' },
    { id: 'milan-away', name: 'AC Milan Away Kit 2026', price: 80, image: 'https://foot-destocking.com/wp-content/uploads/2024/07/1lPiSUlw4CfY5f0.jpg', category: 'Football' },
    { id: 'inter-home', name: 'Inter Milan Home Kit 2026', price: 100, image: 'https://foot-star.com/wp-content/uploads/2025/06/Maillot-Inter-Milan-Domicile-2025-2026-1.jpg', category: 'Football' },
    { id: 'inter-away', name: 'Inter Milan Away Kit 2026', price: 80, image: 'https://foot-star.com/wp-content/uploads/2025/06/Maillot-Inter-Milan-Exterieur-2025-2026-1.jpg', category: 'Football' },
    { id: 'psg-home', name: 'Paris Saint Germain Home Kit 2026', price: 100, image: 'https://foot-star.com/wp-content/uploads/2025/07/Maillot-PSG-Domicile-2025-2026-1-Etoile.jpeg', category: 'Football' },
    { id: 'psg-away', name: 'Paris Saint Germain Away Kit 2026', price: 80, image: 'https://media.foot-store.fr/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_fn8762-101-phsfh001.jpg', category: 'Football' },
    { id: 'est-home', name: 'EST Home Kit 2026', price: 70, image: 'https://thumblr.uniid.it/product/391805/902f7937696f.jpg?width=3840&format=webp&q=75', category: 'Football' },
    { id: 'ca-home', name: 'CA Home Kit 2026', price: 70, image: 'https://clubafricain.com/_next/image?url=https%3A%2F%2Fstorage-tn-1.superverse.tech%2Fscalemerce-stagging%2F1000051297-1754691630446.jpg&w=256&q=75&dpl=dpl_2sauc8NiB52TijjteirXJcP6E25t', category: 'Football' },
    
    // Basketball
    { id: 'bulls-home', name: 'Chicago Bulls Home Kit 2026', price: 85, image: 'https://shop.bulls.com/cdn/shop/files/BULLMZ0051-A_WHITE_c09351a9-d1ed-45f0-a5f2-ca68e022d445.jpg?v=1717694073&width=533', category: 'Basketball' },
    { id: 'lakers-home', name: 'Lakers Home Kit 2026', price: 85, image: 'https://lakersstore.com/cdn/shop/files/reaves_updated_patch-46_1800x1800.png?v=1719861933', category: 'Basketball' },
    { id: 'celtics-home', name: 'Boston Celtics Home Kit 2026', price: 85, image: 'https://www.basketballemotion.com/imagesarticulos/227851/medianas/camiseta-nike-boston-celtics-icon-edition-2023-2024-nino-clover-0.webp', category: 'Basketball' },
    { id: 'cavs-home', name: 'Cleveland Cavaliers Home Kit 2026', price: 85, image: 'https://cdn11.bigcommerce.com/s-fqgrir1l2j/images/stencil/640w/products/6540/8129/black-statement-donovan-mitchell-cavs-authentic-jersey-front__43525.1.jpg', category: 'Basketball' },
    { id: 'warriors-home', name: 'Golden State Warriors Home Kit 2026', price: 185, image: 'https://i.ebayimg.com/images/g/EncAAOSwI~JmF82L/s-l400.jpg', category: 'Basketball' },
    { id: 'heat-home', name: 'Miami Heat Home Kit 2026', price: 85, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/1d4ea876-c48a-443e-a32f-e4479cbb571b/MIA+MNK+DF+SWGMN+JSY+CE2+25.png', category: 'Basketball' },
    
    // Rugby
    { id: 'eagles-home', name: 'Philadelphia Eagles Home Kit', price: 50, image: 'https://images.footballfanatics.com/philadelphia-eagles/philadelphia-eagles-nike-home-limited-jersey-jalen-hurts-mens_ss4_p-13397740+u-3kwkrlrcr1r7zs3magkw+v-1eb7ab45d5f340e0aea30acd4c973bb8.jpg?_hv=2', category: 'Rugby' },
    { id: 'chiefs-home', name: 'Kansas City Chiefs Home Kit 2026', price: 50, image: 'https://images.footballfanatics.com/kansas-city-chiefs/kansas-city-chiefs-home-game-jersey-patrick-mahomes-youth_ss5_p-11898450+u-hqramilzyy0ulviqezjf+v-7d3whhltywdckklypnux.jpg?_hv=2&w=400', category: 'Rugby' },
    { id: 'raiders-home', name: 'Las Vegas Raiders Home Kit 2026', price: 50, image: 'https://images.footballfanatics.com/las-vegas-raiders/las-vegas-raiders-home-game-jersey-custom-youth_ss4_p-11857249+u-9w4jjgk4wt3bl9bdqjbo+v-931ebafd08a14524886f582f0126b392.jpg?_hv=2', category: 'Rugby' },
    { id: 'lions-home', name: 'Detroit Lions Home Kit 2026', price: 50, image: 'https://images.footballfanatics.com/detroit-lions/detroit-lions-nike-home-game-team-colour-jersey-blue-amon-ra-st-brown-youth_ss5_p-201550732+u-wemdgz3vrjayfgyfnbwn+v-biayrpxjxmsjgamzqwwx.jpg?_hv=2&w=400', category: 'Rugby' },
    
    // Sports Gear
    { id: 'adidas-gear', name: 'Adidas Sports Gear', price: 120, image: 'https://i.ebayimg.com/images/g/mbIAAOSwvrxhFTwu/s-l1200.jpg', category: 'Sports Gear' },
    { id: 'nike-gear', name: 'Nike Sports Gear', price: 100, image: 'https://media.newitts.com/cdn/images/products/new-design/800x800/it091400.jpg', category: 'Sports Gear' },
    { id: 'puma-gear', name: 'Puma Sports Gear', price: 80, image: 'https://i.ebayimg.com/images/g/YMUAAOSwA4ZnWF4H/s-l400.jpg', category: 'Sports Gear' },
    { id: 'umbro-gear', name: 'Umbro Sports Gear', price: 70, image: 'https://www.3qsports.co.uk/images/product/l/Umbro%2BPolos.jpg?t=1731938888', category: 'Sports Gear' },
    { id: 'kappa-gear', name: 'Kappa Sports Gear', price: 70, image: 'https://i.ebayimg.com/images/g/LEoAAOSweY5jaqXU/s-l400.jpg', category: 'Sports Gear' },
    { id: 'hummel-gear', name: 'Hummel Sports Gear', price: 60, image: 'https://www.integral-sport.fr/81087-home_default/polo-hmlgo-20.jpg', category: 'Sports Gear' },
];

// State Management
let cart = [];
let quantities = {};

// DOM Elements
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('shoppingCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');
const exploreBtn = document.getElementById('exploreBtn');
const toast = document.getElementById('toast');
const toastContent = document.getElementById('toastContent');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    updateCartUI();
});

// Event Listeners Setup
function setupEventListeners() {
    // Cart toggle
    cartToggle.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    // Mobile menu
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Explore button
    exploreBtn.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Navigation buttons
    document.querySelectorAll('[data-section]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            navigateToSection(section);
            closeMobileMenu();
        });
    });
    
    // Close cart on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeMobileMenu();
        }
    });
}

// Product Rendering
function renderProducts() {
    const categories = ['Football', 'Basketball', 'Rugby', 'Sports Gear'];
    
    categories.forEach(category => {
        const grid = document.querySelector(`[data-category="${category}"]`);
        if (!grid) return;
        
        const categoryProducts = products.filter(p => p.category === category);
        grid.innerHTML = categoryProducts.map(product => createProductCard(product)).join('');
    });
}

function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" />
                <div class="product-overlay">
                    <span>View Details</span>
                </div>
            </div>
            
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                
                <div class="product-price-category">
                    <span class="product-price">${product.price} TND</span>
                    <span class="product-category">${product.category}</span>
                </div>
                
                <div class="quantity-controls">
                    <div class="quantity-group">
                        <button class="quantity-btn" onclick="decrementQuantity('${product.id}')" ${(quantities[product.id] || 0) === 0 ? 'disabled' : ''}>
                            −
                        </button>
                        <span class="quantity-value">${quantities[product.id] || 0}</span>
                        <button class="quantity-btn" onclick="incrementQuantity('${product.id}')">
                            +
                        </button>
                    </div>
                </div>
                
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                    🛒 Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Quantity Management
function incrementQuantity(productId) {
    quantities[productId] = (quantities[productId] || 0) + 1;
    updateProductQuantityDisplay(productId);
}

function decrementQuantity(productId) {
    if (quantities[productId] > 0) {
        quantities[productId] = quantities[productId] - 1;
        updateProductQuantityDisplay(productId);
    }
}

function updateProductQuantityDisplay(productId) {
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (!card) return;
    
    const quantityValue = card.querySelector('.quantity-value');
    const decrementBtn = card.querySelector('.quantity-btn');
    
    quantityValue.textContent = quantities[productId] || 0;
    decrementBtn.disabled = (quantities[productId] || 0) === 0;
}

// Cart Management
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = quantities[productId] || 0;
    
    if (!product || quantity === 0) {
        showToast('Please select quantity', 'Choose how many items you want to add to cart');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Reset quantity after adding to cart
    quantities[productId] = 0;
    updateProductQuantityDisplay(productId);
    updateCartUI();
    
    showToast('Added to cart! 🛒', `${product.name} has been added to your cart`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Removed from cart', 'Item has been removed from your cart');
}

function updateCartUI() {
    updateCartCount();
    updateCartTotal();
    updateCartItems();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(0);
}

function updateCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="empty-icon">🛍️</div>
                <p>Your cart is empty</p>
                <small>Add some amazing sports gear!</small>
            </div>
        `;
        document.getElementById('cartActions').style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-content">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <div class="cart-item-meta">
                            <span class="cart-item-price">${item.price} TND</span>
                            <span class="cart-item-quantity">Qty: ${item.quantity}</span>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">
                        🗑️
                    </button>
                </div>
            </div>
        `).join('');
        document.getElementById('cartActions').style.display = 'flex';
    }
}

// Cart UI Controls
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Mobile Menu
function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('show');
}

function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('show');
}

// Navigation
function navigateToSection(section) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toast Notifications
function showToast(title, description) {
    toastContent.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 4px;">${title}</div>
        <div style="font-size: 0.875rem; color: var(--muted-foreground);">${description}</div>
    `;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Smooth scroll for all anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});