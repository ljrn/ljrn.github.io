//Traduction object
const trad = {
  "french": {
    "about": "À propos de moi",
    "work": "Mes travaux",
    "contact": "Me contacter",
    "my_works": "Mes principaux travaux",
    "inforoutes": "Inforoutes",
    "inforoutes_text": "Cette application a été créée pour permettre aux Nordistes et aux agents du Département du Nord de visualiser les interventions en cours et à venir sur le réseau routier départemental et de consulter les détails des chaussées du Nord.",
    "carottages": "Classification automatique de carottages routiers",
    "carottages_text": "Ce modèle de Machine Learning (XGBoost) a été entraîné afin de mieux connaître les routes du Département du Nord. Il a pour but de reconnaître les carottages routiers et de les classer dans différentes catégories afin d'établir des structures de routes homogènes.",
    "signs": "Reconnaissance automatique de panneaux de signalisation routière",
    "signs_text": "Ce modèle de Computer Vision (YOLOv8) a été entraîné dans le cadre du projet de relevé de patrimoine du Département du Nord. Il a pour but de reconnaître les panneaux de signalisation routière et de les classer dans différentes catégories afin de renseigner la base de données du SIG.",
    "portfolio": "Portfolio",
    "portfolio_text": "Ce portfolio a été créé pour résumer mon CV et présenter plus précisément mes projets. Celui-ci permet de visualiser mes compétences et d'accéder aux dépôts GIT de mes projets. Vous pouvez m'envoyer un mail via l'onglet \"Me contacter\".",
    "graph_modeling": "Application de modélisation de graphes",
    "graph_modeling_text": "Cette application a été créée pour générer un graphe depuis un modèle pour résoudre des problèmes de transports. Elle permet d'optimiser la répartition de certaines charges de transport via les algorithmes de résolution de graphes.",
    "forecast": "Logiciel de calculs prévisionnels",
    "forecast_text": "Ce logiciel a été réalisé, en collaboration avec un ingénieur du bâtiment, pour faciliter les décisions en matière de travaux sur les structures d’ingénierie. Il calcule l’état des structures d’ingénierie sur une période donnée et donne les coûts potentiels des réparations.",
    "infineed" : "Infineed",
    "infineed_text" : "Cette application web progressive (PWA) a été créée lors de mon passage dans un groupe de recherche de l'Université de Neuchâtel. Elle a pour but de réduire la consommation énergétique des utilisateurs en les faisant discuter avec un Chatbot d'assitance. Nous avons paramétré l'API ChatGPT pour réaliser cette tâche.",
    "stat_pavement": "Analyse statistique de la notation des chaussées",
    "stat_pavement_text": "Cette analyse a été faite pour aider la direction à prendre des décisions sur les travaux à effectuer. Celle-ci implique la mise en place d'un modèle statistique et la manipulation d'une grande base de données.",
    "secure_novanet": "Sécurisation d'une application Web contre les vulnérabilités XSS",
    "secure_novanet_text": "Ce projet a été réalisé pour sécuriser Novanet, un logiciel d'Antenia, contre les vulnérabilités XSS. Il s'appuie particulièrement sur les technologies en lien avec le HEADER des requêtes HTTP et l'analyse de ces requêtes.",
    "secure_chat": "Chat en ligne sécurisé",
    "secure_chat_text": "Création d'un chat Web sécurisé avec cryptage RSA et mots de passe SALT. Ce site introduit des notions de cryptographie relativement sécurisantes et montre leur implémentation en JAVA.",
    "video_games": "Site web de recherche de jeux-vidéos",
    "video_games_text": "Création d’un site Web de recherche de jeux vidéo avec le modèle Single Page App (SPA) et la programmation par composants (Principe de REACT). La mise en page du site a été faite via l'API Materialize.",
    "web_server": "Serveur web",
    "web_server_text": "Développement d'un serveur web permettant la diffusion de fichiers en réseau.",
    "M3d": "Logiciel de modélisation 3D",
    "M3d_text": "Ce logiciel a été créé pour transformer les modèles . ply en modèles 3D en utilisant JavaFX et le design pattern MVC. Il a été développé en collaboration avec trois collègues nommés Baptiste Momut, Mohamed Bourdim et Mohnes Hamroun. La visualisation est faite en JavaFX et s'appuie sur des transformations mathématiques permettant de manipuler le nuage de points.",
    "about_me_text": "À propos de moi",
    "about_text": "Actuellement étudiant en formation d'Ingénieur Informatique et Statistique à l’École polytechnique de l’Université de Lille (Polytech), je suis également apprenti au \"Département du Nord\" en tant que Machine Learning et Software Engineer. Avant Polytech, j’ai étudié le développement logiciel pendant 2 ans à l’Institut Universitaire de Technologie de Lille. Ces 2 années m’ont permis de découvrir le développement logiciel et obtenir mon premier diplôme dans ce domaine.",
    "skills": "Mes compétences",
    "employment_education_title": "Emploi et Education",
    "employment_text": "Emploi",
    "education_text": "Education",
    "nord_date" : "2021 - Présent",
    "unine_text" : "Université de Neuchâtel (Suisse)",
    "unine_text2" : "Université de Neuchâtel (Suisse)",
    "polytech_date": "2021 - Présent",
    "lang": "Langues",
    "french": "Français",
    "mother_tongue":"Langue maternelle",
    "english": "Anglais",
    "spanish": "Espagnol",
    "portuguese": "Portugais",
    "personal": "Personnel",
    "football": "Football",
    "gastronomy": "Gastronomie",
    "hardware": "Hardware",
    "travel": "Voyages",
    "contact_me_text": "Me contacter",
    "name": "nom",
    "message": "votre message",
    "send_btn": "envoyer"
  },
  "english": {
    "about": "About me",
    "work": "My work",
    "contact": "Contact me",
    "my_works": "My main work",
    "inforoutes": "Inforoutes",
    "inforoutes_text": "This application was created to allow Northeners and agents of the \"Département du Nord\" to visualize the interventions in progress and to come on the departmental road network and to consult the details of the roadways.",
    "carottages": "Automatic classification of road corings",
    "carottages_text": "This Machine Learning model (XGBoost) was trained to have a better knowledge about the roads of the \"Département du Nord\". Its purpose is to recognize road corings and classify it into different categories to establish homogeneous road structures.",
    "signs": "Traffic Signs Recognition with Computer Vision",
    "signs_text": "This Computer Vision model (YOLOv8) was trained as part of the heritage survey project of the \"Département du Nord\". Its purpose is to recognize road signs and classify them into different categories to update the GIS database.",
    "infineed" : "Infineed",
    "infineed_text": "This progressive web app (PWA) was created during my time in a research group of the University of Neuchâtel. It aims to reduce the energy consumption of users by making them discuss with a Chatbot. We have set up the ChatGPT API to perform this task.",
    "portfolio": "Portfolio",
    "portfolio_text": "This portfolio was created to summarize my resume and present more precisely my projects. This allows you to view my skills and access the GIT repositories of my projects. You can send me an email via the \"Contact me\" page.",
    "graph_modeling": "Graph Modeling Application",
    "graph_modeling_text": "This application was made to generate a graph from a model to resolve transport problems. It allows to optimize the distribution of certain transport loads via the algorithms of resolution of graphs.",
    "forecast": "Forecast Calculation Software",
    "forecast_text": "This software was made, in collaboration with a building engineer, to help decisions in terms of works on engineering structures. It calculates the condition of the engineering structures over a given period and gives the potential costs of repairs.",
    "stat_pavement": "Statistical Analysis Of Pavement Ratings",
    "stat_pavement_text": "This analysis was done to assist management in making decisions on the works to be performed. This involves setting up a statistical model and manipulating a large database.",
    "secure_novanet": "Securing a Web Application against XSS vulnerabilities",
    "secure_novanet_text": "This project was made to secure Novanet, an Antenia's software, against XSS vulnerabilities. It particularly relies on technologies related to the HEADER of HTTP requests and the analysis of these requests.",
    "secure_chat": "Secure Web Chat",
    "secure_chat_text": "Creating a secure Web Chat with RSA encryption and SALT passwords. This site introduces relatively secure cryptography concepts and shows their implementation in JAVA.",
    "video_games": "Video games website",
    "video_games_text": "Creating a video games Website with the Single Page App (SPA) Model and components programming (similar to REACT). The styling of the site has been made with the Materialize API.",
    "web_server": "Web Server",
    "web_server_text": "Creating a Web Server for the distribution of networked files.",
    "M3d": "3D Modeling Software",
    "M3d_text": "This software has been created to transform .ply models into 3D models using JavaFX and MVC pattern. It has been developped in collaboration with three collegues named Baptiste Momut, Mohamed Bourdim and Mohnes Hamroun. The visualization is made with JavaFX and relies on mathematical transformations to manipulate the point cloud.",
    "about_me_text": "About me",
    "about_text": "Currently studying Software Engineering and Data Science at the Polytechnic University For Sciences and Technologies of Lille (Polytech), I am also apprentice at the \"Département du Nord\" as a Machine Learning and Software Engineer. Before Polytech, I studied software development for 2 years at the University Institute of Technology of Lille. These 2 years have allowed me to discover software development and get my first diploma in this field.",
    "skills": "My skills",
    "employment_education_title": "Employment and Education",
    "employment_text": "Employment",
    "education_text": "Education",
    "nord_date" : "2021 - Present",
    "unine_text" : "University of Neuchâtel (Switzerland)",
    "unine_text2" : "University of Neuchâtel (Switzerland)",
    "polytech_date": "2021 - Present",
    "lang": "Languages",
    "french": "French",
    "mother_tongue":"Mother tongue",
    "english": "English",
    "spanish": "Spanish",
    "portuguese": "Portuguese",
    "personal": "Personal",
    "football": "Football",
    "gastronomy": "Gastronomy",
    "hardware": "Hardware",
    "travel": "Trips",
    "contact_me_text": "Contact me",
    "name": "name",
    "message": "your message",
    "send_btn": "send"
  },
  "spanish": {
    "about": "Sobre mí",
    "work": "Mis trabajos",
    "contact": "Contactarme",
    "my_works": "Mis trabajos principales",
    "inforoutes": "Inforoutes",
    "inforoutes_text": "Esta aplicación fue creada para permitir a los habitantes del Norte y a los agentes del \"Département du Nord\" visualizar las intervenciones en curso y por venir en la red de carreteras departamentales y consultar los detalles de las calzadas.",
    "carottages": "Clasificación automática de perforación de carreteras",
    "carottages_text": "Este modelo de Machine Learning (XGBoost) fue entrenado para tener un mejor conocimiento sobre las carreteras del \"Département du Nord\". Su propósito es reconocer las perforaciones de carreteras y clasificarlas en diferentes categorías para establecer estructuras de carreteras homogéneas.",
    "signs": "Reconocimiento Automático de Señales de Tráfico",
    "signs_text": "Este modelo de Computer Vision (YOLOv8) fue entrenado como parte del proyecto de relevamiento patrimonial del \"Département du Nord\". Su propósito es reconocer señales de tráfico y clasificarlas en diferentes categorías para actualizar la base de datos del SIG.",
    "infineed" : "Infineed",
    "infineed_text" : "Esta aplicación web progressiva (PWA) fue creada durante mi paso por un grupo de investigación la Universidad de Neuchâtel. Su objetivo es reducir el consumo de energía de los usuarios haciéndolos hablar con un Chatbot de asistencia. Hemos configurado la API ChatGPT para realizar esta tarea.",
    "portfolio": "Cartera",
    "portfolio_text": "Esta cartera fue creada para resumir mi currículum y presentar más precisamente mis proyectos. Esto le permite ver mis habilidades y acceder a los repositorios de GIT de mis proyectos. Puede enviarme un correo electrónico a través de la página \"Contactarme\".",
    "graph_modeling": "Aplicación de modelado de gráfos",
    "graph_modeling_text": "Esta aplicación se hizo para generar un gráfo a partir de un modelo para resolver problemas de transporte. Permite optimizar la distribución de ciertas cargas de transporte a través de los algoritmos de resolución de gráfos.",
    "forecast": "Software de cálculo de pronóstico",
    "forecast_text": "Este software fue realizado, en colaboración con un ingeniero de construcción, para ayudar a tomar decisiones en términos de obras en estructuras de ingeniería. Calcula el estado de las estructuras de ingeniería durante un período determinado y da los costos potenciales de las reparaciones.",
    "stat_pavement": "Análisis estadístico de las calificaciones de pavimento",
    "stat_pavement_text": "Este análisis se realizó para ayudar a la dirección en la toma de decisiones sobre las obras a realizar. Esto implica establecer un modelo estadístico y manipular una gran base de datos.",
    "secure_novanet": "Protección de una aplicación web contra vulnerabilidades XSS",
    "secure_novanet_text": "Este proyecto fue hecho para asegurar Novanet, un software de Antenia, contra vulnerabilidades XSS. Se basa particularmente en las tecnologías relacionadas con el HEADER de los HTTP request y el análisis de estos request.",
    "secure_chat": "Secure Web Chat",
    "secure_chat_text": "Creación de un chat web seguro con cifrado RSA y contraseñas SALT. Este sitio presenta conceptos de criptografía relativamente seguros y muestra su implementación en JAVA.",
    "video_games": "Sitio web de videojuegos",
    "video_games_text": "Creación de un sitio web de videojuegos con el modelo Single Page App (SPA) y programación de componentes. El estilo del sitio se ha hecho con la API Materialize.",
    "web_server": "Servidor web",
    "web_server_text": "Creación de un servidor web para la distribución de ficheros en red.",
    "M3d": "3D Modeling Software",
    "M3d_text": "Este software ha sido creado para transformar modelos . ply en modelos 3D utilizando JavaFX y MVC patrón. Ha sido desarrollado en colaboración con tres colegas llamados Baptiste Momut, Mohamed Bourdim y Mohnes Hamroun. La visualización se realiza con JavaFX y se basa en transformaciones matemáticas para manipular la nube de puntos.",
    "about_me_text": "Sobre mí",
    "about_text": "Actualmente estudiando Software Engineering y Data Science en la Escuela Politécnica de la Universidad de Lille (Polytech), También soy aprendiz en el \"Département du Nord\" como Machine Learning y Software Engineer. Antes de Polytech, estudié Software Development durante 2 años en el Instituto Universitario de Tecnología de Lille. Estos 2 años me han permitido descubrir el software development y obtener mi primer diploma en este campo.",
    "skills": "Mis competencias",
    "employment_education_title": "Empleo y Educación",
    "employment_text": "Empleo",
    "education_text": "Educación",
    "nord_date" : "2021 - Presente",
    "unine_text" : "Universidad de Neuchâtel (Suiza)",
    "unine_text2" : "Universidad de Neuchâtel (Suiza)",
    "polytech_date": "2021 - Presente",
    "lang": "Idiomas",
    "french": "Francés",
    "mother_tongue":"Idioma materno",
    "english": "Inglés",
    "spanish": "Español",
    "portuguese": "Portugués",
    "personal": "Personal",
    "football": "Fútbol",
    "gastronomy": "Gastronomía",
    "hardware": "Hardware",
    "travel": "Viajes",
    "contact_me_text": "Contactarme",
    "name": "nombre",
    "message": "su mensaje",
    "send_btn": "mandar"
  },
  "portuguese": {
    "about": "Sobre mim",
    "work": "Meus trabalhos",
    "contact": "Contactar-me",
    "my_works": "Meus trabalhos principais",
    "inforoutes": "Inforoutes",
    "inforoutes_text": "Esta aplicação foi criada para permitir aos habitantes do Norte e aos agentes do \"Département du Nord\" visualizar as intervenções em curso e a vir na rede rodoviária departamental e consultar os detalhes das vias.",
    "carottages": "Classificação automática de perfurações rodoviárias",
    "carottages_text": "Este modelo de Machine Learning (XGBoost) foi treinado para ter um melhor conhecimento sobre as estradas do \"Département du Nord\". Seu objetivo é reconhecer as perfurações rodoviárias e classificá-las em diferentes categorias para estabelecer estruturas rodoviárias homogêneas.",
    "signs": "Reconhecimento Automático de Sinais de Trânsito",
    "signs_text": "Este modelo de Computer Vision (YOLOv8) foi treinado como parte do projeto de levantamento do patrimônio do \"Département du Nord\". Seu objetivo é reconhecer sinais de trânsito e classificá-los em diferentes categorias para atualizar o banco de dados do GIS.",
    "infineed" : "Infineed",
    "infineed_text" : "Esta aplicação web progressiva (PWA) foi criada durante a minha passagem por um grupo de pesquisa da Universidade de Neuchâtel. Tem como objetivo reduzir o consumo de energia dos usuários fazendo-os conversar com um Chatbot de assistência. Configuramos a API ChatGPT para realizar esta tarefa.",
    "portfolio": "Carteira",
    "portfolio_text": "Esta carteira foi criada para resumir meu currículo e apresentar mais precisamente meus projetos. Isso permite que você veja minhas habilidades e acesse os repositórios GIT dos meus projetos. Pode enviar-me um e-mail através da página \"Contactar-me\".",
    "graph_modeling": "Aplicação de modelagem de gráfos",
    "graph_modeling_text": "Esta aplicação foi feita para gerar um gráfo a partir de um modelo para resolver problemas de transporte. Permite otimizar a distribuição de certas cargas de transporte através dos algoritmos de resolução de gráfos.",
    "forecast": "Software de cálculo de previsão",
    "forecast_text": "Este software foi desenvolvido, em colaboração com um engenheiro de construção, para ajudar a tomar decisões em termos de obras em estruturas de engenharia. Calcula o estado das estruturas de engenharia durante um período determinado e dá os custos potenciais das reparações.",
    "stat_pavement": "Análise estatística das notações de pavimento",
    "stat_pavement_text": "Esta análise foi realizada para ajudar a direção na tomada de decisões sobre as obras a serem realizadas. Isto implica estabelecer um modelo estatístico e manipular uma grande base de dados.",
    "secure_novanet": "Proteção de uma aplicação web contra vulnerabilidades XSS",
    "secure_novanet_text": "Este projeto foi feito para garantir a Novanet, um software de Antenia, contra vulnerabilidades XSS. Baseia-se particularmente nas tecnologias relacionadas com o HEADER dos HTTP request e a análise destes request.",
    "secure_chat": "Secure Web Chat",
    "secure_chat_text": "Criação de um chat web seguro com criptografia RSA e senhas SALT. Este site apresenta conceitos de criptografia relativamente seguros e mostra sua implementação em JAVA.",
    "video_games": "Sítio Web de jogos de vídeo",
    "video_games_text": "Criação de um site de videojogos com o modelo Single Page App (SPA) e programação de componentes. O estilo do site foi feito com a API Materialize.",
    "web_server": "Servidor web",
    "web_server_text": "Criação de um servidor web para a distribuição de ficheiros em rede.",
    "M3d": "3D Modeling Software",
    "M3d_text": "Este software foi criado para transformar modelos .ply em modelos 3D usando JavaFX e MVC padrão. Foi desenvolvido em colaboração com três colegas chamados Baptiste Momut, Mohamed Bourdim e Mohnes Hamroun. A visualização é feita com JavaFX e é baseada em transformações matemáticas para manipular a nuvem de pontos.",
    "about_me_text": "Sobre mim",
    "about_text": "Atualmente estudando Software Engineering e Data Science na Escola Politécnica da Universidade de Lille (Polytech), também sou aprendiz no \"Département du Nord \" como Machine Learning e Software Engineer. Antes da Polytech, estudei Software Development durante 2 anos no Instituto Universitário de Tecnologia de Lille. Estes 2 anos me permitiram descobrir o software development e obter meu primeiro diploma neste campo.",
    "skills": "Minhas competências",
    "employment_education_title": "Emprego e Educação",
    "employment_text": "Emprego",
    "education_text": "Educação",
    "nord_date" : "2021 - Presente",
    "unine_text" : "Universidade de Neuchâtel (Suíça)",
    "unine_text2" : "Universidade de Neuchâtel (Suíça)",
    "polytech_date": "2021 - Presente",
    "lang": "Idiomas",
    "french": "Francês",
    "mother_tongue":"Língua materna",
    "english": "Inglês",
    "spanish": "Espanhol",
    "portuguese": "Português",
    "personal": "Personal",
    "football": "Futebol",
    "gastronomy": "Gastronomia",
    "hardware": "Hardware",
    "travel": "Viagens",
    "contact_me_text": "Contactar-me",
    "name": "nome",
    "message": "sua mensagem",
    "send_btn": "mandar"
  }
};


//Set default language to english
let selectedLanguage = document.getElementById('EN');
let traduction = trad.english;

//Change the language of the page
const changeLanguage = (language) => {
  selectedLanguage.classList.remove('selected');
  selectedLanguage = document.getElementById(language);
  document.getElementById(language).classList.add('selected');
  if (language === 'FR') {
    traduction = trad.french;
  } else if (language === 'ES') {
    traduction = trad.spanish;
  } else if (language === 'PT') {
    traduction = trad.portuguese;
  } else {
    traduction = trad.english;
  }
  $('#about').toggleClass('fadeInButton');
  setTimeout(() => { document.querySelector('#about').innerHTML = '<svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>' + traduction.about; }, 10);
  setTimeout(() => { $('#contact').toggleClass('fadeInButton'); }, 10);
  setTimeout(() => { document.querySelector('#contact').innerHTML = '<svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>' + traduction.contact; }, 350);
  setTimeout(() => { $('#work').toggleClass('fadeInButton') }, 550);
  setTimeout(() => { document.querySelector('#work').innerHTML = '<svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>' + traduction.work; }, 800);
  document.querySelector('#m-about').textContent = traduction.about;
  document.querySelector('#about-text').textContent = traduction.about_text;
  document.querySelector('#m-work').textContent = traduction.work;
  document.querySelector('#m-contact').textContent = traduction.contact;
  document.querySelector('#my-works').textContent = traduction.my_works;
  document.querySelector('#inforoutes').innerHTML = traduction.inforoutes;
  document.querySelector('#inforoutes-text').textContent = traduction.inforoutes_text;
  document.querySelector('#carottages').innerHTML = traduction.carottages + '  <i class="fas fa-lock"></i>';
  document.querySelector('#carottages-text').textContent = traduction.carottages_text;
  document.querySelector('#signs').innerHTML = traduction.signs + '  <i class="fas fa-lock"></i>';
  document.querySelector('#signs-text').textContent = traduction.signs_text;
  document.querySelector('#infineed').innerHTML = traduction.infineed;
  document.querySelector('#infineed-text').textContent = traduction.infineed_text;
  document.querySelector('#portfolio').textContent = traduction.portfolio;
  document.querySelector('#portfolio-text').textContent = traduction.portfolio_text;
  document.querySelector('#graph-modeling').textContent = traduction.graph_modeling;
  document.querySelector('#graph-modeling-text').textContent = traduction.graph_modeling_text;
  document.querySelector('#forecast').innerHTML = traduction.forecast +'  <i class="fas fa-lock"></i>';
  document.querySelector('#forecast-text').textContent = traduction.forecast_text;
  document.querySelector('#stat-pavement').innerHTML = traduction.stat_pavement +'  <i class="fas fa-lock"></i>';
  document.querySelector('#stat-pavement-text').textContent = traduction.stat_pavement_text;
  document.querySelector('#secure-novanet').innerHTML = traduction.secure_novanet +'  <i class="fas fa-lock"></i>';
  document.querySelector('#secure-novanet-text').textContent = traduction.secure_novanet_text;
  document.querySelector('#secure-chat').textContent = traduction.secure_chat;
  document.querySelector('#secure-chat-text').textContent = traduction.secure_chat_text;
  document.querySelector('#video-games').textContent = traduction.video_games;
  document.querySelector('#video-games-text').textContent = traduction.video_games_text;
  document.querySelector('#web-server').textContent = traduction.web_server;
  document.querySelector('#web-server-text').textContent = traduction.web_server_text;
  document.querySelector('#M3d').textContent = traduction.M3d;
  document.querySelector('#M3d-text').textContent = traduction.M3d_text;
  document.querySelector('#about-me-text').textContent = traduction.about_me_text;
  document.querySelector('#skills').textContent = traduction.skills;
  document.querySelector('#employment_education_title').textContent = traduction.employment_education_title;
  document.querySelector('#employment_text').textContent = traduction.employment_text;
  document.querySelector('#education_text').textContent = traduction.education_text;
  document.querySelector('#nord_date').textContent = traduction.nord_date;
  document.querySelector('#unine_text').textContent = traduction.unine_text;
  document.querySelector('#unine_text2').textContent = traduction.unine_text2;
  document.querySelector('#polytech_date').textContent = traduction.polytech_date;
  document.querySelector('#lang').textContent = traduction.lang;
  document.querySelector('#french').innerHTML = `<img class="flag" src="./images/France.png"/>${traduction.french}<div class="text">${traduction.mother_tongue}</div>`;
  document.querySelector('#english').innerHTML = `<img class="flag" src="./images/UK.png"/>${traduction.english}<div class="text">C1 (TOEIC 2023: 940/1000 + Language School Certification)</div>`;
  document.querySelector('#spanish').innerHTML = `<img class="flag" src="./images/Spain.png"/>${traduction.spanish}<div class="text">B2</div>`;
  document.querySelector('#portuguese').innerHTML = `<img class="flag" src="./images/Portugal.png"/>${traduction.portuguese}<div class="text">B1</div>`;
  document.querySelector('#personal').textContent = traduction.personal;
  document.querySelector('#football').innerHTML = `<i class="fas fa-futbol"></i> ${traduction.football}`;
  document.querySelector('#gastronomy').innerHTML = `<i class="fas fa-utensils"></i> ${traduction.gastronomy}`;
  document.querySelector('#hardware').innerHTML = `<i class="fas fa-microchip"></i> ${traduction.hardware}`;
  document.querySelector('#travel').innerHTML = `<i class="fas fa-mountain"></i> ${traduction.travel}`;
  document.querySelector('#contact-me-text').textContent = traduction.contact_me_text;
  document.querySelector('#from_name').placeholder = traduction.name;
  document.querySelector('#message').placeholder = traduction.message;
  document.querySelector('#send-btn').textContent = traduction.send_btn;
  setTimeout(() => {
    $('#about').removeClass('fadeInButton');
    $('#work').removeClass('fadeInButton');
    $('#contact').removeClass('fadeInButton');
  }, 2000);
}

const userLang = navigator.language || navigator.userLanguage;
if(userLang.substring(0,2) === "fr"){
  changeLanguage('FR');
}else if(userLang.substring(0,2)==="es"){
  changeLanguage('ES');
}else if(userLang.substring(0,2) === "pt"){
  changeLanguage('PT');
}else{
  changeLanguage('EN');
}

//Writing effect
var speed = 50;
var i = 0;
var txt = 'Machine Learning and Software Engineer';
function typeWriter(container) {
  if (i < txt.length) {
    document.getElementById(container).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, container);
  }
}

// Send Email
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    let email_status = document.getElementById('email-status');
    emailjs.sendForm('default_service', 'template_qucmz4e', this)
      .then(function () {
        email_status.style.display = 'block';
        setTimeout(function () {
          email_status.style.display = 'none';
          document.getElementById("from_name").value = ''
          document.getElementById("email_id").value = ''
          document.getElementById("message").value = ''
        }, 4000);
      }, function (error) {
        email_status.classList.remove('alert-success');
        email_status.classList.add('alert-danger');
        email_status.textContent = 'ERROR ! Your email has not been sent !'
        email_status.style.display = 'block';
        setTimeout(function () {
          email_status.style.display = 'none';
          email_status.classList.remove('alert-danger');
          email_status.classList.add('alert-sucess');
        }, 4000);
      });
  });
}
