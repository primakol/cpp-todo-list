// Поточна реальна дата
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

// Категорії користувача
const defaultCategories = ["Work", "Personal", "Learning"];
let categories = JSON.parse(localStorage.getItem('demak_categories')) || [...defaultCategories];

// Початкові завдання прив'язані до сьогоднішньої дати
const initialTasks = [
    { id: 1, title: "Finalize the website proposal", subtitle: "Review the scope and send it to the client", category: "Work", date: todayISO, time: "10:00", priority: "High", completed: false },
    { id: 2, title: "Plan next week's priorities", subtitle: "Make space for the big ideas", category: "Work", date: todayISO, time: "11:30", priority: "Medium", completed: false },
    { id: 3, title: "Read 20 pages", subtitle: "Atomic Habits - Chapter 4", category: "Learning", date: todayISO, time: "13:00", priority: "Low", completed: false },
    { id: 4, title: "Book a dentist appointment", subtitle: "A little life admin", category: "Personal", date: todayISO, time: "16:00", priority: "none", completed: false },
    { id: 5, title: "Morning stretch & a glass of water", subtitle: "A good start to a good day", category: "Personal", date: todayISO, time: "08:00", priority: "none", completed: true }
];

let tasks = JSON.parse(localStorage.getItem('demak_tasks_v2')) || initialTasks;
let myTasksFilter = { type: 'all', value: null };
let toastTimeout = null;

function saveState() {
    localStorage.setItem('demak_tasks_v2', JSON.stringify(tasks));
    localStorage.setItem('demak_categories', JSON.stringify(categories));
}

// Актуальна дата зверху сторінки
function initHeaderDate() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('current-date-eyebrow').textContent = realToday.toLocaleDateString('en-US', options).toUpperCase();
    document.getElementById('day-task-date').value = todayISO;
}

// Спливаюче повідомлення з китом
function showWhaleToast(taskTitle) {
    const toast = document.getElementById('whale-toast');
    document.getElementById('toast-message').textContent = `"${taskTitle}" added!`;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Додавання власної групи
window.promptNewCategory = function() {
    const name = prompt("Enter new group name (e.g. University, Health):");
    if (!name) return;
    const clean = name.trim();
    if (clean && !categories.includes(clean)) {
        categories.push(clean);
        saveState();
        renderCategoriesUI();
    }
};

// Видалення власної групи
window.deleteCategory = function(catName, event) {
    event.stopPropagation();
    if (!confirm(`Delete group "${catName}"? Tasks inside will move to Personal.`)) return;

    categories = categories.filter(c => c !== catName);
    tasks = tasks.map(t => t.category === catName ? { ...t, category: 'Personal' } : t);

    if (myTasksFilter.type === 'category' && myTasksFilter.value === catName) {
        myTasksFilter = { type: 'all', value: null };
        document.getElementById('active-filter-label').textContent = 'All tasks';
        const firstFilter = document.querySelector('#overview-filter-list .filter-item');
        if (firstFilter) firstFilter.classList.add('active');
    }

    saveState();
    renderAll();
};

function renderCategoriesUI() {
    document.querySelectorAll('.category-dropdown').forEach(select => {
        const currentVal = select.value;
        select.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
        if (categories.includes(currentVal)) select.value = currentVal;
    });

    const listEl = document.getElementById('custom-categories-list');
    listEl.innerHTML = categories.map(cat => {
        const count = tasks.filter(t => t.category === cat).length;
        const isActive = myTasksFilter.type === 'category' && myTasksFilter.value === cat ? 'active' : '';
        const isCustom = !defaultCategories.includes(cat);
        const deleteBtn = isCustom
            ? `<button type="button" class="del-cat-btn" onclick="deleteCategory('${cat}', event)" title="Delete group">✕</button>`
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

// Перемикання фільтрів на сторінці My tasks
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
    document.getElementById('tab-myday').classList.toggle('active', view === 'myday');
    document.getElementById('tab-mytasks').classList.toggle('active', view === 'mytasks');
    renderAll();
};

// Календар із перемиканням місяців
window.changeMonth = function(delta) {
    calViewMonth += delta;
    if (calViewMonth < 0) {
        calViewMonth = 11;
        calViewYear--;
    } else if (calViewMonth > 11) {
        calViewMonth = 0;
        calViewYear++;
    }
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
        const hasTasks = tasks.some(t => t.date === cellISO) && !isSelected ? 'has-dot' : '';

        html += `<div class="cal-day ${isSelected} ${isToday} ${hasTasks}" onclick="selectCalendarDate('${cellISO}')">${d}</div>`;
    }

    const totalCells = startOffset + daysInMonth;
    const trailing = (7 - (totalCells % 7)) % 7;
    for (let t = 1; t <= trailing; t++) {
        html += `<div class="cal-day muted">${t}</div>`;
    }

    document.getElementById('calendar-grid').innerHTML = html;
}

// Меню на 3 крапки: Редагувати або Видалити
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
    const task = tasks.find(t => t.id === id);
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
    const id = Number(document.getElementById('edit-task-id').value);
    tasks = tasks.map(t => t.id === id ? {
        ...t,
        title: document.getElementById('edit-task-title').value.trim(),
        subtitle: document.getElementById('edit-task-subtitle').value.trim(),
        date: document.getElementById('edit-task-date').value || todayISO,
        time: document.getElementById('edit-task-time').value,
        category: document.getElementById('edit-task-category').value,
        priority: document.getElementById('edit-task-priority').value
    } : t);
    saveState();
    closeEditModal();
    renderAll();
});

window.toggleTask = function(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveState();
    renderAll();
};

// Перемикання пріоритетів по колу (None -> Low -> Medium -> High)
window.toggleFlag = function(id) {
    const order = ['none', 'Low', 'Medium', 'High'];
    tasks = tasks.map(t => {
        if (t.id !== id) return t;
        const currentIdx = order.indexOf(t.priority || 'none');
        const nextPriority = order[(currentIdx + 1) % order.length];
        return { ...t, priority: nextPriority };
    });
    saveState();
    renderAll();
};

window.deleteTask = function(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveState();
    renderAll();
};

function createTaskRowHTML(t, showDate = false) {
    const timeDisplay = showDate ? `${t.date} ${t.time || ''}` : (t.time || 'No time');
    const prio = t.priority || 'none';
    const flagClass = prio !== 'none' ? `priority-${prio.toLowerCase()}` : '';
    const prioBadge = prio !== 'none'
        ? `<span class="prio-pill ${prio.toLowerCase()}">${prio}</span>`
        : '';

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
                <button class="flag-btn ${flagClass}" onclick="toggleFlag(${t.id})" title="Priority: ${prio} (click to change)">⚑</button>
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
    const dayTasks = tasks.filter(t => t.date === selectedDateISO);
    const done = dayTasks.filter(t => t.completed).length;
    const total = dayTasks.length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    document.getElementById('progress-percent').textContent = `${pct}%`;
    document.getElementById('progress-done').textContent = done;
    document.getElementById('progress-total').textContent = total;
    document.getElementById('progress-remaining').textContent = total - done;
    document.getElementById('progress-ring').style.background = `conic-gradient(#462683 ${pct}%, #EAE6F8 0)`;

    const isToday = selectedDateISO === todayISO;
    const dateLabel = new Date(selectedDateISO + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    document.getElementById('tasks-section-title').textContent = isToday ? "Today's tasks" : `Tasks for ${dateLabel}`;
    document.getElementById('schedule-date-title').textContent = dateLabel;
    document.getElementById('today-tasks-count').textContent = `${total} tasks`;

    const listEl = document.getElementById('day-tasks-list');
    listEl.innerHTML = dayTasks.length
        ? dayTasks.map(t => createTaskRowHTML(t, false)).join('')
        : `<p style="font-size:13px; color:#84809E; padding:16px 4px;">No tasks planned for this day yet.</p>`;

    // Розклад справа
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
        : `<p style="font-size:12px; color:#84809E;">All clear for this day.</p>`;

    // Графік ритму
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
    document.getElementById('count-all').textContent = tasks.length;
    document.getElementById('count-flagged').textContent = tasks.filter(t => t.priority && t.priority !== 'none').length;
    document.getElementById('count-completed').textContent = tasks.filter(t => t.completed).length;

    const filtered = tasks.filter(t => {
        if (myTasksFilter.type === 'flagged') return t.priority && t.priority !== 'none';
        if (myTasksFilter.type === 'completed') return t.completed;
        if (myTasksFilter.type === 'category') return t.category === myTasksFilter.value;
        return true;
    });

    document.getElementById('all-tasks-list').innerHTML = filtered.length
        ? filtered.map(t => createTaskRowHTML(t, true)).join('')
        : `<p style="font-size:13px; color:#84809E; padding:16px 4px;">No tasks in this view.</p>`;
}

// Додавання нового завдання
document.getElementById('day-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('day-task-title').value.trim();
    const subtitle = document.getElementById('day-task-subtitle').value.trim();
    const date = document.getElementById('day-task-date').value || selectedDateISO;
    const time = document.getElementById('day-task-time').value;
    const priority = document.getElementById('day-task-priority').value;
    const category = document.getElementById('day-task-category').value;

    if (!title) return;

    tasks.unshift({
        id: Date.now(),
        title,
        subtitle,
        category,
        date,
        time,
        priority,
        completed: false
    });

    saveState();
    renderAll();
    showWhaleToast(title);

    document.getElementById('day-task-title').value = '';
    document.getElementById('day-task-subtitle').value = '';
    document.getElementById('day-task-time').value = '';
});

function renderAll() {
    renderCategoriesUI();
    renderCalendar();
    renderMyDayView();
    renderAllTasksView();
}

initHeaderDate();
renderAll();