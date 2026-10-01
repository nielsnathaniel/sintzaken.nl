// Check if user is admin (this can be passed securely from backend, but since frontend components fetch data that includes _is_admin, we can check it there)
// A better way: fetch a fast endpoint
export async function initAdminEdit() {
    try {
        const res = await fetch('/api/get_content.php?page=home');
        const data = await res.json();
        
        if (data._is_admin) {
            setupEditor();
        }
    } catch(e) {}
}

function setupEditor() {
    // Add CSS for edit mode
    const style = document.createElement('style');
    style.innerHTML = `
        .cms-editable {
            position: relative;
            display: inline-block;
            border: 1px dashed rgba(255,255,255,0.4);
            border-radius: 4px;
            padding: 2px 4px;
            margin: -2px -4px;
            transition: all 0.2s;
            cursor: pointer;
        }
        .cms-editable:hover {
            border-color: #d4af37;
            background: rgba(212, 175, 55, 0.1);
        }
        .cms-editable::after {
            content: '✏️';
            position: absolute;
            top: -10px;
            right: -15px;
            font-size: 14px;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .cms-editable:hover::after {
            opacity: 1;
        }
        .cms-editable[contenteditable="true"] {
            border: 2px solid #8a1538;
            background: rgba(255,255,255,0.9);
            color: #000;
            outline: none;
            cursor: text;
        }
        .cms-editable[contenteditable="true"]::after { display: none; }
        
        #cms-save-toast {
            position: fixed; bottom: 20px; right: 20px;
            background: #166534; color: white; padding: 12px 24px;
            border-radius: 8px; font-weight: bold; z-index: 99999;
            transform: translateY(100px); opacity: 0; transition: all 0.3s;
        }
        #cms-save-toast.show { transform: translateY(0); opacity: 1; }
    `;
    document.head.appendChild(style);

    const toast = document.createElement('div');
    toast.id = 'cms-save-toast';
    toast.innerText = '✅ Tekst Opgeslagen!';
    document.body.appendChild(toast);

    // Give components time to mount
    setTimeout(() => {
        const editables = document.querySelectorAll('.cms-editable');
        editables.forEach(el => {
            el.addEventListener('click', (e) => {
                if(el.getAttribute('contenteditable') !== 'true') {
                    e.preventDefault();
                    el.setAttribute('contenteditable', 'true');
                    el.focus();
                    
                    // Add blur event to save
                    el.addEventListener('blur', function saveOnBlur() {
                        el.removeAttribute('contenteditable');
                        el.removeEventListener('blur', saveOnBlur);
                        saveContent(el.getAttribute('data-page'), el.getAttribute('data-key'), el.innerHTML);
                    });
                }
            });
        });
    }, 1000);
}

async function saveContent(page, key, value) {
    try {
        const res = await fetch('/api/save_inline_content.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ page, key, value })
        });
        const result = await res.json();
        if(result.status === 'success') {
            const toast = document.getElementById('cms-save-toast');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    } catch(e) {
        console.error("Save failed", e);
    }
}
