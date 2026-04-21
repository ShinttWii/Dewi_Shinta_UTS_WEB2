export const Store = {
    // 1. Sinkronisasi data dengan Sistem Versi
    async getProducts() {
        const DATA_VERSION = "1.2"; // Ubah ini jika Anda mengupdate data.json lagi
        let localProducts = JSON.parse(localStorage.getItem('all_products'));
        let localVersion = localStorage.getItem('db_version');

        // Jika versi berbeda atau data kosong, paksa ambil dari data.json
        if (!localProducts || localVersion !== DATA_VERSION) {
            try {
                const res = await fetch('./data.json');
                const freshData = await res.json();
                
                localStorage.setItem('all_products', JSON.stringify(freshData));
                localStorage.setItem('db_version', DATA_VERSION);
                
                console.log(`Database updated to v${DATA_VERSION}`);
                return freshData;
            } catch (e) {
                console.error("Gagal fetch data.json, menggunakan data lokal jika ada.", e);
                return localProducts || [];
            }
        }
        return localProducts;
    },

    // 2. Sesi User
    getUser: () => JSON.parse(localStorage.getItem('session')),
    setUser: (user) => localStorage.setItem('session', JSON.stringify(user)),
    logout: () => {
        localStorage.removeItem('session');
        window.location.href = 'login.html';
    },

    // 3. Keranjang & Pesanan (Untuk Laporan Admin)
    getCart: () => JSON.parse(localStorage.getItem('cart')) || [],
    saveCart: (cart) => localStorage.setItem('cart', JSON.stringify(cart)),
    
    // Fungsi baru untuk mencatat pesanan (Dummy Order)
    getOrders: () => JSON.parse(localStorage.getItem('orders')) || [],
    
    // 4. Wishlist Logic
    getWishlist: () => JSON.parse(localStorage.getItem('wishlist')) || [],
    saveWishlist: (data) => localStorage.setItem('wishlist', JSON.stringify(data)),
    
    toggleWishlist: function(product) {
        let list = this.getWishlist();
        const idx = list.findIndex(i => i.id === product.id);
        if (idx === -1) {
            list.push(product);
            this.saveWishlist(list);
            return { action: 'added', data: list };
        } else {
            list.splice(idx, 1);
            this.saveWishlist(list);
            return { action: 'removed', data: list };
        }
    },

    // 5. Seeding Data Laporan (Agar Admin tidak kosong saat pertama buka)
    seedDummyOrders() {
        if (!localStorage.getItem('orders')) {
            const dummyOrders = [
                { id: 1713600000, customerName: "Rizky Fauzi", totalPrice: 4500000, date: "2026-04-18", items: [101, 105] },
                { id: 1713700000, customerName: "Sarah Wijaya", totalPrice: 1250000, date: "2026-04-19", items: [103] },
                { id: 1713800000, customerName: "Andi Pratama", totalPrice: 3200000, date: "2026-04-20", items: [113, 111] },
                { id: 1713900000, customerName: "Budi Doremi", totalPrice: 850000, date: "2026-04-21", items: [109] }
            ];
            localStorage.setItem('orders', JSON.stringify(dummyOrders));
        }
    },

    // 6. UI Helpers
    initTheme: () => {
        if (localStorage.getItem('theme') === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
};

// Auto-run seeder saat script dimuat
Store.seedDummyOrders();

export function showToast(msg) {
    const t = document.getElementById('toast');
    if(!t) return;
    t.innerText = msg;
    t.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-2xl shadow-2xl z-[300] transition-all duration-500 opacity-100 translate-y-0 font-bold text-xs";
    setTimeout(() => {
        t.classList.add('opacity-0', 'translate-y-10');
    }, 2500);
}

export function showAlert(title, message, type = 'success') {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 flex items-center justify-center z-[200] p-4 bg-black/60 backdrop-blur-sm";
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-[40px] p-8 max-w-sm w-full text-center shadow-2xl scale-in-animation">
            <div class="text-5xl mb-4">${type === 'success' ? '🎉' : '⚠️'}</div>
            <h3 class="text-xl font-black mb-2 dark:text-white">${title}</h3>
            <p class="text-sm opacity-60 mb-6 dark:text-gray-400">${message}</p>
            <button id="close-alert" class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-xs hover:bg-indigo-700 transition">Oke</button>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('close-alert').onclick = () => modal.remove();
}