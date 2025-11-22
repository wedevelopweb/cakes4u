
// Make sure the script runs only after the page is loaded
document.addEventListener("DOMContentLoaded", () => {

    const PHONE_NUMBER = "919711188251";
    const DEFAULT_MESSAGE = "Hello Ranjana! I want to order a cake. Please help me with the details.";

    // WhatsApp Click
    const whatsappBtn = document.getElementById("whatsapp-btn");
    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", () => {
            const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
            window.open(url, "_blank");
        });
    }

    // Instagram Click
    const instagramBtn = document.getElementById("instagram-btn");
    if (instagramBtn) {
        instagramBtn.addEventListener("click", () => {
            const instaUrl = "https://www.instagram.com/cakes4uofficial";
            window.open(instaUrl, "_blank");
        });
    }

});

const PHONE_NUMBER = '9711188251';
const DEFAULT_MESSAGE_TEMPLATE = 'Hello Ranjana! I want to order a cake. Please help me with the details.';

const cakeFlavors = {
    classic: ['Vanilla Cake', 'Pineapple Cake', 'Black Forest Cake', 'Strawberry Cake', 'Butterscotch Cake', 'Chocolate Cake', 'Fruit Cake'],
    premium: ['Chocolate Butterscotch Cake', 'Rasmalai Cake', 'Oreo Cake', 'White Forest Cake', 'Rabdi Jalebi Cake', 'Blueberry Cake', 'Mango Cake', 'Mocha Cake', 'Black Currant Cake'],
    deluxe: ['Red Velvet Cake', 'Blue Velvet Cake', 'Chocolate Truffle Cake', 'White Truffle Cake', 'Chocolate Hazelnut Cake', 'Nutella Cake', 'Candy Cake', 'Kaju Katli Cake', 'Chocobar Cake']
};

const categoryData = {
    cupcakes: ['images/7.jpg?w=800', 'images/8.jpg?w=800', 'images/9.jpg?w=800', 'images/10.jpg?w=800', 'images/11.jpg?w=800'],
    brownies: ['images/12.jpeg?w=800', 'images/13.jpeg?w=800', 'images/14.jpeg?w=800', 'images/15.jpeg?w=800', 'images/16.jpg?w=800'],
    dessertjars: ['images/17.jpg?w=800', 'images/18.jpg?w=800', 'images/19.jpg?w=800', 'images/20.jpg?w=800', 'images/21.jpg?w=800'],
    hampers: ['images/23.jpg?w=800', 'images/22.jpg?w=800', 'images/24.jpg?w=800']
};

const goToWhatsapp = (e) => {
    e.preventDefault();
    if (!PHONE_NUMBER) {
        alert('Please configure the WhatsApp phone number. Search for "PHONE_NUMBER" in the HTML file.');
        return;
    }
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(DEFAULT_MESSAGE_TEMPLATE)}`;
    window.open(whatsappUrl, '_blank');
}
let testimonials = [
    { name: 'Priya Sharma', city: 'Delhi', text: 'Ordered a chocolate truffle cake for my daughter\'s birthday and it was absolutely divine! The presentation was stunning and every guest asked where it was from. Ranjana truly puts her heart into every creation.', date: '2024-10-15', image: 'images/27.jpg' },
    { name: 'Rahul Verma', city: 'Faridabad', text: 'The gift hamper is absolutely stunning! Perfect for every occasion, and the presentation is top-notch. Everything inside was fresh, thoughtfully curated, and beautifully arranged. Definitely ordering again!', date: '2024-10-20', image: 'images/26.jpeg' },
    { name: 'Anjali Kapoor', city: 'Gurgaon', text: 'Thank you soo much. And thank you for adding that spark to my engagement. Everyone the taste.', date: '2024-10-28', image: 'images/25.jpg' },
    { name: 'Vikram Singh', city: 'Noida', text: 'Ordered cupcakes for a corporate event and received so many compliments! Professional service, timely delivery, and most importantly - delicious treats. Thank you Ranjana!', date: '2024-11-02', image: 'images/28.jpg' },
    { name: 'Meera Patel', city: 'Faridabad', text: 'Hello aunty, everyone loved the cake. It was absolutely delicious. Thank you very much', date: '2024-11-08', image: 'images/29.jpg' }
];

document.addEventListener('DOMContentLoaded', function () {
    const orderNowBtn = document.getElementById('orderNowBtn');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const categoryModal = document.getElementById('categoryModal');
    const closeCategoryModalBtn = document.getElementById('closeCategoryModal');
    const categoryModalTitle = document.getElementById('categoryModalTitle');
    const categoryImages = document.getElementById('categoryImages');
    const cakeFlavorsModal = document.getElementById('cakeFlavorsModal');
    const closeCakeFlavorsModalBtn = document.getElementById('closeCakeFlavorsModal');
    const cakeFlavorsModalTitle = document.getElementById('cakeFlavorsModalTitle');
    const cakeFlavorsList = document.getElementById('cakeFlavorsList');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightboxBtn = document.getElementById('closeLightbox');
    const testimonialModal = document.getElementById('testimonialModal');
    // const addTestimonialBtn = document.getElementById('addTestimonialBtn');
    // const closeTestimonialModalBtn = document.getElementById('closeTestimonialModal');
    // const testimonialForm = document.getElementById('testimonialForm');
    // const successMessage = document.getElementById('successMessage');
    const testimonialSlider = document.getElementById('testimonialSlider');
    const navItems = document.querySelectorAll('.nav-item');
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuTabs = document.querySelectorAll('.menu-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openLightbox(imgSrc) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
    }

    function closeLightboxFn() {
        lightbox.classList.remove('active');
        setTimeout(() => lightboxImg.src = '', 300);
    }

    orderNowBtn.addEventListener('click', goToWhatsapp);

    scrollIndicator.addEventListener('click', () => {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const cakeType = tab.dataset.cakeType;
            const flavors = cakeFlavors[cakeType] || [];
            const titles = { classic: 'Classic Cakes', premium: 'Premium Cakes', deluxe: 'Deluxe Cakes' };

            cakeFlavorsModalTitle.textContent = titles[cakeType];
            cakeFlavorsList.innerHTML = '';

            flavors.forEach(flavor => {
                const flavorDiv = document.createElement('div');
                flavorDiv.className = 'flavor-item';
                flavorDiv.innerHTML = `<div class="flavor-icon">🎂</div><span>${flavor}</span>`;
                cakeFlavorsList.appendChild(flavorDiv);
            });

            openModal(cakeFlavorsModal);
        });
    });

    closeCakeFlavorsModalBtn.addEventListener('click', () => closeModal(cakeFlavorsModal));
    cakeFlavorsModal.addEventListener('click', (e) => {
        if (e.target === cakeFlavorsModal) closeModal(cakeFlavorsModal);
    });

    menuCategories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.dataset.category;
            const categoryLabel = category.querySelector('.menu-category-label').textContent;
            const images = categoryData[categoryName] || [];

            categoryModalTitle.textContent = categoryLabel;
            categoryImages.innerHTML = '';

            images.forEach((imgSrc, index) => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'category-image';
                imgDiv.innerHTML = `<img src="${imgSrc}" alt="${categoryLabel} ${index + 1}">`;
                imgDiv.addEventListener('click', () => openLightbox(imgSrc));
                categoryImages.appendChild(imgDiv);
            });

            openModal(categoryModal);
        });
    });

    closeCategoryModalBtn.addEventListener('click', () => closeModal(categoryModal));
    categoryModal.addEventListener('click', (e) => {
        if (e.target === categoryModal) closeModal(categoryModal);
    });

    closeLightboxBtn.addEventListener('click', closeLightboxFn);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightboxFn();
    });

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.dataset.galleryImg;
            openLightbox(imgSrc);
        });
    });

    function renderTestimonials() {
        testimonialSlider.innerHTML = '';

        testimonials.forEach(testimonial => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';

            // initials fallback
            const initials = testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2);

            card.innerHTML = `
            <div class="testimonial-header">

                <div class="testimonial-avatar">
                    ${testimonial.image
                    ? `<img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-img">`
                    : initials
                }
                </div>

                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.city}</p>
                </div>
            </div>

            <div class="testimonial-text">${testimonial.text}</div>
        `;

            testimonialSlider.appendChild(card);
        });
    }



    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(categoryModal);
            closeModal(cakeFlavorsModal);
            closeModal(testimonialModal);
            closeLightboxFn();
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const sections = document.querySelectorAll('.section, .hero');
    window.addEventListener('scroll', () => {
        let current = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.nav === current) {
                item.classList.add('active');
            }
        });
    });

    renderTestimonials();
});