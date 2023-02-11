
export const homeContent = {
    ptBR: {
        title: "Guilherme Cheng",
        subtitle: "Desenvolvedor front end",
        pageEntrance: "Bem vindo à minha página!",
        description: [
        "Meu nome é Guilherme, e sou desenvolvedor Front end. Atualmente me dedicando estudos na área e projetos pessoais e freelances.",
        "Aqui é o lugar certo para você que quer me conhecer um pouco melhor!"
        ],

        aboutme: {
            title: "Sobre mim",
            content: [
                "Desde criança sempre fui apaixonado por tecnologia. No entanto, minha jornada neste mundo começou recentemente, em 2020. Ao começar meus estudos em programação, me interessei pelo mundo do front end. Comecei estudando o HTML, CSS e o Javascript. Após me aprofundar muito neste mundo, descobri o React e suas tecnologias.",
                "Hoje em dia trabalho com ReactJS, NextJS, Typescript e outras tecnologias para entregar o melhor e mais atualizado stack para o desenvolvimento front end.",
            ]
        },
        projects: {
            title: "Projetos",
            list: [
                {
                    title: "Larissa Silvestre",
                    description: "",
                    image: "https://github.com/Guilhermecheng.png",
                    imgAlt: "um texto alt",
                    link: "https://www.larissasilvestre.adv.br/",
                },
                {
                    title: "Gasolina Agora",
                    description: "",
                    image: "https://github.com/Guilhermecheng.png",
                    imgAlt: "um texto alt",
                    link: "https://gasolina-agora-website.vercel.app/",
                },
            ]
        },
    },
    en: {
        title: "Guilherme Cheng",
        subtitle: "Front end developer",
        pageEntrance: "Welcome to my page!",
        description: [
        "I'm a front end developer from Brazil, dedicated to studies and personal projects at the moment.",
        "This is the perfect place to know me a little more!",
        ],
        aboutme: {
            title: "About me",
            content: [
                "Since I was a child, I've been a enthusiast of technology. But my journey started only recently, in 2020. Started my studies seeing a bit of everything, but fell in love with front end stack. So, I focused my studies, starting with HTML, CSS and JavaScript, and getting deep into ReactJS and its technologies. ",
                "Today, I use ReactJS, NextJS, Typescript and all of its tools to deliver the best experience possible in front end applications.",
            ]
        },
        projects: {
            title: "Projects",
            list: [
                {
                    title: "Larissa Silvestre website",
                    description: "",
                    image: "https://github.com/Guilhermecheng.png",
                    imgAlt: "um texto alt",
                    link: "https://www.larissasilvestre.adv.br/",
                },
                {
                    title: "Gasolina Agora website",
                    description: "",
                    image: "https://github.com/Guilhermecheng.png",
                    imgAlt: "um texto alt",
                    link: "https://gasolina-agora-website.vercel.app/",
                },
            ]
        },
    },
}

export const projectsList = [
    {
        title: "Larissa Silvestre",
        description: [
            "Website criado para a advogada Larissa Silvestre. Site foi criado utilizando NextJS, Chakra UI, Prismic CMS e Formspree",
            "O objetivo do site é entregar as principais informações sobre o business, além de ser uma forma de contato para quem procura uma advogada de família."
        ],
        descriptionEN:[
            "Webpage for the lawyer Larissa Silvestre. Created using NextJS, Chakra UI, Prismic and Formspree.",
            "The objective is to deliver key information the lawyer, and be a way to contact the office."
        ],
        image: "/lari-silvestre-thumb.png",
        imgAlt: "Thumbnail do site larissasilvestre.adv.br",
        screen:"/lari-website-screen.png",
        screenAlt:"Screenshot do site larissasilvestre.adv.br",
        link: "https://www.larissasilvestre.adv.br/",
        githubLink: "https://github.com/Guilhermecheng/lari-v2",
    },
    {
        title: "Gasolina Agora",
        description: [
            '"Preço do combustível atualizado, a qualquer hora e qualquer lugar"',
            "O Gasolina Agora é um projeto que surgiu em 2022, por dois desenvolvedores, ávidos a trazer uma melhor divulgação de informações a todos os usuários.",
            "O site foi criado com o objetivo de facilitar o acesso ao preço atualizado dos combustíveis. Utilizando como base os dados fornecidos pela ANP, é possível encontrar a média de preço em para cada tipo de combustível, em qualquer cidade do Brasil.",
            "Além da plataforma, existe também a extensão para o navegador Chrome.",
            "PS: site ainda em desenvolvimento."
        ],
        descriptionEN:[
            "Website created to ease access to the updated price of the main fuel types in Brazil. It is possible to see the medium price of the week for each kind of fuel, in any of the capital cities of Brazil.",
            "There's also a chrome extension available.",
            "PS: site in development."
        ],
        image: "/gasolina-agora-thumb.png",
        imgAlt: "thumbnail do site gasolina agora",
        screen:"/gasol-website-screen.png",
        screenAlt:"Screenshot do site Gasolina agora",
        link: "https://gasolina-agora-website.vercel.app/",
    },
    {
        title: "Worldtrip",
        description: [
            '"O site perfeito para você encontrar sua próxima viagem!"',
            "Este site foi criado como um exercício de treinamento para o framework React, juntamente com Typescript, Next.js, Chakra-ui e o uso da API Prismic.",
            "Seu objetivo como caso de estudo foi focar no uso de estilos declarativos, nesse caso Chakra-ui, e responsividade de página, tendo sua estilização adaptada também para dispositivos móveis.",
            "Baseado no exercício criado pela Rocketseat, no treinamento Ignite para ReactJS.",
        ],
        descriptionEN:[
            "This website was created as a training exercise for React framework, along with Typescript, Next.js, Chakra-ui and the use of Prismic API.",
            "It's goal as a study case was to focus on the use declarative styles, in that case Chakra-ui, and page responsiveness, having its stylization adapted for mobiles as well.",
            "Based on an exercise created by Rocketseat, on its Ignite trail for ReactJS.",

        ],
        image: "/worldtrip-thumb.png",
        imgAlt: "thumbnail do projeto Worldtrip",
        screen:"/worldtrip-website-screen.png",
        screenAlt:"Screenshot do site Worldtrip",
        link: "https://worldtrip-ruby.vercel.app/",
        githubLink: "https://github.com/Guilhermecheng/worldtrip",
    },
    {
        title: "Spacetravelling",
        description: [
            "Spacetravelling é um blog focado no mundo da programação.",
            "Uma plataforma simples, criado para dividir ideias e conhecimento com a comunidade.",
            "Projeto de estudo criado com NextJS e a API do Prismic, e treinar o funcionamento de funcões como GetStaticProps e GetStaticPaths",
            "Baseado no exercício criado pela Rocketseat, no treinamento Ignite para ReactJS.",
        ],
        descriptionEN:[
            "Spacetravelling is a blog about the programming world",
            "A simple platform to share knowledge and ideas with the community.",
            "This is a study project to learn and practice the use of Prismic API and also Next.js functions GetStaticProps and GetStaticPaths.",
            "Based on an exercise created by Rocketseat, on its Ignite trail for ReactJS.",
        ],
        image: "/spacetravelling-thumb.png",
        imgAlt: "thumbnail do projeto Spacetravelling",
        screen:"/spacetravelling-screen.png",
        screenAlt:"Screenshot do site Spacetravelling",
        link: "https://spacetravelling-omega.vercel.app/",
        githubLink: "https://github.com/Guilhermecheng/spacetravelling",
    }
    // {
    //     title: "um tema lorem",
    //     description: "Lorem, the famous ipsum, is watching BBB at his sacred house, when should watch Vikings",
    //     image: "https://github.com/Guilhermecheng.png",
    //     imgAlt: "um texto alt",
    // },
    // {
    //     title: "um tema lorem",
    //     description: "Lorem, the famous ipsum, is watching BBB at his sacred house, when should watch Vikings",
    //     image: "https://github.com/Guilhermecheng.png",
    //     imgAlt: "um texto alt",
    // },
    // {
    //     title: "um tema lorem",
    //     description: "Lorem, the famous ipsum, is watching BBB at his sacred house, when should watch Vikings",
    //     image: "https://github.com/Guilhermecheng.png",
    //     imgAlt: "um texto alt",
    // },
]
  