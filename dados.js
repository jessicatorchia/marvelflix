let dados = [
    {
        "titulo": "Homem de Ferro",
        "ano": 2008,
        "sinopse": "Tony Stark, um bilionário industrial, é sequestrado e cria uma armadura para escapar, se tornando o super-herói Homem de Ferro.",
        "tags": "Tony Stark, Homem de Ferro, Marvel, Armadura, Sequestro, Herói, Tecnologia, Indústrias Stark, Armas, Origem",
        "trailer": "https://www.youtube.com/watch?v=8ugaeA-nMTc",
        "link": "https://pt.wikipedia.org/wiki/Homem_de_Ferro_(filme)",
        "img": "homem-de-ferro.jpg"
    },
    {
        "titulo": "O Incrível Hulk",
        "ano": 2008,
        "sinopse": "Bruce Banner busca uma cura para sua transformação incontrolável no Hulk enquanto é caçado pelo exército e enfrenta um novo monstro, o Abominável.",
        "tags": "Bruce Banner, Hulk, Abominável, Transformação, Fuga, Cura, Exército, Monstro, Marvel, Ação",
        "trailer": "https://www.youtube.com/watch?v=xbqNb2PFKKA",
        "link": "https://pt.wikipedia.org/wiki/O_Incr%C3%ADvel_Hulk_(filme)",
        "img": "o-incrivel-hulk.jpg"
    },
    {
        "titulo": "Homem de Ferro 2",
        "ano": 2010,
        "sinopse": "Tony Stark enfrenta a pressão do governo para compartilhar sua tecnologia enquanto luta contra um novo inimigo, o russo Ivan Vanko.",
        "tags": "Tony Stark, Homem de Ferro, Ivan Vanko, Armadura, Vingança, Tecnologia, Armas, Stark Expo, Marvel, Herói",
        "trailer": "https://www.youtube.com/watch?v=BoohRoVA9WQ",
        "link": "https://pt.wikipedia.org/wiki/Homem_de_Ferro_2",
        "img": "homem-de-ferro-2.jpg"
    },
    {
        "titulo": "Thor",
        "ano": 2011,
        "sinopse": "Thor, o Deus do Trovão, é banido de Asgard para a Terra e aprende a ser digno de seu poder enquanto protege os humanos.",
        "tags": "Thor, Asgard, Deus do Trovão, Mjölnir, Loki, Marvel, Herói, Odin, Bifrost, Aventura",
        "trailer": "https://www.youtube.com/watch?v=JOddp-nlNvQ",
        "link": "https://pt.wikipedia.org/wiki/Thor_(filme)",
        "img": "thor.jpg"
    },
    {
        "titulo": "Capitão América: O Primeiro Vingador",
        "ano": 2011,
        "sinopse": "Steve Rogers, um homem frágil, se torna o super-soldado Capitão América e luta contra a Hydra e o Caveira Vermelha na Segunda Guerra Mundial.",
        "tags": "Steve Rogers, Capitão América, Segunda Guerra Mundial, Hydra, Caveira Vermelha, Soro do Super-Soldado, Marvel, Herói, Shield, Ação",
        "trailer": "https://www.youtube.com/watch?v=JerVrbLldXw",
        "link": "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica:_O_Primeiro_Vingador",
        "img": "capitao-america-o-primeiro-vingador.jpg"
    },
    {
        "titulo": "Os Vingadores",
        "ano": 2012,
        "sinopse": "Os maiores heróis da Terra se unem para enfrentar Loki, o irmão de Thor, que planeja dominar o planeta com o exército Chitauri.",
        "tags": "Vingadores, Loki, Thor, Capitão América, Homem de Ferro, Hulk, Chitauri, Nick Fury, SHIELD, Marvel",
        "trailer": "https://www.youtube.com/watch?v=eOrNdBpGMv8",
        "link": "https://pt.wikipedia.org/wiki/Os_Vingadores_(filme)",
        "img": "os-vingadores.jpeg"
    },
    {
        "titulo": "Homem de Ferro 3",
        "ano": 2013,
        "sinopse": "Tony Stark enfrenta os efeitos de sua batalha em Nova York e o terrorista Mandarim, enquanto reflete sobre o que significa ser o Homem de Ferro.",
        "tags": "Tony Stark, Homem de Ferro, Mandarim, Armadura, Terrorismo, Ansiedade, Marvel, Guerra, Herói, Tecnologia",
        "trailer": "https://www.youtube.com/watch?v=YLorLVa95Xo",
        "link": "https://pt.wikipedia.org/wiki/Homem_de_Ferro_3",
        "img": "homem-de-ferro-3.jpg"
    },
    {
        "titulo": "Thor: O Mundo Sombrio",
        "ano": 2013,
        "sinopse": "Thor luta para salvar os Nove Reinos de uma ameaça antiga, os Elfos Negros liderados por Malekith, que busca a destruição com o poder do Éter.",
        "tags": "Thor, Elfos Negros, Malekith, Jane Foster, Asgard, Éter, Marvel, Herói, Guerra, Reinos",
        "trailer": "https://www.youtube.com/watch?v=npvJ9FTgZbM",
        "link": "https://pt.wikipedia.org/wiki/Thor:_O_Mundo_Sombrio",
        "img": "thor-o-mundo-sombrio.jpg"
    },
    {
        "titulo": "Capitão América: O Soldado Invernal",
        "ano": 2014,
        "sinopse": "Capitão América descobre uma conspiração dentro da SHIELD enquanto enfrenta o misterioso Soldado Invernal, um assassino do passado.",
        "tags": "Capitão América, Soldado Invernal, SHIELD, Steve Rogers, Bucky Barnes, Conspiração, Marvel, Ação, Herói, Guerra",
        "trailer": "https://www.youtube.com/watch?v=7SlILk2WMTI",
        "link": "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica:_O_Soldado_Invernal",
        "img": "capitao-america-o-soldado-invernal.jpg"
    },
    {
        "titulo": "Guardiões da Galáxia",
        "ano": 2014,
        "sinopse": "Um grupo de desajustados se une para proteger uma esfera poderosa e salvar a galáxia de Ronan, o Acusador.",
        "tags": "Guardiões da Galáxia, Peter Quill, Gamora, Rocket, Groot, Drax, Ronan, Marvel, Ação, Espaço",
        "trailer": "https://www.youtube.com/watch?v=d96cjJhvlMA",
        "link": "https://pt.wikipedia.org/wiki/Guardi%C3%B5es_da_Gal%C3%A1xia_(filme)",
        "img": "guardioes-da-galaxia.jpg"
    },
    {
        "titulo": "Vingadores: Era de Ultron",
        "ano": 2015,
        "sinopse": "Os Vingadores enfrentam Ultron, uma inteligência artificial criada por Tony Stark que planeja destruir a humanidade para salvar o planeta.",
        "tags": "Vingadores, Ultron, Tony Stark, Inteligência Artificial, Marvel, Heróis, Ação, Hulk, Viúva Negra, Visão",
        "trailer": "https://www.youtube.com/watch?v=tmeOjFno6Do",
        "link": "https://pt.wikipedia.org/wiki/Vingadores:_Era_de_Ultron",
        "img": "vingadores-era-de-ultron.jpg"
    },
    {
        "titulo": "Homem-Formiga",
        "ano": 2015,
        "sinopse": "Scott Lang, um ladrão reformado, assume o manto do Homem-Formiga e usa a tecnologia de encolhimento para deter um vilão perigoso.",
        "tags": "Scott Lang, Homem-Formiga, Tecnologia, Encolhimento, Marvel, Herói, Hank Pym, Ação, Vingança, Ladrão",
        "trailer": "https://www.youtube.com/watch?v=pWdKf3MneyI",
        "link": "https://pt.wikipedia.org/wiki/Homem-Formiga_(filme)",
        "img": "homem-formiga.jpg"
    },
    {
        "titulo": "Capitão América: Guerra Civil",
        "ano": 2016,
        "sinopse": "Os Vingadores se dividem quando o governo exige supervisão sobre suas ações, levando a uma batalha entre Capitão América e Homem de Ferro.",
        "tags": "Capitão América, Homem de Ferro, Guerra Civil, Vingadores, Heróis, Marvel, Batalha, Supervisão, Steve Rogers, Tony Stark",
        "trailer": "https://www.youtube.com/watch?v=dKrVegVI0Us",
        "link": "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica:_Guerra_Civil",
        "img": "capitao-america-guerra-civil.jpg"
    },
    {
        "titulo": "Doutor Estranho",
        "ano": 2016,
        "sinopse": "O neurocirurgião Stephen Strange descobre o mundo das artes místicas após um acidente que destrói suas mãos e busca por cura.",
        "tags": "Stephen Strange, Doutor Estranho, Artes Místicas, Magia, Marvel, Herói, Curas, Universo, Ação, Místico",
        "trailer": "https://www.youtube.com/watch?v=hsu8yFYXU4U",
        "link": "https://pt.wikipedia.org/wiki/Doutor_Estranho_(filme)",
        "img": "doutor-estranho.jpg"
    },
    {
        "titulo": "Guardiões da Galáxia Vol. 2",
        "ano": 2017,
        "sinopse": "Os Guardiões enfrentam novas ameaças e conflitos enquanto tentam se adaptar à sua nova dinâmica e descobrem segredos sobre a família de Peter Quill.",
        "tags": "Guardiões da Galáxia, Peter Quill, Família, Marvel, Ação, Espaço, Heróis, Aventura, Rocket, Gamora",
        "trailer": "https://www.youtube.com/watch?v=2LqN7D26G70",
        "link": "https://pt.wikipedia.org/wiki/Guardi%C3%B5es_da_Gal%C3%A1xia_Vol._2",
        "img": "guardioes-da-galaxia-vol-2.jpg"
    },
    {
        "titulo": "Homem-Aranha: De Volta ao Lar",
        "ano": 2017,
        "sinopse": "Peter Parker lida com a vida como adolescente e super-herói enquanto enfrenta o vilão Abutre, tentando provar seu valor como Vingador.",
        "tags": "Homem-Aranha, Peter Parker, Abutre, Marvel, Vingadores, Adolescente, Super-Herói, Tecnologia, Ação, Herói",
        "trailer": "https://www.youtube.com/watch?v=DiT6k0f4G9A",
        "link": "https://pt.wikipedia.org/wiki/Homem-Aranha:_De_Volta_ao_Lar",
        "img": "homem-aranha-de-volta-ao-lar.png"
    },
    {
        "titulo": "Thor: Ragnarok",
        "ano": 2017,
        "sinopse": "Thor é capturado e forçado a lutar em um gladiador contra o Hulk, enquanto tenta impedir a destruição de Asgard e a chegada de Hela.",
        "tags": "Thor, Hulk, Asgard, Hela, Gladiador, Marvel, Herói, Ragnarok, Ação, Aventura",
        "trailer": "https://www.youtube.com/watch?v=ue80QwI2i7I",
        "link": "https://pt.wikipedia.org/wiki/Thor:_Ragnarok",
        "img": "thor-ragnarok.jpg"
    },
    {
        "titulo": "Pantera Negra",
        "ano": 2018,
        "sinopse": "T'Challa retorna a Wakanda para assumir o trono como Pantera Negra, mas enfrenta desafios internos e externos à sua liderança.",
        "tags": "Pantera Negra, Wakanda, T'Challa, Marvel, Herói, Trono, Ação, Tecnologia, Conflito, Aventura",
        "trailer": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
        "link": "https://pt.wikipedia.org/wiki/Pantera_Negra_(filme)",
        "img": "pantera-negra.jpg"
    },
    {
        "titulo": "Vingadores: Guerra Infinita",
        "ano": 2018,
        "sinopse": "Os Vingadores e seus aliados enfrentam Thanos, que busca reunir as Joias do Infinito para eliminar metade da vida no universo.",
        "tags": "Vingadores, Thanos, Joias do Infinito, Marvel, Ação, Heróis, Guerra, Universo, Super-Herói, Titan",
        "trailer": "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
        "link": "https://pt.wikipedia.org/wiki/Vingadores:_Guerra_Infinita",
        "img": "vingadores-guerra-infinita.jpg"
    },
    {
        "titulo": "Homem-Formiga e a Vespa",
        "ano": 2018,
        "sinopse": "Scott Lang e Hope van Dyne devem se unir para uma missão urgente envolvendo o mundo quântico e enfrentar novos desafios.",
        "tags": "Homem-Formiga, Vespa, Scott Lang, Hope van Dyne, Mundo Quântico, Marvel, Ação, Tecnologia, Herói, Aventura",
        "trailer": "https://www.youtube.com/watch?v=8_rHanN4t8Y",
        "link": "https://pt.wikipedia.org/wiki/Homem-Formiga_e_a_Vespa",
        "img": "homem-formiga-e-a-vespa.jpg"
    },
    {
        "titulo": "Capitã Marvel",
        "ano": 2019,
        "sinopse": "Carol Danvers se torna a Capitã Marvel após um acidente envolvendo a tecnologia Kree e deve ajudar a salvar o universo.",
        "tags": "Capitã Marvel, Carol Danvers, Kree, Marvel, Herói, Ação, Espaço, Tecnologia, Origem, Poderes",
        "trailer": "https://www.youtube.com/watch?v=Z1BCs9e8JkY",
        "link": "https://pt.wikipedia.org/wiki/Capit%C3%A3_Marvel_(filme)",
        "img": "capita-marvel.jpg"
    },
    {
        "titulo": "Vingadores: Ultimato",
        "ano": 2019,
        "sinopse": "Os Vingadores se reúnem para desfazer o impacto devastador de Thanos e restaurar a ordem no universo.",
        "tags": "Vingadores, Thanos, Joias do Infinito, Marvel, Ação, Heróis, Guerra, Universo, Super-Herói, Final",
        "trailer": "https://www.youtube.com/watch?v=hA6hldpSTF0",
        "link": "https://pt.wikipedia.org/wiki/Vingadores:_Ultimato",
        "img": "vingadores-ultimato.jpg"
    },
    {
        "titulo": "Viúva Negra",
        "ano": 2021,
        "sinopse": "Natasha Romanoff enfrenta seu passado e os vilões que surgem após os eventos de 'Guerra Civil', enquanto descobre segredos da sua origem.",
        "tags": "Viúva Negra, Natasha Romanoff, Marvel, Herói, Ação, Passado, Vingadores, Conflito, Espionagem, Tecnologia",
        "trailer": "https://www.youtube.com/watch?v=FiD2HDDQvL4",
        "link": "https://pt.wikipedia.org/wiki/Vi%C3%BAva_Negra_(filme)",
        "img": "viuva-negra.jpg"
    },
    {
        "titulo": "Shang-Chi e a Lenda dos Dez Anéis",
        "ano": 2021,
        "sinopse": "Shang-Chi descobre seu legado e enfrenta seu pai, o Mandarim, enquanto desvenda os mistérios dos Dez Anéis.",
        "tags": "Shang-Chi, Mandarim, Dez Anéis, Marvel, Herói, Ação, Legado, Artes Marciais, Família, Aventura",
        "trailer": "https://www.youtube.com/watch?v=giWIr7U1deA",
        "link": "https://pt.wikipedia.org/wiki/Shang-Chi_e_a_Lenda_dos_Dez_An%C3%A9is",
        "img": "shang-chi-e-a-lenda-dos-dez-aneis.jpeg"
    },
    {
        "titulo": "Eternos",
        "ano": 2021,
        "sinopse": "Os Eternos, uma raça antiga, emergem após milhares de anos para proteger a Terra de sua contraparte, os Deviantes.",
        "tags": "Eternos, Deviantes, Marvel, Heróis, Imortalidade, Ação, Mitologia, Terra, Família, Céu",
        "trailer": "https://www.youtube.com/watch?v=x_me3xsvDgk",
        "link": "https://pt.wikipedia.org/wiki/Eternos_(filme)",
        "img": "eternos.jpg"
    },
    {
        "titulo": "Homem-Aranha: Sem Volta Para Casa",
        "ano": 2021,
        "sinopse": "Peter Parker lida com as consequências de sua identidade revelada e busca a ajuda de Doutor Estranho, o que causa rupturas no multiverso.",
        "tags": "Peter Parker, Homem-Aranha, Multiverso, Doutor Estranho, Identidade, Marvel, Herói, Ação, Ruptura, Vilões",
        "trailer": "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        "link": "https://pt.wikipedia.org/wiki/Homem-Aranha:_Sem_Volta_Para_Casa",
        "img": "homem-aranha-sem-volta-para-casa.jpg"
    },
    {
        "titulo": "Doutor Estranho no Multiverso da Loucura",
        "ano": 2022,
        "sinopse": "Doutor Estranho navega pelo multiverso enquanto enfrenta ameaças místicas e tenta proteger uma jovem com habilidades especiais.",
        "tags": "Doutor Estranho, Multiverso, Feitiçaria, Wanda, Feiticeira Escarlate, Ação, Marvel, Poderes, Dimensões, Herói",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "link": "https://pt.wikipedia.org/wiki/Doutor_Estranho_no_Multiverso_da_Loucura",
        "img": "doutor-estranho-no-multiverso-da-loucura.jpeg"
    },
    {
        "titulo": "Thor: Amor e Trovão",
        "ano": 2022,
        "sinopse": "Thor busca a paz interior, mas sua jornada é interrompida por Gorr, o Carniceiro dos Deuses, que busca a extinção dos deuses.",
        "tags": "Thor, Amor, Trovão, Gorr, Carniceiro dos Deuses, Marvel, Herói, Poderes, Valkyrie, Aventura",
        "trailer": "https://www.youtube.com/watch?v=Go8nTmfrQd8",
        "link": "https://pt.wikipedia.org/wiki/Thor:_Amor_e_Trov%C3%A3o",
        "img": "thor-amor-e-trovao.jpg"
    },
    {
        "titulo": "Pantera Negra: Wakanda Forever",
        "ano": 2022,
        "sinopse": "Após a morte de T'Challa, Wakanda luta para proteger sua nação enquanto enfrenta novos desafios e ameaças globais.",
        "tags": "Pantera Negra, Wakanda, T'Challa, Namor, Marvel, Heróis, Ação, Tecnologia, Família, Vibranium",
        "trailer": "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
        "link": "https://pt.wikipedia.org/wiki/Pantera_Negra:_Wakanda_Forever",
        "img": "pantera-negra-wakanda-forever.jpg"
    },
    {
        "titulo": "Capitã Marvel 2",
        "ano": 2022,
        "sinopse": "Carol Danvers une forças com Monica Rambeau e Kamala Khan para enfrentar uma nova ameaça cósmica.",
        "tags": "Capitã Marvel, Carol Danvers, Monica Rambeau, Kamala Khan, Marvel, Heróis, Espaço, Ação, Poderes, Aventura",
        "trailer": "https://www.youtube.com/watch?v=zbWACdcXngQ",
        "link": "https://pt.wikipedia.org/wiki/Capit%C3%A3_Marvel_2",
        "img": "capita-marvel-2.jpg"
    },
    {
        "titulo": "Homem-Formiga e a Vespa: Quantumania",
        "ano": 2023,
        "sinopse": "Scott Lang e Hope Van Dyne exploram o Reino Quântico enquanto enfrentam Kang, o Conquistador, um vilão com planos para o multiverso.",
        "tags": "Scott Lang, Homem-Formiga, Hope Van Dyne, Reino Quântico, Kang, Multiverso, Marvel, Heróis, Tecnologia, Ação",
        "trailer": "https://www.youtube.com/watch?v=ZlNFpri-Y40",
        "link": "https://pt.wikipedia.org/wiki/Homem-Formiga_e_a_Vespa:_Quantumania",
        "img": "homem-formiga-e-a-vespa-quantumania.jpg"
    },
    {
        "titulo": "Guardiões da Galáxia Vol. 3",
        "ano": 2023,
        "sinopse": "Os Guardiões enfrentam novos desafios enquanto tentam proteger o universo e um dos seus próprios de uma ameaça mortal.",
        "tags": "Guardiões da Galáxia, Peter Quill, Gamora, Rocket, Groot, Drax, Aventura, Marvel, Heróis, Ação",
        "trailer": "https://www.youtube.com/watch?v=u3V5KDHRQvk",
        "link": "https://pt.wikipedia.org/wiki/Guardi%C3%B5es_da_Gal%C3%A1xia_Vol._3",
        "img": "guardioes-da-galaxia-vol-3.jpg"
    }
]
