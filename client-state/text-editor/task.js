const textEditor = function() {
    const editor = document.getElementById('editor');
    const clearBtn = document.getElementById('clear');

    if(localStorage.editorValue) {
        editor.value = localStorage.editorValue;
    }

    
    editor.addEventListener('input', function() {
        console.log(editor.value);
        localStorage.setItem('editorValue', editor.value);
    });

    clearBtn.addEventListener('click', function() {
        localStorage.clear();
        editor.value = "";
    });

};

window.addEventListener('DOMContentLoaded', textEditor);