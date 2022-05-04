import { postData } from "../services/requests";

const drop = () => {
    const fileInput = document.querySelectorAll('[name="upload"]'),
        upload = document.querySelectorAll('[name="upload"]');
    
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInput.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);

        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unHighLight(item) {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
    }

    ['dragenter', 'dragleave'].forEach(eventName => {
        fileInput.forEach(input => {
            input.addEventListener(eventName, () => highLight(input), false);

        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInput.forEach(input => {
            input.addEventListener(eventName, () => unHighLight(input), false);

        });
    });

    const clearInputs = () => {
        fileInput.forEach(item => {
            item.value = '';
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    fileInput.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            
            let dots;
            const nameSplitArray = input.files[0].name.split('.');
            nameSplitArray[0].length > 5 ? dots = "..." : dots = '.';
            const uploadFileName = nameSplitArray[0].substring(0, 6) + dots + nameSplitArray[1];
            input.previousElementSibling.textContent = uploadFileName;

            if (input.closest('.main')) {
                const formData = new FormData();
                formData.append('file', input.files[0]);

                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(() => {
                        console.log('error');
                    })
                    .finally(() => {
                        clearInputs();
                    });
            }
        });
    });

};

export default drop;

