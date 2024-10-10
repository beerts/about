// Espera o DOM ser carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento ao botão "Saiba Mais"
    document.getElementById('saibaMaisBtn').addEventListener('click', function() {
        this.classList.add('btn-click-animation');

        // Aguarda a animação terminar antes de rolar
        setTimeout(() => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            this.classList.remove('btn-click-animation');
        }, 300);
    });

    let isTranslated = false; // Variável para rastrear se o texto está traduzido

    // Função de tradução da biografia
    document.getElementById('translateBtn').addEventListener('click', function() {
        const bioText = document.getElementById('bio');

        // Verifica se o texto está traduzido
        if (isTranslated) {
            bioText.innerHTML = `Olá, eu sou Bernardo, 23 anos, brasileiro.<br>
            Tenho conhecimento em Python, HTML, CSS, PowerBI e Excel.<br>
            Frameworks como Streamlit, Flask, TKInter, Pandas e Matplotlib.<br>
            Áreas principais de foco incluem Desenvolvimento Web, Back-end e Análise de Dados.<br>
            Também estou estudando mais sobre Inteligência Artificial.<br>
            Atualmente trabalhando em Tecnologia da Informação (TI).`;
        } else {
            bioText.innerHTML = `Hello, I'm Bernardo, 23y Brazilian.<br>
            I have knowledge in Python, HTML, FastHTML, CSS, PowerBI, and Excel.<br>
            Frameworks such as Django, Streamlit, Flask, TKInter, Pandas, and Matplotlib.<br>
            Areas of focus include Web Development, Back-end, and Data Analysis.<br>
            I am also studying more about Artificial Intelligence.<br>
            Actually working in Information Technology (IT).`;
        }

        // Alterna o estado da variável
        isTranslated = !isTranslated;
    });

    // Animação dos botões com classe .btn-6
    $(function() {  
        $('.btn-6')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
    });

    // Função para alternar o navbar
    function toggleNavbar() {
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle("show");
    }

    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');

    navbarToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });

    // Função de contagem
    const counters = document.querySelectorAll('.count');
    const speed = 75; // Velocidade da contagem

    // Função para iniciar a contagem
    const startCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText;
        const increment = target / speed;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    // Configuração do IntersectionObserver
    const observerOptions = {
        threshold: 0.5 // Quando 50% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                startCount(counter); // Inicia a contagem
                observer.unobserve(counter); // Para de observar após iniciar a contagem
            }
        });
    }, observerOptions);

    // Adiciona todos os contadores para serem observados
    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Rolagem suave ao clicar nas setinhas
    const scrollDownLinks = document.querySelectorAll('.scroll-down');
    scrollDownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href'); // Obtém o ID do destino
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
