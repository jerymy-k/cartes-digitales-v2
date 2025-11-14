const cards = [
    {
        id: 1,
        name: "TITAN-OF-ECHOES",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/TITAN-OF-ECHOES.png",
    },
    {
        id: 2,
        name: "GRIMROOT-SHAMAN",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/GRIMROOT-SHAMAN.png",
    },
    {
        id: 3,
        name: "ASHBORN-REVENANAT",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/ASHBORN-REVENANT-I.png"
    },
    {
        id: 4,
        name: "DRIFTWOOD-COLOSSUS",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/DRIFIWOOD-COLOSSUS.png"
    },
    {
        id: 5,
        name: "SHADOW-BLADE-ELF",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/SHADOW-BLADE-ELF.png"
    },
    {
        id: 6,
        name: "ABYSSAL-STALKER",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/ABYSSAL-STALKER.png"
    },
    {
        id: 7,
        name: "TIDECALLER-SIREN",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/TIDECALLER-SIREN.png"
    },
    {
        id: 8,
        name: "TEMPESTIG-LEVIATHAN",
        price: 1200,
        rarity: "commun",
        image: "img/CARDS/TEMPESTIG-LEVIATHAN.png"
    },
    {
        id: 9,
        name: "ASHBORN-REVENANT",
        price: 1200,
        rarity: "rare",
        image: "img/CARDS/ASHBORN-REVENANT-II.png"
    },
    {
        id: 10,
        name: "ASHBORN-REVENANT",
        price: 1200,
        rarity: "rare",
        image: "img/CARDS/ASHBORN-REVENANT-III.png"
    },
    {
        id: 11,
        name: "BLISTERING-HELLHOUND",
        price: 1200,
        rarity: "rare",
        image: "img/CARDS/BLISTERING-HELLHOUND.png"
    },
    {
        id: 12,
        name: "INFERNAL-WARDEN",
        price: 1200,
        rarity: "mythique",
        image: "img/CARDS/INFERNAL-WRDEN.png"
    },
    {
        id: 13,
        name: "CERBERUS",
        price: 1200,
        rarity: "mythique",
        image: "img/CARDS/CERBERUS.png"
    },
    {
        id: 14,
        name: "SERAPH-OF-EMBERS",
        price: 1200,
        rarity: "epique",
        image: "img/CARDS/SERAPH-OF-EMBERS.png"
    },
    {
        id: 15,
        name: "FIERY-TYRANT",
        price: 1200,
        rarity: "epique",
        image: "img/CARDS/FIERY-TYRANT.png"
    },
    {
        id: 16,
        name: "STORMBLADE-VALKYRIE",
        price: 1200,
        rarity: "epique",
        image: "img/CARDS/STROMBLADE-VALKYRIE.png"
    },
    {
        id: 17,
        name: "GLACIAL-ARCHMAGE",
        price: 1200,
        rarity: "epique",
        image: "img/CARDS/GLACIAL-ARCHAMGE.png"
    },
    {
        id: 18,
        name: "ASHBORN-REVENANT",
        price: 1200,
        rarity: "legendaire",
        image: "img/CARDS/ASHBORN-REVENANT.png"
    },
    {
        id: 19,
        name: "GLACIAL-ARCHMAGE",
        price: 1200,
        rarity: "legendaire",
        image: "img/CARDS/GLACIAL-ARCHMAGE-II.png"
    },
    {
        id: 20,
        name: "SHADOW-SORCERER",
        price: 1200,
        rarity: "legendaire",
        image: "img/CARDS/SHADOW-SORCERER.png"
    },
];

const pag = document.querySelectorAll('.pagination');

let result_rarete;
let index = 0;

const card_container = document.querySelector('#container_cards');
const myDeckContainer = document.querySelector('#container_mydeck');

if (window.location.pathname.includes("/market.html")) {

    function marketAffichage(index) {
        card_container.innerHTML = "";
        for (let i = index; i < index + 9 && i < cards.length; i++) {
            card_container.innerHTML += `
                <div class="flex flex-col gap-[20px]">
                    <img src="${cards[i].image}" alt="">
                    <div class="flex items-center justify-between">
                        <img src="img/heart 1.png" alt="" class="btn-fav" data-id="${cards[i].id}">
                        <span class="text-[#E6CF39]">${cards[i].price}ec</span>
                        <img src="img/cart 1.png" alt="" class="btn-cart" data-id="${cards[i].id}">
                    </div>
                </div>
            `;
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        marketAffichage(0);
    });

    pag[0].addEventListener('click', () => marketAffichage(0));
    pag[1].addEventListener('click', () => marketAffichage(9));
    pag[2].addEventListener('click', () => marketAffichage(18));


    card_container.addEventListener('click', (e) => {

        if (e.target.classList.contains('btn-fav')) {
            const id = e.target.dataset.id;
            const card = cards.find(c => c.id == id);
            let favourites = JSON.parse(localStorage.getItem('favourites')) || [];

            const exist = favourites.some(item => item.id == card.id);
            if (!exist) { favourites.push(card); }

            localStorage.setItem('favourites', JSON.stringify(favourites));
        }

        if (e.target.classList.contains('btn-cart')) {
            const id = e.target.dataset.id;
            const card = cards.find(c => c.id == id);

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingCard = cart.find(item => item.id == card.id);

            if (existingCard) {
                existingCard.quantity = existingCard.quantity + 1;
            } else {
                cart.push({
                    id: card.id,
                    name: card.name,
                    price: card.price,
                    image: card.image,
                    rarity: card.rarity,
                    quantity: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            cartAffichage();
        }
    });
}
if (window.location.pathname.includes("/deck.html") || window.location.pathname.includes("/market.html")) {
    const rarete = document.querySelectorAll('.filtre');
    function affichageRarete(index, container) {
        container.innerHTML = '';
        for (let i = index; i < result_rarete.length; i++) {
            if (myDeckContainer) {
                container.innerHTML += `
                <div class="bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                    <img src="${result_rarete[i].image}" alt="">
                </div>
                `;
            } else {
                container.innerHTML += `
                <div class="flex flex-col gap-[20px] w-[100%]">
                    <img src="${result_rarete[i].image}" alt="">
                    <div class="flex items-center justify-between">
                        <img src="img/heart 1.png" alt="" class="btn-fav" data-id="${result_rarete[i].id}">
                        <span class="text-[#E6CF39]">${result_rarete[i].price}ec</span>
                        <img src="img/cart 1.png" alt="" class="btn-cart" data-id="${result_rarete[i].id}">
                    </div>
                </div>
            `;
            }
        }
    }
    rarete.forEach((btn, index) => {
        const rarities = ["mythique", "epique", "rare", "legendaire", "commun"];
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            result_rarete = cards.filter(item => item.rarity === rarities[index]);
            if (myDeckContainer) affichageRarete(0, myDeckContainer);
            if (card_container) affichageRarete(0, card_container);
        });
    });
}
// ------------------------- cart -------------------------------
const cartpage = document.querySelectorAll('.cartpage');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.querySelectorAll('.closeCart');
const panier = document.getElementById('panier');
const totalContainer = document.getElementById('totalContainer');
const totalPriceElement = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

function cartAffichage() {
    let carts = JSON.parse(localStorage.getItem('cart')) || [];
    panier.innerHTML = "";
    let total = 0;

    if (carts.length === 0) {
        panier.innerHTML = "<p class='text-gray-400'>panier est vide </p>";
        totalContainer.classList.add('hidden');
        setTimeout(() => {
            closeCartSidebar();
            localStorage.removeItem('cart');
        }, 1500);
        return;
    }

    for (let i = 0; i < carts.length; i++) {
        const itemTotal = carts[i].price * carts[i].quantity;
        total += itemTotal;
        panier.innerHTML += `
            <div class="flex bg-gray-800 p-3 rounded  mb-3">
                <div style="height: 90px; width: 90px;" class="rounded border4 flex-shrink-0">
                    <img src="${carts[i].image}" alt="" class="h-full w-full object-contain">
                </div>
                <div class="flex flex-col justify-center flex-1">
                    <div class="flex items-center  justify-center gap-10">
                        <span style="font-size: 14px; white-space: nowrap;">${itemTotal.toFixed(2)} EC</span>
                        <button class="text-red-400 remove-btn" data-id="${carts[i].id}" style="font-size: 16px;">🗑️</button>
                    </div>
                    <div class="flex items-center justify-center gap-10" style="font-size: 14px;">
                        <button class="decrease bg-gray-700 px-2 py-1 rounded text-[40px] " data-id="${carts[i].id}">−</button>
                        <span>${carts[i].quantity}</span>
                        <button class="increase bg-gray-700 px-2 py-1 rounded text-[40px]" data-id="${carts[i].id}">+</button>
                    </div>
                </div>
            </div>
        `;
    }

    totalContainer.classList.remove('hidden');
    totalPriceElement.textContent = total.toFixed(2) + " EC";

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            let carts = JSON.parse(localStorage.getItem('cart')) || [];
            carts = carts.filter(item => item.id != id);
            localStorage.setItem('cart', JSON.stringify(carts));
            cartAffichage();
        });
    });

    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            let carts = JSON.parse(localStorage.getItem('cart')) || [];
            let product = carts.find(item => item.id == id);
            if (product) {
                product.quantity -= 1;
                if (product.quantity <= 0) {
                    carts = carts.filter(item => item.id != id);
                }
                localStorage.setItem('cart', JSON.stringify(carts));
                cartAffichage();
            }
        });
    });

    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            let carts = JSON.parse(localStorage.getItem('cart')) || [];
            let product = carts.find(item => item.id == id);
            if (product) {
                product.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(carts));
                cartAffichage();
            }
        });
    });

    localStorage.setItem('cart', JSON.stringify(carts));
}

cartpage.forEach(btn => {
    btn.addEventListener('click', () => {
        cartAffichage();
        cartSidebar.classList.remove('translate-x-full');
        cartSidebar.classList.add('translate-x-0');
    })
});

closeCart.forEach(btn => {
    btn.addEventListener('click', () => {
        closeCartSidebar();
    });
})

function closeCartSidebar() {
    cartSidebar.classList.remove('translate-x-0');
    cartSidebar.classList.add('translate-x-full');
}

checkoutBtn.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        let myDeck = JSON.parse(localStorage.getItem('myDeck')) || [];

        cart.forEach(item => {
            const existingCard = myDeck.find(card => card.id == item.id);

            if (existingCard) {
                existingCard.quantity = (existingCard.quantity || 1) + item.quantity;
            } else {
                myDeck.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    rarity: item.rarity,
                    quantity: item.quantity
                });
            }
        });

        localStorage.setItem('myDeck', JSON.stringify(myDeck));

        alert("L'opération d'achat a été effectuée avec succès.");
        localStorage.removeItem('cart');
        cartAffichage();
    }
});
// ------------------------- my deck -------------------------------

function myDeckAffichage() {
    myDeckContainer.innerHTML = "";
    const myDeck = JSON.parse(localStorage.getItem('myDeck')) || [];

    if (myDeck.length === 0) {
        myDeckContainer.innerHTML = "<p><p class='text-gray-400 text-center col-start-1 col-end-4 row-start-1 row-end-2'>Vous n'avez aucune carte pour le moment</p>";
        return;
    }

    for (let i = 0; i < myDeck.length; i++) {
        const itemTotal = parseFloat(myDeck[i].price) * myDeck[i].quantity;
        myDeckContainer.innerHTML += `
            <div class="bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <img src="${myDeck[i].image}" alt="">
                <div class="flex items-center justify-between">
                    <span class="text-[#E6CF39]">${itemTotal}ec</span>
                    <span class="text-white">x${myDeck[i].quantity}</span>
                </div>
            </div>
        `;
    }
}
if (window.location.pathname.includes("/deck.html")) {
    window.addEventListener('DOMContentLoaded', () => {
        myDeckAffichage();
    });
    const alldeck = document.getElementById('alldeck');
    alldeck.addEventListener('click', () => {
        myDeckAffichage();
    });
}
// ------------------------- favourite -------------------------------
const favouriteAffichage = document.getElementById('container_favorites');

if (window.location.pathname.includes("/favorites.html")) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (favourites.length == 0) {
        localStorage.removeItem('favourites');
        favouriteAffichage.innerHTML += `<p><p class="text-center">Vous n’avez encore aucune carte en favoris</p>`
    }
    function favourite_Affichage() {
        favouriteAffichage.innerHTML = "";
        const favo = JSON.parse(localStorage.getItem('favourites')) || [];
        for (let i = 0; i < favo.length; i++) {
            favouriteAffichage.innerHTML += `
                <div class="flex flex-col gap-[20px]">
                    <img src="${favo[i].image}" alt="">
                    <div class="flex items-center justify-between">
                        <img src="img/trash 1.png" alt="" class="btn-remove-fav" data-id="${favo[i].id}">
                        <span class="text-[#E6CF39]">${favo[i].price}ec</span>
                        <img src="img/cart 1.png" alt="" class="btn-cart" data-id="${favo[i].id}">
                    </div>
                </div>
            `;
        }
    }

    if (favourites.length > 0) {
        favourite_Affichage();
        favouriteAffichage.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-remove-fav')) {
                const id = e.target.dataset.id;
                favourites = favourites.filter(item => item.id != id);
                localStorage.setItem('favourites', JSON.stringify(favourites));
                favourite_Affichage();
            }

        });
    }
}
//-----------------home ---------------------
if (window.location.pathname.includes("/index.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const cardStack = document.querySelector(".card-stack");
        let cards = [...document.querySelectorAll(".card")];
        let isSwiping = false;
        let startX = 0;
        let currentX = 0;
        let animationFrameId = null;

        const getDurationFromCSS = (
            variableName,
            element = document.documentElement
        ) => {
            const value = getComputedStyle(element)
                ?.getPropertyValue(variableName)
                ?.trim();
            if (!value) return 0;
            if (value.endsWith("ms")) return parseFloat(value);
            if (value.endsWith("s")) return parseFloat(value) * 1000;
            return parseFloat(value) || 0;
        };

        const getActiveCard = () => cards[0];

        const updatePositions = () => {
            cards.forEach((card, i) => {
                card.style.setProperty("--i", i + 1);
                card.style.setProperty("--swipe-x", "0px");
                card.style.setProperty("--swipe-rotate", "0deg");
                card.style.opacity = "1";
            });
        };

        const applySwipeStyles = (deltaX) => {
            const card = getActiveCard();
            if (!card) return;
            card.style.setProperty("--swipe-x", `${deltaX}px`);
            card.style.setProperty("--swipe-rotate", `${deltaX * 0.2}deg`);
            card.style.opacity = 1 - Math.min(Math.abs(deltaX) / 100, 1) * 0.75;
        };

        const handleStart = (clientX) => {
            if (isSwiping) return;
            isSwiping = true;
            startX = currentX = clientX;
            const card = getActiveCard();
            card && (card.style.transition = "none");
        };

        const handleMove = (clientX) => {
            if (!isSwiping) return;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                currentX = clientX;
                const deltaX = currentX - startX;
                applySwipeStyles(deltaX);

                if (Math.abs(deltaX) > 50) handleEnd();
            });
        };

        const handleEnd = () => {
            if (!isSwiping) return;
            cancelAnimationFrame(animationFrameId);

            const deltaX = currentX - startX;
            const threshold = 50;
            const duration = getDurationFromCSS("--card-swap-duration");
            const card = getActiveCard();

            if (card) {
                card.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;

                if (Math.abs(deltaX) > threshold) {
                    const direction = Math.sign(deltaX);

                    card.style.setProperty("--swipe-x", `${direction * 300}px`);
                    card.style.setProperty("--swipe-rotate", `${direction * 20}deg`);

                    setTimeout(() => {
                        card.style.setProperty("--swipe-rotate", `${-direction * 20}deg`);
                    }, duration * 0.5);

                    setTimeout(() => {
                        cards = [...cards.slice(1), card];
                        updatePositions();
                    }, duration);
                } else {
                    applySwipeStyles(0);
                }
            }

            isSwiping = false;
            startX = currentX = 0;
        };

        const addEventListeners = () => {
            cardStack?.addEventListener("pointerdown", ({ clientX }) =>
                handleStart(clientX)
            );
            cardStack?.addEventListener("pointermove", ({ clientX }) =>
                handleMove(clientX)
            );
            cardStack?.addEventListener("pointerup", handleEnd);
        };

        updatePositions();
        addEventListeners();
    });

}
// ---------------humburgermenu--------------
const btn_menu = document.querySelector('.menu-btn');
const btn_menu_close = document.querySelector('.close-menu');
const menuslider = document.querySelector('.menu_slider');
btn_menu_close.addEventListener('click', () => {
    menuslider.classList.remove('translate-x-0');
    menuslider.classList.add('translate-x-full');
});
btn_menu.addEventListener('click', () => {
    menuslider.classList.remove('translate-x-full');
    menuslider.classList.add('translate-x-0');
});
//-------------------faqsection-----------------
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    question.addEventListener('click', () => {
        answer.classList.toggle('hidden');
        question.classList.toggle('text-white');
    });
});
// -----------------play-----------------------
if (window.location.pathname.includes("/play.html")) {
    let turn = "jouer";
    const playdeckcontainer = document.getElementById('mydeckplay');
    const myhand = document.getElementById('myhand');
    let myDeck = JSON.parse(localStorage.getItem('myDeck')) || [];
    let cardhand;

    window.addEventListener('DOMContentLoaded', () => {
        playdeckaffichage();
    });
    function playdeckaffichage() {
        playdeckcontainer.innerHTML = "";
        myDeck.forEach(carta => {
            const element = document.createElement('div');
            element.className = `bg-gray-800 flex`
            element.innerHTML = `
                <img src="${carta.image}" alt="" width='200px'" >
            `;
            playdeckcontainer.appendChild(element);
            element.addEventListener('click', () => {
                let lengthmyhand = myhand.children.length;
                if (lengthmyhand < 5) {
                    carta.quantity -= 1;
                    myhand.innerHTML += `
                            <img src="${carta.image}" alt="" class="w-[130px] rounded-[10px] h-[180px] card-id">
                        `;
                    cardhand = document.querySelectorAll(`.card-id`);
                    cardhand.forEach(myhandcard => {
                        myhandcard.addEventListener('dragstart', () => {
                            myhandcard.classList.add('dragging');
                        });
                        myhandcard.addEventListener('dragend', () => {
                            myhandcard.classList.remove('dragging');
                        });
                    });
                    if (carta.quantity < 1) {
                        myDeck = myDeck.filter(f => f.id !== carta.id);
                        playdeckaffichage();
                    }
                }
                else {
                    alert('u can only have 5 cards');
                }
            });
        });
    }
    const arenacontainers = document.querySelectorAll('.arenacontainer');
    const popup = document.querySelector('.popup');
    const attack = document.querySelector('.attack-btn');
    const deffence = document.querySelector('.deffence-btn');

    function dragmouvment(e) {
        if (turn == "jouer") {
            const dragging = document.querySelector('.dragging');
            const target = e.currentTarget;
            e.preventDefault();
            let targetlength = target.children.length;
            console.log(targetlength);
            if (targetlength == 0) {
                popup.classList.remove('hidden');
                popup.classList.add('flex');
                attack.onclick = () => {
                    popup.classList.add('hidden');
                    popup.classList.remove('flex');
                    target.appendChild(dragging);
                    e.preventDefault();
                    turn = "adversire";
                };
                deffence.onclick = () => {
                    popup.classList.add('hidden');
                    popup.classList.remove('flex');
                    target.classList.add('rotate-90');
                    target.appendChild(dragging);
                    e.preventDefault();
                    turn = "adversire";
                };
            } else {
                return;
            }
        } else {
            return;
        }
    }
    const enemy = document.querySelectorAll('.enemy');
    const endturnbtn = document.querySelector('.endturnbtn');
    function drawRandomCard() {
        let randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    }
    function chooseAtcDef() {
        let random = Math.floor(Math.random() * 2);
        return random;
    }
    let i = 0;
    endturnbtn.onclick = () => {
        if (turn == "adversire") {
            let randomCard = drawRandomCard();
            enemy[i].innerHTML = `<img src="${randomCard.image}" alt="" class="w-[130px] rounded-[10px] h-[180px]">`
            turn = 'jouer';
            draw = 1;
            let chosed = chooseAtcDef();
            if (chosed == 0) {
                enemy[i].classList.add('rotate-90');
            }
            i++;
        }
    }
}

