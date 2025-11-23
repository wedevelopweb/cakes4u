
document.addEventListener("DOMContentLoaded", () => {

    // --- WhatsApp & Instagram ---
    const PHONE_NUMBER = "9711188251";
    const DEFAULT_MESSAGE = "Hello Ranjana! I want to order a cake. Please help me with the details.";

    const whatsappBtn = document.getElementById("whatsapp-btn");
    const floatingWhatsapp = document.getElementById("floatingWhatsapp");

    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", () => {
            window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`, "_blank");
        });
    }

    if (floatingWhatsapp) {
        floatingWhatsapp.addEventListener("click", () => {
            window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`, "_blank");
        });
    }

    const instagramBtn = document.getElementById("instagram-btn");
    if (instagramBtn) {
        instagramBtn.addEventListener("click", () => {
            window.open("https://www.instagram.com/cakes4uofficial", "_blank");
        });
    }

    // --- Data ---
    const cakeFlavors = {
        classic: ['Vanilla Cake', 'Pineapple Cake', 'Black Forest Cake', 'Strawberry Cake', 'Butterscotch Cake', 'Chocolate Cake', 'Fruit Cake'],
        premium: ['Chocolate Butterscotch Cake', 'Rasmalai Cake', 'Oreo Cake', 'White Forest Cake', 'Rabdi Jalebi Cake', 'Blueberry Cake', 'Mango Cake', 'Mocha Cake', 'Black Currant Cake'],
        deluxe: ['Red Velvet Cake', 'Blue Velvet Cake', 'Chocolate Truffle Cake', 'White Truffle Cake', 'Chocolate Hazelnut Cake', 'Nutella Cake', 'Candy Cake', 'Kaju Katli Cake', 'Chocobar Cake']
    };

    const categoryData = {
        twoTierCakes: ['images/9.jpg?w=800', 'images/10.jpg?w=800', 'images/11.jpg?w=800', 'images/34.jpg?w=800', 'images/35.jpg?w=800'],
        celebrationcakes: ['images/7.jpg?w=800', 'images/8.jpg?w=800', 'images/38.jpg', 'images/39.jpg', 'images/40.jpg', 'images/41.jpg',],
        brownies: ['images/12.jpeg?w=800', 'images/13.jpeg?w=800', 'images/14.jpeg?w=800', 'images/15.jpeg?w=800', 'images/16.jpg?w=800'],
        dessertjars: ['images/17.jpg?w=800', 'images/18.jpg?w=800', 'images/19.jpg?w=800', 'images/20.jpg?w=800', 'images/21.jpg?w=800'],
        hampers: ['images/23.jpg?w=800', 'images/22.jpg?w=800', 'images/24.jpg?w=800', 'images/31.jpeg?w=800', 'images/32.jpeg?w=800', 'images/33.jpeg?w=800'],
        savoury: ['images/36.png?w=800', 'images/37.png?w=800'],
        drybakes: ['images/42.png?w=800', 'images/43.png?w=800', 'images/44.png?w=800', 'images/45.png?w=800', 'images/46.png?w=800']
    };

    let testimonials = [
        { name: 'Gautam', city: 'Faridabad', text: 'Thank you for the amazing and beautiful cakes you made for my daughter. She was undoubtedly happy after seeing them and they were exactly what we wanted. The Peppa Pig cake you made by your own choice was a great surprise. I truly appreciate your patience regarding the payment. You didn\'t even call me once, understanding that I must have been busy. That thoughtfulness means a lot.', date: '2024-09-15', image: '' },
        { name: 'Dr. Farheen', city: 'Faridabad', text: 'Thank you so much for making such a beautiful cake in the flavor we requested, that too at the 11th hour. I have ordered from you before and I must say the taste and design of your cakes is always par excellence. I\'ll definitely recommend it to others.', date: '2024-09-20', image: '' },
        { name: 'Gayatri', city: 'Faridabad', text: 'Very yum cupcakes, the prettier they were the tastier. Also the cake looked unreal. Thank you so much! We all love your cakes. You are our go to baker now. Never buying cakes from anyone else.', date: '2024-09-28', image: '' },
        { name: 'Meenakshi', city: 'Faridabad', text: 'Cake was yum and apt size as per our need. Your cakes never disappoint us. Best thing is your cake sponges are never over drenched with sugar syrup which makes it moderately sweet. Thanks for always delivering the best.', date: '2024-10-02', image: '' },
        { name: 'Madhuri', city: 'Faridabad', text: 'Thank you so much for your lovely cake. The quality, finishing, everything looks perfect! Thank you for making my son\'s birthday special.', date: '2024-10-08', image: '' },
        { name: 'Anshula', city: 'Faridabad', text: 'The cake was delicious and it looked wonderful! Just the way I wanted. Thank you so much for making the occasion extra special with your cake.', date: '2024-10-12', image: '' },
        { name: 'Parul', city: 'Faridabad', text: 'My daughter said cake was very delicious. She liked the cake very much. Thank you so much for making her day more beautiful.', date: '2024-10-18', image: '' },
        { name: 'Neetu', city: 'Faridabad', text: 'The cake was very beautiful and extremely delicious. The texture, base, decoration of the cake was perfect. PERFECT CAKE FOR A SPECIAL OCCASION!', date: '2024-10-22', image: '' },
        { name: 'Snehi', city: 'Faridabad', text: 'I am very thankful for the last min order that you delivered before time. Thank you sooo much. You never disappoint me with the quality and taste. Mother\'s day got more special with this super yummy and beautiful cake. My mom loved it and was super happy.', date: '2024-10-28', image: '' },
        { name: 'Dr. Neha', city: 'Faridabad', text: 'Lovely cake! Kids finished it within 5 minutes of cutting. Yuvraj loved the clouds and drawing.', date: '2024-11-02', image: '' },
        { name: 'Brizel', city: 'Faridabad', text: 'The cake was absolutely delicious, and the attention to detail was incredible. It exceeded our expectations in both taste and presentation. I would highly recommend Cakes4u for any special occasion. Thank you for making her birthday even more memorable!', date: '2024-11-08', image: '' },
        { name: 'Deepika', city: 'Faridabad', text: 'Moist and tender crumb... The cake looked absolutely gorgeous and was exactly as we envisaged.', date: '2024-11-12', image: '' }
    ];

    // Get all menu cards and dialogs
    const menuCards = document.querySelectorAll('.menu-card');
    const dialogs = {
        cakes: document.getElementById('cakesDialog'),
        savoury: document.getElementById('savouryDialog'),
        courses: document.getElementById('coursesDialog'),
        hampers: document.getElementById('hampersDialog')
    };

    const closeButtons = document.querySelectorAll('.dialog-close');

    function openDialog(dialogName) {
        const dialog = dialogs[dialogName];
        if (dialog) {
            dialog.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeDialog(dialog) {
        dialog.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            openDialog(category);
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dialog = button.closest('.dialog-overlay');
            closeDialog(dialog);
        });
    });

    Object.values(dialogs).forEach(dialog => {
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                closeDialog(dialog);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            Object.values(dialogs).forEach(dialog => {
                if (dialog.classList.contains('active')) {
                    closeDialog(dialog);
                }
            });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    //Hero image rotation
    const heroImage = document.querySelector(".hero-cake-img");
    if (heroImage) {
        const heroImages = [
            "images/hero-img.jpg",
            "images/hero-image-1.jpg",
            "images/hero-image-2.jpg",
            "images/hero-image-3.jpg",
        ];
        let heroIndex = 0;

        setInterval(() => {
            heroImage.style.opacity = 0;
            heroImage.style.transform = "scale(0.95)";

            setTimeout(() => {
                heroIndex = (heroIndex + 1) % heroImages.length;
                heroImage.src = heroImages[heroIndex];
                heroImage.style.opacity = 1;
                heroImage.style.transform = "scale(1)";
            }, 1000);
        }, 4000);
    }
    // About image rotation
    const aboutImage = document.getElementById("about-image");
    if (aboutImage) {
        const founderImages = [
            // "images/47.jpeg",
            "images/48.jpeg",
            "images/49.JPEG",
            // "images/50.jpeg"
        ];
        let currentIndex = 0;

        setInterval(() => {
            aboutImage.style.opacity = 0;
            aboutImage.style.transform = "scale(0.95)";

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % founderImages.length;
                aboutImage.src = founderImages[currentIndex];
                aboutImage.style.opacity = 1;
                aboutImage.style.transform = "scale(1)";
            }, 1000);
        }, 4000);
    }

    // Modal elements
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
    const testimonialSlider = document.getElementById('testimonialSlider');
    const navItems = document.querySelectorAll('.nav-item');
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuTabs = document.querySelectorAll('.menu-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    const openModal = (modal) => { modal.classList.add('active'); document.body.style.overflow = 'hidden'; };
    const closeModal = (modal) => { modal.classList.remove('active'); document.body.style.overflow = ''; };
    const openLightbox = (imgSrc) => { lightboxImg.src = imgSrc; lightbox.classList.add('active'); };
    const closeLightboxFn = () => { lightbox.classList.remove('active'); setTimeout(() => lightboxImg.src = '', 300); };

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
    cakeFlavorsModal.addEventListener('click', (e) => { if (e.target === cakeFlavorsModal) closeModal(cakeFlavorsModal); });

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
    categoryModal.addEventListener('click', (e) => { if (e.target === categoryModal) closeModal(categoryModal); });

    closeLightboxBtn.addEventListener('click', closeLightboxFn);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightboxFn(); });

    galleryItems.forEach(item => {
        item.addEventListener('click', () => openLightbox(item.dataset.galleryImg));
    });

    // Testimonials
    function renderTestimonials() {
        testimonialSlider.innerHTML = '';
        const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

        tripleTestimonials.forEach(testimonial => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            const initials = testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2);

            card.innerHTML = `
    <div class="testimonial-header">
        <div class="testimonial-avatar">
            ${testimonial.image ? `<img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-img">` : initials}
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

    renderTestimonials();

    let animationId = null;
    let isHovered = false;
    let scrollPosition = 0;

    function autoScroll() {
        if (isHovered) {
            animationId = requestAnimationFrame(autoScroll);
            return;
        }

        scrollPosition += 2.75;
        testimonialSlider.scrollLeft = scrollPosition;

        const totalWidth = testimonialSlider.scrollWidth;
        const viewportWidth = testimonialSlider.clientWidth;
        const oneThirdPoint = (totalWidth - viewportWidth) / 3;

        if (scrollPosition >= oneThirdPoint) {
            scrollPosition = 0;
            testimonialSlider.scrollLeft = 0;
        }

        animationId = requestAnimationFrame(autoScroll);
    }

    function startAutoSlide() {
        if (!animationId) {
            animationId = requestAnimationFrame(autoScroll);
        }
    }

    function stopAutoSlide() {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    testimonialSlider.addEventListener('mouseenter', stopAutoSlide);
    testimonialSlider.addEventListener('mouseleave', startAutoSlide);
    testimonialSlider.addEventListener('touchstart', stopAutoSlide);
    testimonialSlider.addEventListener('touchend', () => {
        setTimeout(startAutoSlide, 3000);
    });

    setTimeout(startAutoSlide, 500);

    // Navigation active state
    navItems.forEach(item => item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    }));

    const sections = document.querySelectorAll('.section, .hero');
    window.addEventListener('scroll', () => {
        let current = 'home';
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
        });
        navItems.forEach(item => item.classList.toggle('active', item.dataset.nav === current));
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(categoryModal);
            closeModal(cakeFlavorsModal);
            closeLightboxFn();
        }
    });
});
