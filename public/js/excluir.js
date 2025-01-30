document.addEventListener('DOMContentLoaded', function () {
    

    let btnExcluir = document.querySelectorAll('#excluir');
    for (let btn of btnExcluir) {
        btn.addEventListener('click', excluir)
    }

    function excluir () {
        let id = this.dataset.id;

        if(id != null) {
            if(confirm("Tem certeza que deseja excluir essa pessoa?")) {
                let that = this;

                if(id) {
                    fetch(`/${id}`)
                    .then(r => {
                        return r.json();
                    })
                    .then(body => {
                        if(body.ok) {
                            that.parentElement.parentElement.remove();
                        }
                    })
                }
            }
        }
    }
})