const MASCOTS = {
    whale: {
        name: "Whale",
        color: "#462683",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#EFEAFA"/>
            <circle cx="34" cy="30" r="2" fill="#D5C8F5"/><circle cx="88" cy="34" r="2.5" fill="#D5C8F5"/><circle cx="76" cy="94" r="2" fill="#D5C8F5"/>
            <path d="M22 66C22 46 40 34 65 34C90 34 102 50 112 47C118 45 123 36 127 38C130 40 124 50 120 55C126 58 131 66 128 69C124 72 115 66 109 63C101 79 84 88 62 88C38 88 22 80 22 66Z" transform="scale(0.84) translate(8, 10)" fill="#462683"/>
            <path d="M26 71C36 82 57 87 81 85C96 84 107 78 114 70C98 77 64 78 26 71Z" transform="scale(0.84) translate(8, 10)" fill="#C7BEE8"/>
            <circle cx="40" cy="59" r="3" fill="#FFFFFF"/>
            <path d="M32 68C36 72 42 72 46 68" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M52 28C50 22 47 20 45 18" stroke="#B8A9E6" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M58 27C60 21 63 19 65 17" stroke="#B8A9E6" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`
    },
    cat: {
        name: "Cat",
        color: "#1D56C8",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#E8F0FE"/>
            <rect x="35" y="42" width="50" height="46" rx="22" fill="#1D56C8"/>
            <path d="M37 52L35 30L54 44Z" fill="#1D56C8"/>
            <path d="M83 52L85 30L66 44Z" fill="#1D56C8"/>
            <path d="M83 78C95 78 98 66 90 62" stroke="#1D56C8" stroke-width="8" stroke-linecap="round"/>
            <ellipse cx="60" cy="72" rx="16" ry="13" fill="#7EA6F2"/>
            <circle cx="47" cy="58" r="3" fill="#FFFFFF"/>
            <circle cx="73" cy="58" r="3" fill="#FFFFFF"/>
            <path d="M55 64C58 67 62 67 65 64" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`
    },
    penguin: {
        name: "Penguin",
        color: "#128286",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#E3F5F5"/>
            <ellipse cx="48" cy="89" rx="9" ry="4" fill="#78CECE"/>
            <ellipse cx="72" cy="89" rx="9" ry="4" fill="#78CECE"/>
            <path d="M36 62C36 42 46 32 60 32C74 32 84 42 84 62C84 80 74 88 60 88C46 88 36 80 36 62Z" fill="#128286"/>
            <ellipse cx="32" cy="64" rx="6" ry="15" transform="rotate(22 32 64)" fill="#128286"/>
            <ellipse cx="88" cy="64" rx="6" ry="15" transform="rotate(-22 88 64)" fill="#128286"/>
            <ellipse cx="60" cy="68" rx="16" ry="17" fill="#8CDADA"/>
            <circle cx="49" cy="50" r="2.8" fill="#FFFFFF"/>
            <circle cx="71" cy="50" r="2.8" fill="#FFFFFF"/>
            <polygon points="56,54 64,54 60,59" fill="#8CDADA"/>
            <path d="M55 62C58 65 62 65 65 62" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
        </svg>`
    },
    frog: {
        name: "Frog",
        color: "#4C9A34",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#E7F5E2"/>
            <circle cx="44" cy="40" r="11" fill="#4C9A34"/>
            <circle cx="76" cy="40" r="11" fill="#4C9A34"/>
            <rect x="34" y="40" width="52" height="44" rx="20" fill="#4C9A34"/>
            <rect x="28" y="68" width="16" height="16" rx="8" fill="#4C9A34"/>
            <rect x="76" y="68" width="16" height="16" rx="8" fill="#4C9A34"/>
            <ellipse cx="60" cy="70" rx="17" ry="12" fill="#A5D893"/>
            <circle cx="44" cy="40" r="2.8" fill="#FFFFFF"/>
            <circle cx="76" cy="40" r="2.8" fill="#FFFFFF"/>
            <path d="M53 54C57 58 63 58 67 54" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
        </svg>`
    },
    chick: {
        name: "Chick",
        color: "#C99816",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#FAF2D8"/>
            <path d="M56 32C55 26 58 23 60 27C62 23 65 26 63 32" stroke="#D9A825" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="52" y1="84" x2="52" y2="92" stroke="#D9A825" stroke-width="4" stroke-linecap="round"/>
            <line x1="68" y1="84" x2="68" y2="92" stroke="#D9A825" stroke-width="4" stroke-linecap="round"/>
            <circle cx="60" cy="60" r="26" fill="#DFB12B"/>
            <ellipse cx="33" cy="62" rx="5" ry="9" transform="rotate(15 33 62)" fill="#DFB12B"/>
            <ellipse cx="87" cy="62" rx="5" ry="9" transform="rotate(-15 87 62)" fill="#DFB12B"/>
            <circle cx="60" cy="68" rx="15" fill="#F4DC88"/>
            <circle cx="60" cy="68" r="14" fill="#F4DC88"/>
            <circle cx="49" cy="52" r="2.8" fill="#FFFFFF"/>
            <circle cx="71" cy="52" r="2.8" fill="#FFFFFF"/>
            <path d="M56 58C58 61 62 61 64 58" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
        </svg>`
    },
    fox: {
        name: "Fox",
        color: "#C85E24",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#FAECE3"/>
            <path d="M76 82C94 84 98 66 88 58C82 66 76 72 76 82Z" fill="#C85E24"/>
            <path d="M38 54L36 30L56 46Z" fill="#C85E24"/>
            <path d="M82 54L84 30L64 46Z" fill="#C85E24"/>
            <rect x="38" y="44" width="44" height="44" rx="20" fill="#C85E24"/>
            <path d="M38 56C46 56 54 62 60 66C66 62 74 56 82 56C82 76 74 88 60 88C46 88 38 76 38 56Z" fill="#E8A27A"/>
            <circle cx="48" cy="54" r="2.8" fill="#FFFFFF"/>
            <circle cx="72" cy="54" r="2.8" fill="#FFFFFF"/>
            <circle cx="60" cy="63" r="2.5" fill="#FFFFFF"/>
            <path d="M56 67C58 69 62 69 64 67" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
        </svg>`
    },
    bunny: {
        name: "Bunny",
        color: "#D65A5A",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#FBE8E8"/>
            <ellipse cx="48" cy="36" rx="6" ry="18" transform="rotate(-8 48 36)" fill="#D65A5A"/>
            <ellipse cx="72" cy="36" rx="6" ry="18" transform="rotate(8 72 36)" fill="#D65A5A"/>
            <rect x="38" y="46" width="44" height="44" rx="20" fill="#D65A5A"/>
            <ellipse cx="60" cy="75" rx="14" ry="13" fill="#F0A5A5"/>
            <circle cx="49" cy="60" r="2.8" fill="#FFFFFF"/>
            <circle cx="71" cy="60" r="2.8" fill="#FFFFFF"/>
            <path d="M56 66C58 69 62 69 64 66" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
        </svg>`
    },
    bear: {
        name: "Bear",
        color: "#C44C9B",
        svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#F9E6F3"/>
            <circle cx="41" cy="40" r="9" fill="#C44C9B"/>
            <circle cx="79" cy="40" r="9" fill="#C44C9B"/>
            <circle cx="41" cy="40" r="4.5" fill="#E89BCE"/>
            <circle cx="79" cy="40" r="4.5" fill="#E89BCE"/>
            <rect x="37" y="42" width="46" height="46" rx="21" fill="#C44C9B"/>
            <ellipse cx="34" cy="70" rx="5" ry="9" transform="rotate(20 34 70)" fill="#C44C9B"/>
            <ellipse cx="86" cy="70" rx="5" ry="9" transform="rotate(-20 86 70)" fill="#C44C9B"/>
            <ellipse cx="60" cy="74" rx="14" ry="12" fill="#E89BCE"/>
            <circle cx="60" cy="60" r="7" fill="#F5CBE6"/>
            <circle cx="48" cy="54" r="2.8" fill="#FFFFFF"/>
            <circle cx="72" cy="54" r="2.8" fill="#FFFFFF"/>
            <path d="M56 61C58 63 62 63 64 61" stroke="#C44C9B" stroke-width="2.2" stroke-linecap="round"/>
        </svg>`
    }
};

const realToday = new Date();
function formatISODate(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

const todayISO = formatISODate(realToday);
let selectedDateISO = todayISO;
let calViewYear = realToday.getFullYear();
let calViewMonth = realToday.getMonth();

const defaultCategories = ["Work", "Personal", "Learning"];

function getDefaultStarterTasks() {
    return [];
}

let usersDB = JSON.parse(localStorage.getItem('demak_users_db')) || {};
let currentUsername = localStorage.getItem('demak_current_user') || null;
let authMode = 'login';
let selectedRegAvatar = 'whale';
let pendingDeleteCategory = null;
let myTasksFilter = { type: 'all', value: null };
let toastTimeout = null;

function saveUsersDB() {
    localStorage.setItem('demak_users_db', JSON.stringify(usersDB));
}

function getCurrentUser() {
    return currentUsername ? usersDB[currentUsername] : null;
}

function applyThemeAndMascot(mascotKey) {
    const key = MASCOTS[mascotKey] ? mascotKey : 'whale';
    const mascot = MASCOTS[key];

    if (key === 'whale') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', key);
    }

    const previewEl = document.getElementById('auth-preview-mascot');
    if (previewEl) previewEl.innerHTML = mascot.svg;

    const topAvatar = document.getElementById('topbar-avatar');
    if (topAvatar) topAvatar.innerHTML = mascot.svg;

    const heroMascot = document.getElementById('hero-mascot-container');
    if (heroMascot) heroMascot.innerHTML = mascot.svg;

    const bigAvatar = document.getElementById('profile-big-avatar');
    if (bigAvatar) bigAvatar.innerHTML = mascot.svg;

    const toastIcon = document.getElementById('toast-mascot-icon');
    if (toastIcon) toastIcon.innerHTML = mascot.svg;
}

function launchCelebration(themeColor) {
    const canvas = document.getElementById('celebration-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const palette = [themeColor, '#FFD166', '#A5D893', '#7EA6F2', '#F0A5A5', '#C7BEE8'];
    const particles = Array.from({ length: 95 }, () => ({
        x: canvas.width / 2 + (Math.random() - 0.5) * 160,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 13 - 4,
        size: Math.random() * 7 + 4,
        color: palette[Math.floor(Math.random() * palette.length)],
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        shape: Math.random() > 0.4 ? 'circle' : 'rect'
    }));

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.35;
            p.rot += p.vRot;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rot * Math.PI) / 180);
            ctx.fillStyle = p.color;
            if (p.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
            }
            ctx.restore();
        });

        frame++;
        if (frame < 120) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    animate();
}

function renderAvatarGrid(containerId, activeKey, onSelectCallbackName) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    grid.innerHTML = Object.entries(MASCOTS).map(([key, item]) => `
        <div class="avatar-option ${key === activeKey ? 'selected' : ''}" onclick="${onSelectCallbackName}('${key}')">
            ${item.svg}
            <span>${item.name}</span>
        </div>
    `).join('');
}

window.selectRegistrationAvatar = function(key) {
    selectedRegAvatar = key;
    applyThemeAndMascot(key);
    renderAvatarGrid('auth-avatar-grid', selectedRegAvatar, 'selectRegistrationAvatar');
};

window.switchAuthMode = function(mode) {
    authMode = mode;
    document.getElementById('auth-tab-login').classList.toggle('active', mode === 'login');
    document.getElementById('auth-tab-register').classList.toggle('active', mode === 'register');
    document.getElementById('avatar-picker-section').style.display = mode === 'register' ? 'block' : 'none';
    document.getElementById('auth-submit-btn').textContent = mode === 'register' ? 'Create account & enter' : 'Log in';
    document.getElementById('auth-error-msg').textContent = '';

    if (mode === 'register') {
        renderAvatarGrid('auth-avatar-grid', selectedRegAvatar, 'selectRegistrationAvatar');
        applyThemeAndMascot(selectedRegAvatar);
    }
};

document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const rawLogin = document.getElementById('auth-username').value.trim();
    const password = document.getElementById('auth-password').value.trim();
    const errorEl = document.getElementById('auth-error-msg');

    if (!rawLogin || !password) {
        errorEl.textContent = "Please fill in both login and password.";
        return;
    }

    const loginKey = rawLogin.toLowerCase();

    if (authMode === 'register') {
        if (usersDB[loginKey]) {
            errorEl.textContent = "This login is already taken. Try another one!";
            return;
        }
        usersDB[loginKey] = {
            username: rawLogin,
            password: password,
            avatar: selectedRegAvatar,
            categories: [...defaultCategories],
            tasks: getDefaultStarterTasks()
        };
        saveUsersDB();
        loginSuccess(loginKey, true);
    } else {
        const user = usersDB[loginKey];
        if (!user || user.password !== password) {
            errorEl.textContent = "Incorrect login or password.";
            return;
        }
        loginSuccess(loginKey, false);
    }
});

function loginSuccess(loginKey, isNewAccount) {
    currentUsername = loginKey;
    localStorage.setItem('demak_current_user', loginKey);
    document.getElementById('auth-form').reset();
    document.getElementById('auth-error-msg').textContent = '';

    enterApp();

    if (isNewAccount) {
        const user = getCurrentUser();
        const mascot = MASCOTS[user.avatar] || MASCOTS.whale;
        launchCelebration(mascot.color);
        showToast("Welcome to Demak!", `Account @${user.username} created!`);
    }
}

window.logoutUser = function() {
    currentUsername = null;
    localStorage.removeItem('demak_current_user');
    document.getElementById('app-shell').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
    switchAuthMode('login');
};

function enterApp() {
    const user = getCurrentUser();
    if (!user) {
        document.getElementById('auth-screen').style.display = 'flex';
        document.getElementById('app-shell').style.display = 'none';
        return;
    }

    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-shell').style.display = 'block';
    document.getElementById('topbar-username').textContent = user.username;

    applyThemeAndMascot(user.avatar);
    initHeaderDate();
    switchView('myday');
}

window.changeUserAvatar = function(newKey) {
    const user = getCurrentUser();
    if (!user) return;
    user.avatar = newKey;
    saveUsersDB();
    applyThemeAndMascot(newKey);
    renderProfileView();
    showToast("Theme updated!", `Companion changed to ${MASCOTS[newKey].name}.`);
};

function renderProfileView() {
    const user = getCurrentUser();
    if (!user) return;
    const mascot = MASCOTS[user.avatar] || MASCOTS.whale;

    document.getElementById('profile-greeting').textContent = `Hello, ${user.username}!`;
    document.getElementById('profile-username-display').textContent = `@${user.username}`;
    document.getElementById('profile-companion-label').textContent = `Companion: ${mascot.name}`;

    document.getElementById('prof-total-tasks').textContent = user.tasks.length;
    document.getElementById('prof-done-tasks').textContent = user.tasks.filter(t => t.completed).length;
    document.getElementById('prof-groups-count').textContent = user.categories.length;

    renderAvatarGrid('profile-avatar-grid', user.avatar, 'changeUserAvatar');
}

function showToast(title, message) {
    const toast = document.getElementById('whale-toast');
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

window.openNewGroupModal = function() {
    document.getElementById('new-group-name-input').value = '';
    document.getElementById('new-group-modal').style.display = 'flex';
    setTimeout(() => document.getElementById('new-group-name-input').focus(), 50);
};

window.closeNewGroupModal = function() {
    document.getElementById('new-group-modal').style.display = 'none';
};

document.getElementById('new-group-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const clean = document.getElementById('new-group-name-input').value.trim();
    if (clean && !user.categories.includes(clean)) {
        user.categories.push(clean);
        saveUsersDB();
        renderAll();
        showToast("List created!", `Group "${clean}" added.`);
    }
    closeNewGroupModal();
});

window.openDeleteGroupModal = function(catName, event) {
    event.stopPropagation();
    pendingDeleteCategory = catName;
    document.getElementById('delete-group-text').textContent = `Delete "${catName}"? Tasks inside will move to Personal.`;
    document.getElementById('delete-group-modal').style.display = 'flex';
};

window.closeDeleteGroupModal = function() {
    pendingDeleteCategory = null;
    document.getElementById('delete-group-modal').style.display = 'none';
};

document.getElementById('confirm-delete-group-btn').addEventListener('click', function() {
    const user = getCurrentUser();
    if (!user || !pendingDeleteCategory) return;

    const catName = pendingDeleteCategory;
    user.categories = user.categories.filter(c => c !== catName);
    user.tasks = user.tasks.map(t => t.category === catName ? { ...t, category: 'Personal' } : t);

    if (myTasksFilter.type === 'category' && myTasksFilter.value === catName) {
        myTasksFilter = { type: 'all', value: null };
        document.getElementById('active-filter-label').textContent = 'All tasks';
    }

    saveUsersDB();
    closeDeleteGroupModal();
    renderAll();
});

function initHeaderDate() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('current-date-eyebrow').textContent = realToday.toLocaleDateString('en-US', options).toUpperCase();
    document.getElementById('day-task-date').value = todayISO;
}

function renderCategoriesUI() {
    const user = getCurrentUser();
    if (!user) return;

    document.querySelectorAll('.category-dropdown').forEach(select => {
        const currentVal = select.value;
        select.innerHTML = user.categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
        if (user.categories.includes(currentVal)) select.value = currentVal;
    });

    const listEl = document.getElementById('custom-categories-list');
    listEl.innerHTML = user.categories.map(cat => {
        const count = user.tasks.filter(t => t.category === cat).length;
        const isActive = myTasksFilter.type === 'category' && myTasksFilter.value === cat ? 'active' : '';
        const isCustom = !defaultCategories.includes(cat);
        const deleteBtn = isCustom
            ? `<button type="button" class="del-cat-btn" onclick="openDeleteGroupModal('${cat}', event)" title="Delete group">✕</button>`
            : '';

        return `
            <li class="filter-item ${isActive}" onclick="setTaskFilter('category', '${cat}', this)">
                <span>${cat}</span>
                <span class="cat-right-side">
                    <span>${count}</span>
                    ${deleteBtn}
                </span>
            </li>
        `;
    }).join('');
}

window.setTaskFilter = function(type, value, element) {
    myTasksFilter = { type, value };
    document.querySelectorAll('#view-mytasks .filter-item').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');

    const label = type === 'all' ? 'All tasks'
        : type === 'flagged' ? 'Flagged tasks'
        : type === 'completed' ? 'Completed tasks'
        : `List: ${value}`;
    document.getElementById('active-filter-label').textContent = label;
    renderAllTasksView();
};

window.switchView = function(view) {
    document.getElementById('view-myday').style.display = view === 'myday' ? 'block' : 'none';
    document.getElementById('view-mytasks').style.display = view === 'mytasks' ? 'block' : 'none';
    document.getElementById('view-profile').style.display = view === 'profile' ? 'block' : 'none';

    document.getElementById('tab-myday').classList.toggle('active', view === 'myday');
    document.getElementById('tab-mytasks').classList.toggle('active', view === 'mytasks');
    document.getElementById('tab-profile').classList.toggle('active', view === 'profile');

    renderAll();
};

window.changeMonth = function(delta) {
    calViewMonth += delta;
    if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
    else if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
    renderCalendar();
};

window.goToToday = function() {
    calViewYear = realToday.getFullYear();
    calViewMonth = realToday.getMonth();
    selectedDateISO = todayISO;
    document.getElementById('day-task-date').value = todayISO;
    renderAll();
};

window.selectCalendarDate = function(isoStr) {
    selectedDateISO = isoStr;
    document.getElementById('day-task-date').value = isoStr;
    renderAll();
};

function renderCalendar() {
    const user = getCurrentUser();
    if (!user) return;

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('cal-month-title').textContent = `${monthNames[calViewMonth]} ${calViewYear}`;

    const firstDay = new Date(calViewYear, calViewMonth, 1);
    const lastDay = new Date(calViewYear, calViewMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    let startOffset = firstDay.getDay() - 1;
    if (startOffset < 0) startOffset = 6;

    const prevMonthLastDay = new Date(calViewYear, calViewMonth, 0).getDate();
    let html = '';

    for (let i = startOffset - 1; i >= 0; i--) {
        html += `<div class="cal-day muted">${prevMonthLastDay - i}</div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const cellISO = `${calViewYear}-${String(calViewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const isSelected = cellISO === selectedDateISO ? 'selected' : '';
        const isToday = cellISO === todayISO && !isSelected ? 'today-outline' : '';
        const hasTasks = user.tasks.some(t => t.date === cellISO) && !isSelected ? 'has-dot' : '';

        html += `<div class="cal-day ${isSelected} ${isToday} ${hasTasks}" onclick="selectCalendarDate('${cellISO}')">${d}</div>`;
    }

    const totalCells = startOffset + daysInMonth;
    const trailing = (7 - (totalCells % 7)) % 7;
    for (let t = 1; t <= trailing; t++) {
        html += `<div class="cal-day muted">${t}</div>`;
    }

    document.getElementById('calendar-grid').innerHTML = html;
}

window.toggleMenu = function(id, event) {
    event.stopPropagation();
    document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m.id !== `menu-${id}`) m.classList.remove('open');
    });
    const menu = document.getElementById(`menu-${id}`);
    if (menu) menu.classList.toggle('open');
};

document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
});

window.openEditModal = function(id) {
    const user = getCurrentUser();
    if (!user) return;
    const task = user.tasks.find(t => t.id === id);
    if (!task) return;

    document.getElementById('edit-task-id').value = task.id;
    document.getElementById('edit-task-title').value = task.title;
    document.getElementById('edit-task-subtitle').value = task.subtitle || '';
    document.getElementById('edit-task-date').value = task.date || todayISO;
    document.getElementById('edit-task-time').value = task.time || '';
    document.getElementById('edit-task-category').value = task.category;
    document.getElementById('edit-task-priority').value = task.priority || 'none';
    document.getElementById('edit-modal').style.display = 'flex';
};

window.closeEditModal = function() {
    document.getElementById('edit-modal').style.display = 'none';
};

document.getElementById('edit-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const id = Number(document.getElementById('edit-task-id').value);
    user.tasks = user.tasks.map(t => t.id === id ? {
        ...t,
        title: document.getElementById('edit-task-title').value.trim(),
        subtitle: document.getElementById('edit-task-subtitle').value.trim(),
        date: document.getElementById('edit-task-date').value || todayISO,
        time: document.getElementById('edit-task-time').value,
        category: document.getElementById('edit-task-category').value,
        priority: document.getElementById('edit-task-priority').value
    } : t);
    saveUsersDB();
    closeEditModal();
    renderAll();
});

window.toggleTask = function(id) {
    const user = getCurrentUser();
    if (!user) return;
    user.tasks = user.tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveUsersDB();
    renderAll();
};

window.toggleFlag = function(id) {
    const user = getCurrentUser();
    if (!user) return;
    const order = ['none', 'Low', 'Medium', 'High'];
    user.tasks = user.tasks.map(t => {
        if (t.id !== id) return t;
        const currentIdx = order.indexOf(t.priority || 'none');
        return { ...t, priority: order[(currentIdx + 1) % order.length] };
    });
    saveUsersDB();
    renderAll();
};

window.deleteTask = function(id) {
    const user = getCurrentUser();
    if (!user) return;
    user.tasks = user.tasks.filter(t => t.id !== id);
    saveUsersDB();
    renderAll();
};

function createTaskRowHTML(t, showDate = false) {
    const timeDisplay = showDate ? `${t.date} ${t.time || ''}` : (t.time || 'No time');
    const prio = t.priority || 'none';
    const flagClass = prio !== 'none' ? `priority-${prio.toLowerCase()}` : '';
    const prioBadge = prio !== 'none' ? `<span class="prio-pill ${prio.toLowerCase()}">${prio}</span>` : '';

    return `
        <div class="task-item-row ${t.completed ? 'completed' : ''}">
            <input type="checkbox" class="task-checkbox" ${t.completed ? 'checked' : ''} onchange="toggleTask(${t.id})">
            <div class="task-texts">
                <h4>${t.title} ${prioBadge}</h4>
                <p>${t.subtitle || 'Planned focus task'}</p>
            </div>
            <span class="cat-badge">${t.category}</span>
            <span class="task-time-label">${timeDisplay}</span>
            <div class="actions-wrap">
                <button class="flag-btn ${flagClass}" onclick="toggleFlag(${t.id})" title="Priority: ${prio}">⚑</button>
                <button class="dots-btn" onclick="toggleMenu(${t.id}, event)">•••</button>
                <div class="dropdown-menu" id="menu-${t.id}">
                    <button type="button" onclick="openEditModal(${t.id})">✏️ Edit</button>
                    <button type="button" class="danger" onclick="deleteTask(${t.id})">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `;
}

function renderMyDayView() {
    const user = getCurrentUser();
    if (!user) return;

    const accentColor = (MASCOTS[user.avatar] || MASCOTS.whale).color;
    const dayTasks = user.tasks.filter(t => t.date === selectedDateISO);
    const done = dayTasks.filter(t => t.completed).length;
    const total = dayTasks.length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    document.getElementById('progress-percent').textContent = `${pct}%`;
    document.getElementById('progress-done').textContent = done;
    document.getElementById('progress-total').textContent = total;
    document.getElementById('progress-remaining').textContent = total - done;
    document.getElementById('progress-ring').style.background = `conic-gradient(${accentColor} ${pct}%, var(--accent-soft) 0)`;

    const isToday = selectedDateISO === todayISO;
    const dateLabel = new Date(selectedDateISO + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    document.getElementById('tasks-section-title').textContent = isToday ? "Today's tasks" : `Tasks for ${dateLabel}`;
    document.getElementById('schedule-date-title').textContent = dateLabel;
    document.getElementById('today-tasks-count').textContent = `${total} tasks`;

    const listEl = document.getElementById('day-tasks-list');
    listEl.innerHTML = dayTasks.length
        ? dayTasks.map(t => createTaskRowHTML(t, false)).join('')
        : `<p style="font-size:13px; color:var(--text-muted); padding:16px 4px;">No tasks planned for this day yet.</p>`;

    const activeSched = dayTasks.filter(t => !t.completed);
    document.getElementById('schedule-list').innerHTML = activeSched.length
        ? activeSched.map(t => `
            <div class="sched-item">
                <span class="sched-time">${t.time || 'Anytime'}</span>
                <div class="sched-bar"></div>
                <div class="sched-info">
                    <h4>${t.title}</h4>
                    <p>${t.category}</p>
                </div>
            </div>
        `).join('')
        : `<p style="font-size:12px; color:var(--text-muted);">All clear for this day.</p>`;

    const daysData = [
        { day: 'Wed', val: 1 }, { day: 'Thu', val: 2 }, { day: 'Fri', val: 1 },
        { day: 'Sat', val: 3 }, { day: 'Sun', val: 1 }, { day: 'Mon', val: 2 },
        { day: 'Today', val: done, active: true }
    ];
    const maxVal = Math.max(...daysData.map(d => d.val), 3);
    document.getElementById('rhythm-bars').innerHTML = daysData.map(item => {
        const h = Math.max(10, Math.round((item.val / maxVal) * 52));
        return `
            <div class="bar-col ${item.active ? 'active' : ''}">
                <span class="bar-val">${item.val}</span>
                <div class="bar-fill" style="height: ${h}px"></div>
                <span class="bar-day">${item.day}</span>
            </div>
        `;
    }).join('');
}

function renderAllTasksView() {
    const user = getCurrentUser();
    if (!user) return;

    document.getElementById('count-all').textContent = user.tasks.length;
    document.getElementById('count-flagged').textContent = user.tasks.filter(t => t.priority && t.priority !== 'none').length;
    document.getElementById('count-completed').textContent = user.tasks.filter(t => t.completed).length;

    const filtered = user.tasks.filter(t => {
        if (myTasksFilter.type === 'flagged') return t.priority && t.priority !== 'none';
        if (myTasksFilter.type === 'completed') return t.completed;
        if (myTasksFilter.type === 'category') return t.category === myTasksFilter.value;
        return true;
    });

    document.getElementById('all-tasks-list').innerHTML = filtered.length
        ? filtered.map(t => createTaskRowHTML(t, true)).join('')
        : `<p style="font-size:13px; color:var(--text-muted); padding:16px 4px;">No tasks in this view.</p>`;
}

document.getElementById('day-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const title = document.getElementById('day-task-title').value.trim();
    const subtitle = document.getElementById('day-task-subtitle').value.trim();
    const date = document.getElementById('day-task-date').value || selectedDateISO;
    const time = document.getElementById('day-task-time').value;
    const priority = document.getElementById('day-task-priority').value;
    const category = document.getElementById('day-task-category').value;

    if (!title) return;

    user.tasks.unshift({
        id: Date.now(),
        title,
        subtitle,
        category,
        date,
        time,
        priority,
        completed: false
    });

    saveUsersDB();
    renderAll();
    showToast("Task added!", `"${title}" saved to ${category}.`);

    document.getElementById('day-task-title').value = '';
    document.getElementById('day-task-subtitle').value = '';
    document.getElementById('day-task-time').value = '';
});

function renderAll() {
    renderCategoriesUI();
    renderCalendar();
    renderMyDayView();
    renderAllTasksView();
    renderProfileView();
}

applyThemeAndMascot('whale');
enterApp();