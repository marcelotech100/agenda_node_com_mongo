import validator from 'validator';

export default class Login {
    constructor(formClass) {
       this.form = document.querySelector(formClass);
       this.errors = document.querySelector('.errors');
    }

    init() {
      this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const senhaInput = el.querySelector('input[name="senha"]');

        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            if(this.errors.hasChildNodes()) {
                this.errors.innerHTML = '';
            }
            const emailError = 'E-mail inválido.';
            this.errors.innerHTML += emailError + '<br>';
            error = true;
        }

        if(senhaInput.value.length < 3 || senhaInput.value.length > 50) {
            const senhaError = 'Senha precisa ter entre 3 e 50 caracteres.';
            this.errors.innerHTML += senhaError;
            error = true;
        }

        if (error) { 
            this.errors.style.display = 'block'; // Exibe a div de erros 
        } else { 
            this.errors.style.display = 'none'; // Oculta a div de erros 
            el.submit(); 
        }
    }
}