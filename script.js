class Modal{
    constructor(){
        this.openButton = document.getElementById('open-button');
        this.modalWindow = document.getElementById('modal-window');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalContent = document.getElementById('modal-content');
        this.url = 'http://localhost/moshiko/simplePopUp/data.php';
    }
    openPopUp(){
        this.getData();
        this.showModal();
    }

    hideModal(){
        this.modalOverlay.classList.remove('show');
        this.modalOverlay.classList.add('hide'); 
    }

    showModal(){
        this.modalOverlay.classList.remove('hide');
        this.modalOverlay.classList.add('show');
    }
    getData(){
        fetch(this.url)
        .then(res=> res.json())
        .then(data=>{
            this.clearData();
           if(data.status !== 'failed'){
            this.showData(data);
           }else{
               this.showError(data)
           }
            
        })
        .catch(e=>{
            console.log(e);
        })
    }

    showData(data_array){
        const ul = document.createElement('ul');
        data_array.map(el=>{
            let li = document.createElement('li');
            li.innerText = el;
            ul.append(li);
        })
        this.modalContent.append(ul);
    }

    clearData(){
        const content = document.querySelector('#modal-content ul');
        const errorContent = document.querySelector('#modal-content div');
        if (content) {
            content.remove();
        }
        if (errorContent) {
            errorContent.remove();
        }
    }

    showError(errorObj){
        const div = document.createElement('div');
        div.innerText = errorObj.error;
        this.modalContent.append(div);
    }
}
const modal = new Modal(); 