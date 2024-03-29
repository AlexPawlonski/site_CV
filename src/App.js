import './App.css';

/*IMPORT IMG*/
import imgConginWeb from './img/imgEx/CW.png';
import imgBlaisePascal from './img/imgEx/BlaisePascal.png';
import imgcefii from './img/imgEx/cefii.png';

import imgreact from './img/imgTech/dev/react.png';
import imgmeteor from './img/imgTech/dev/meteor.png';
import imgangular from './img/imgTech/dev/angular.png';
import imgwordpress from './img/imgTech/dev/wordPress.png';

import imgcss from './img/imgTech/dev/css.png';
import imghtml from './img/imgTech/dev/html.png';
import imgJS from './img/imgTech/dev/JS.png';

import imgjquery from './img/imgTech/dev/jquery.png';
import imgmysql from './img/imgTech/dev/mysql.png';
import imgphp from './img/imgTech/dev/php.png';
import imgmongodb from './img/imgTech/dev/mongodb.png';
import imgpoo from './img/imgTech/dev/poo.png';
import imgtailwind from './img/imgTech/dev/tailwindcss.png';
import imgbootstrap from './img/imgTech/dev/bootstrap.png';
import imgajax from './img/imgTech/dev/ajax.png';

import imgphotoshop from './img/imgTech/design/PhotoShop.png';
import imgPremière from './img/imgTech/design/Première.png';
import imgobs from './img/imgTech/design/obs.png';
import imgClip from './img/imgTech/design/paint.png';

/**INPORT LOGO */
import logo from './img/logo/logo.png';
import logoW from './img/logo/logo-w.png'
import logoGit from './img/logo/logoGit.png'
import logoLinkeDin from './img/logo/logoLinkeDin.png'

/**import img fond-PP */
import imgFondHeader from './img/imgFond/bg-homepage.PNG';
import imgP from './img/PhotoDeProfile.PNG';

/**INPORT IMG PORTFOLIO */
import imgBluexHome from './img/imgPortFolio/BluEx/homePage.jpg';
import imgBluexInfo from './img/imgPortFolio/BluEx/infoPage.jpg';
import imgBluexMarket from './img/imgPortFolio/BluEx/marketPage.jpg';
import imgBluexShow from './img/imgPortFolio/BluEx/showPage.jpg';

import imgMeethemConexion from './img/imgPortFolio/meethem/conexionPage.jpg';
import imgMeethemliste from './img/imgPortFolio/meethem/listePage.jpg';
import imgMeethemAdd from './img/imgPortFolio/meethem/addPage.jpg';
import imgMeethemVote from './img/imgPortFolio/meethem/votePage.jpg';

import imgJquery from './img/imgPortFolio/siteJquery/HomePage.jpg';
import imgplanette from './img/imgPortFolio/siteJquery/planettePage.jpg';
import imgpopUp from './img/imgPortFolio/siteJquery/popUpPage.jpg';
import imgpopUp2 from './img/imgPortFolio/siteJquery/popUpPage2.jpg';
import imgcontact from './img/imgPortFolio/siteJquery/contact.jpg';

import imgconexionCms from './img/imgPortFolio/MVC/conexionPage.jpg';
import imghomeCms from './img/imgPortFolio/MVC/homePage.jpg';
import imglisteCms from './img/imgPortFolio/MVC/listePage.jpg';
import imgupdateCms from './img/imgPortFolio/MVC/updatePage.jpg';

import imghomeWordPress from './img/imgPortFolio/wordpresFleurist/homePage.jpg';
import imghome2WordPress from './img/imgPortFolio/wordpresFleurist/homePage2.jpg';
import imgequipeWordPress from './img/imgPortFolio/wordpresFleurist/equipePage.jpg';
import imgcontactWordPress from './img/imgPortFolio/wordpresFleurist/contactPage.jpg';

/*IMPORT COMPONENT*/ 
import Header from './components/organism/Header.js';
import Navbar from './components/organism/Navbar';
import Main from './components/organism/Main.js';
import Footer from './components/organism/Footer.js';




function App() {

  return (
    <div id="wrapper"  className="App flex flex-col my-0 mx-auto bg-fixed bg-cover bg-gradient-to-b from-red-600 to-purple-800">

      <Header data={{
        name: "Alex Pawlonski",
        subTitle: "Développeur junior WEB spécialisé NodeJS",
        bgImg: imgFondHeader,
        ProfilImg: {
          src: imgP,
          alt: 'photoProfil',
        },
      }} />

      <Navbar data={[
        {
          name:"Accueil",
          value:"home"
        },
        {
          name:"Qui suis-je ?",
          value:"info"
        },
        {
          name:"Mon parcours et mes expériences",
          value:"course"
        },
        {
          name:"Mes compétences",
          value:"skill"
        },
        {
          name:"Mes réalisations",
          value:"portfolio"
        },
        {
          name:"Me contacter",
          value:"contact"
        },
      ]} />

      <Main data={[
        {
          title:"Qui suis-je ?",
          value:"info",
          color: "red",
          id: 0,
          dataSlide:{
            imgSlide: logo,
            textSlide:[
              {
                title: 'PASSIONÉ',
                text: 'Depuis mon enfance je suis passionné par les nouvelles technologies et l\'informatique. Un domaine dans lequel je souhaite intégrer une structure qui me permettra de totalement m’épanouir, et d’aider audéveloppement de celle-ci.'
              },
              {
                title: 'CURIEUX',
                text: 'Je pense que les traits de caractère les plus important pour un développeur sont la rigueur et bien sur la curiosité. Car ils permettent de développer ses compétences, et également de proposer un travail toujours à jour par rapport aux dernières technologies.'
              }, 
              {
                title: 'TRAVAILLEUR',
                text: 'Que ce soit pour moi-même ou pour un tiers, quand un projet me tient à cœur. Je mets toujours un point d\'honneur à le mener à terme.'
              } 
            ]
          } 
        },
        {
          title:"Mon parcours et mes expériences",
          value:"course",
          id: 1,
          dataSection:{
            xp:[
              { 
                imgXp: {
                  src: imgConginWeb, 
                  alt:"Logo entreprise CodingWeb"
                },
                type: "Stage développeur Node JS",
                title: "CodingWeb",
                date: "nov. 2020 - déc. 2020 . 2 mois",
                map: "Beaucouzé, Pays de la Loire",
                view: true,
                desc: [ 
                  "J'ai réalisé un stage de fin d'études dans l'entreprise CodingWeb durée de 2 mois, dans lequel j'ai travaillé sur deux projets :",
                  "- Un projet nommé BluEx, qui consistait à mettre à jour technologiquement une plate-forme destinée à des professionnels pour gérer des événements ou des salons. Le projet utilisait le framework Meteor JS, sur lequel je devais y insérer des composants React pour convertir progressivement les différentes parties de la plate-forme d'une technologie a l'autre.",
                  "- L'autre projet sur lequel j'ai travaillé durant mon stage et qui m'a donné la maîtrise de la bibliothèque Tailwind css,a porté sur la mise à jour visuelle du site Meethem.fr.",
                  "Projet sur lequel je devais d'abord mettre à jour le framework Meteor JS de sa version datant de 2015 la dernière version sortie en 2020. Une fois la mise à jour effectuée, j'ai eu pour mission de remplacer l'intégralité de la mise en page et des styles gérés par Bootstrap par une version plus moderne et plus optimisée utilisant Tailwind css.",
                ], 
                link: "https://www.codingweb.fr/",
              },
              { 
                imgXp: {
                  src: imgcefii, 
                  alt:"Logo Cefii"
                },
                type: "Formation Développeur Web FullStack",
                title: "CEFii - L'Ecole Supérieure du Web",
                date: "2020 - 2021",
                map: "Angers, Pays de la Loire",
                desc: [ 
                  "Tout au long de ma formation de développeur, j'ai réalisé différents projets visant à m'enseigner les différents aspects du métier de développeur Web. Mais aussi à développer mes capacités pour travailler en équipe ou pour me permettre d’en diriger une.",
                 ], 
                link: "https://cefii.fr/",
              },
              { 
                imgXp: {
                  src: imgBlaisePascal, 
                  alt:"Logo Lycée Blaise Pascal"
                },
                type: "BTS MSI - maintenance des systèmes industriels",
                title: "Lycée Blaise Pascal",
                date: "2017 - 2018",
                map: "Angers, Pays de la Loire",
                desc: [ 
                  "J'ai arrêté le BTS au bout d'un an, car je ne me retrouverai pas dans le travail et l'apprentissage. Mais surtout dans les perspectives d'avenir et de carrière du domaine vers lequel le BTS me dirigeait.",
                 ], 
                link: "https://pascal.paysdelaloire.e-lyco.fr/",
              },
              { 
                imgXp: {
                  src: imgBlaisePascal, 
                  alt:"Logo Lycée Blaise Pascal"
                },
                type: "Bac pro Gestion-Administration ",
                title: "Lycée Blaise Pascal ",
                date: "2015 - 2017",
                map: "Angers, Pays de la Loire",
                desc: [ 
                  "J'ai obtenu mon bac avec mention assez bien, après avoir réalisé de nombreux stages dans des administrations publiques où des entreprises privées, dans le cadre du bac pro.",
                 ], 
                link: "https://pascal.paysdelaloire.e-lyco.fr/",
              },
            ]
          }
        },
        {
          title:"Mes compétences",
          value:"skill",
          color: "red",
          id: 2,
          dataSkill:{
             pannelSkill :{
               titlesection: "Domaines de compétences",
               liste: [
                 {
                   title: "GESTION DE PROJETS WEB",
                   listeSkill: "Site vitrine, e-commerce, application mobile",
                 },
                 {
                   title: "CONCEPTION GRAPHIQUE / WEBDESINGN",
                   listeSkill: "Logos, templates Web, plaquettes publicitaires, cartes de visite",
                 },
                 {
                   title: "APPLICATION DE GESTION INTRA-ENTREPRISE",
                   listeSkill: "PHP - MySQL - AJAX",
                 },
                 {
                   title: "INTÉGRATION (X)HTML / CSS",
                   listeSkill: "Travail sans sur-couche, respectueux des standards du Web",
                 },
                 {
                   title: "DYNAMISE DES PAGES PAR JAVASCRIPT / AJAX",
                   listeSkill: "jQuery - AJAX",
                 },
                 {
                   title: "RÉFERENCEMENT NATUREL",
                   listeSkill: "Accessibilité & ergonomie des pages web",
                 },
                 {
                   title: "CONCEPTION MULTI-PLATEFORMES",
                   listeSkill: "Compatible tous supports, tablette & application mobile",
                 },
               ]
             },
             pannelLvl: [
               {
                titlesection: "Compétences en conception graphique",
                skillLevel: [
                  {
                    title: "Adobe Photoshop",
                    imgSkill: {
                      src: imgphotoshop, 
                      alt:"logo Photoshop"
                    },
                    lvl : 7, 
                  },
                  {
                    title: "Adobe Première pro",
                    imgSkill: {
                      src: imgPremière, 
                      alt:"logo Première pro"
                    },
                    lvl : 9, 
                  },
                  {
                    title: "OBS",
                    imgSkill: {
                      src: imgobs, 
                      alt:"logo OBS"
                    },
                    lvl : 10, 
                  },
                  {
                    title: "Clip studio paint",
                    imgSkill: {
                      src: imgClip, 
                      alt:"logo Clip studio Paint"
                    },
                    lvl : 8, 
                  },
                ]
              },
              {
              titlesection: "Compétence en développement",
              skillLevel: [
                {
                  title: "React JS",
                  imgSkill: {
                    src: imgreact, 
                    alt:"Logo React.js"
                  },
                  lvl : 8, 
                },
                {
                  title: "Meteor JS",
                  imgSkill: {
                    src: imgmeteor, 
                    alt:"logo meteor JS"
                  },
                  lvl : 5, 
                },
                {
                  title: "Angular",
                  imgSkill: {
                    src: imgangular, 
                    alt:"logo Angular"
                  },
                  lvl : 6, 
                },
                {
                  title: "WordPress",
                  imgSkill: {
                    src: imgwordpress, 
                    alt:"logo WordPress"
                  },
                  lvl : 8, 
                },
                {
                  title: "JS",
                  imgSkill: {
                    src: imgJS, 
                    alt:"logo JS"
                  },
                  lvl : 8, 
                },
                {
                  title: "PHP",
                  imgSkill: {
                    src: imgphp, 
                    alt:"logo PHP"
                  },
                  lvl : 7, 
                },
                {
                  title: "MySQL",
                  imgSkill: {
                    src: imgmysql, 
                    alt:"logo MySQL"
                  },
                  lvl : 5, 
                },
                {
                  title: "MongoDB",
                  imgSkill: {
                    src: imgmongodb, 
                    alt:"logo MongoDB"
                  },
                  lvl : 4, 
                },
                {
                  title: "Bootstrap",
                  imgSkill: {
                    src: imgbootstrap, 
                    alt:"logo MongoDB"
                  },
                  lvl : 7, 
                },
                {
                  title: "Tailwind CSS",
                  imgSkill: {
                    src: imgtailwind, 
                    alt:"logo Tailwind"
                  },
                  lvl : 8, 
                },
              ]
             }
             ]
            }
        },
        {
          title:"Mes réalisations",
          value:"portfolio",
          id: 3,
          pannelProject:[
            {
              title: "BlueX",
              subTitle: "Migration/Mise à jour",
              id:"p1",
              img: {
                src: imgBluexHome, 
                alt:"HomePage Bluex"
              },
              dataProject: {
                carouselImg: [
                  {
                    src: imgBluexHome, 
                    alt:"HomePage Bluex"
                  },
                  {
                    src: imgBluexShow, 
                    alt:"ShowPage Bluex"
                  },
                  {
                    src: imgBluexMarket, 
                    alt:"MarketPage Bluex"
                  },
                  {
                    src: imgBluexInfo, 
                    alt:"InfoPage Bluex"
                  },
                ],
                author: "CodingWeb",
                client: "Shepard",
                date:"nov. 2020 - déc. 2020",
                desc: [ 
                  "Sur ce projet j'ai réalisé plusieurs travaux, notamment une mise à jour graphique des composants existant ou des template FireBlaze html. Tout cela en utilisant bootstrap mais aussi du CSS classique pour les composants qui demandaient un peu plus de personnalisation.",
                  "J'ai aussi effectué un travail assez conséquent sur la marketplace du site “Voir diapositive 3”  en créant et en paramétrant le composant filtre des produits de la boutique. ",
                  "J'ai effectué mon travail en utilisant l'application storybook,  et supervisé par mon chef d'équipe via la plate-forme Gira qui nous servait à communiquer entre membres de l'équipe mais aussi avec  les responsables du projet de l'entreprise Shepard Event.",
                ],
                skill: ["Bootstrap", "HTML", "CSS", "JS", "FireBlaze template"],
                framWork: ["React JS", "Meteor JS", "MongoDB"],
                tabWork: ['Création de composent React','mise a jour de template HTML','Mise a jour de style css et Boostrape'],
                link: {
                    linkWebSite: {
                      value:"Site Web Shepard Events", 
                      src: "https://www.shepardes.com/",
                    },
                    linkAuthor: {
                      value:"Site Web CodingWeb", 
                      src: "https://www.codingweb.fr/index.html",
                    },
                }
              }
            },
            {
              title: "Meethem",
              subTitle: "Mise à jour / Ajout de technoligie",
              id:"p2",
              img: {
                src: imgMeethemConexion, 
                alt:"HomePage Meethem"
              },
              dataProject: {
                carouselImg: [
                  {
                    src: imgMeethemConexion, 
                    alt:"HomePage Meethem"
                  },
                  {
                    src: imgMeethemliste, 
                    alt:"ListePage Meethem"
                  },
                  {
                    src: imgMeethemAdd, 
                    alt:"AddPage Meethem"
                  },
                  {
                    src: imgMeethemVote, 
                    alt:"VotePage Meethem"
                  },
                ],
                author: "CodingWeb",
                client: "Projet intern",
                date:"nov. 2020 - déc. 2020",
                desc: [ 
                  "Pour cette application qui a été créée en 2015. On m'a confié la responsabilité de sa migration d'une version assez daté de Meteor JS,  à la dernière version sortie au moment où j'ai réalisé mon travail.",
                  "Une fois la migration faite et le site fonctionnel,  on m'a confié la tâche de mettre à jour graphiquement les templates HTML du site qui utilisait Bootstrap. Mais surtout de remplacer l'intégralité des styles géré par bootstrap,  par une technologie différente nommée Storybook CSS.",
                ],
                skill: ["Tailwind CSS","Bootstrap", "HTML", "CSS", "JS", "FireBlaze template"],
                framWork: ["Meteor JS", "MongoDB"],
                tabWork: ['mise a jour de template HTML','Mise a jour de style css', 'Migration de Bootstrap ver Tailwind CSS'],
                link: {
                    linkWebSite: {
                      value:"Site Web Meethem", 
                      src: "https://meethem.codingweb.fr",
                    },
                    linkAuthor: {
                      value:"Site Web CodingWeb", 
                      src: "https://www.codingweb.fr/index.html",
                    },
                }
              }
            },
            {
              title: "Site Espace",
              subTitle: "Projet d'étude JQuery",
              id:"p3",
              img: {
                src: imgJquery, 
                alt:"HomePage Espace"
              },
              dataProject: {
                carouselImg: [
                  {
                    src: imgJquery, 
                    alt:"HomePage Espace"
                  },
                  {
                    src: imgplanette, 
                    alt:"ListePage Espace"
                  },
                  {
                    src: imgpopUp, 
                    alt:"popUp Espace"
                  },
                  {
                    src: imgpopUp2, 
                    alt:"popUp2 Espace"
                  },
                  {
                    src: imgcontact, 
                    alt:"Contact Espace"
                  },
                ],
                author: "Alex Pawlonski",
                client: "Projet d'étude Cefii",
                date:"juin. 2020",
                desc: [ 
                  "Projet d'étude que j’ai établi durant ma formation, consistant à réaliser un site complètement animé utilisant jQuery.",
                  "j'ai alors été amené à travailler sur la réalisation d'une page interactive “Voir diapositive numéro 2”  composée d'une reconstitution du système solaire fixe,  qui quand on clique sur les planètes présente dans la liste à sa gauche  s'anime  pour représenter leur trajectoire autour du Soleil.",
                  "Dans ce projet en plus des animations j'ai travaillé sur une partie sécurité “ voir diapositive 5” Où je devais mettre en place des vérifications du champ texte jusqu’à l'envoi d'un formulaire.",
                ],
                skill: ["HTML", "CSS", "JS", "JQuery"],
                tabWork: ['Création du site en HTML','Animation en CSS et JS ', 'Création d\'un formulaire de contact avec test intégré'],
                link: {
                    linkWebSite: {
                      value:"Repo GitHub", 
                      src: "https://github.com/AlexPawlonski/ProjetSiteEspace",
                    },
                    linkAuthor: {
                      value:"Site Web Alex PAWLONSKI ", 
                      src: "https:",
                    },
                }
              }
            },
            {
              title: "Application de gestion",
              subTitle: "Projet d'étude PHP",
              id:"p4",
              img: {
                src: imglisteCms, 
                alt:"listePage Cms"
              },
              dataProject: {
                carouselImg: [
                  {
                    src: imglisteCms, 
                    alt:"listePage Cms"
                  },
                  {
                    src: imgconexionCms, 
                    alt:"conexionPage Cms"
                  },
                  {
                    src: imghomeCms, 
                    alt:"homePage Cms"
                  },
                  {
                    src: imgupdateCms, 
                    alt:"UpdapePage Cms"
                  },
                ],
                author: "Alex Pawlonski",
                client: "Projet d'étude Cefii",
                date:"Juilet. 2020",
                desc: [ 
                  "Projet d'étude réalisé durant ma formation qui visait à nous entraîner et à nous perfectionner sur l'utilisation de MySQL et de PHP dans une structure de site web en MVC,  comportant un CRUD pour gérer les informations d'une base de données.",
                ],
                skill: ["PHP", "MySql", "MVC", "HTML", "Boostrap"],
                tabWork: ['Création de page HTML','Mise en page avec Boostrap', 'Création d\'un MVC en PHP', 'Mise en place d\'un CRUD avec des requette SQL'],
                link: {
                  linkWebSite: {
                    value:"Site Web Cefii", 
                    src: "https://cefii.fr/",
                  },
                  linkAuthor: {
                    value:"Alex PAWLONSKI", 
                    src: "https://www.linkedin.com/in/alex-pawlonski-4b38381b2/",
                  },
                }
              }
            },
            {
              title: "Site vitrine fleuriste",
              subTitle: "Création d'un theme WordPress en PHP",
              id:"p5",
              img: {
                src: imghomeWordPress, 
                alt:"HomePage WordPress"
              },
              dataProject: {
                carouselImg: [
                  {
                    src: imghomeWordPress, 
                    alt:"HomePage WordPress"
                  },
                  {
                    src: imghome2WordPress, 
                    alt:"HomePage2 WordPress"
                  },
                  {
                    src: imgequipeWordPress, 
                    alt:"EquipePage WordPress"
                  },
                  {
                    src: imgcontactWordPress, 
                    alt:"ContactPage WordPress"
                  },
                ],
                author: "Alex PAWLONSKI + les étudiants du Cefii ",
                client: "Projet d'étude WordPress et PHP",
                date:"Mai. 2020",
                desc: [ 
                  "Projet que j'ai réalisé en équipe durant ma formation, Qui visait à entraîner et à nous apprendre la gestion d'une équipe et son management puisque nous devions chacun être amener à diriger le travail des autres sur le projet.",
                  "Mais aussi à faire une synthèse de tout ce que nous avions appris sur la création de thème et de plugin en PHP pour WordPress.",
                ],        
                skill: ["PHP", "HTML", "CSS"],
                cms: ["WordPress"],
                tabWork: ['Création d\'un theme WordPres','Mise en page et intégration CSS', 'Management d\'une équipe de développeur'],
                link: {
                  linkWebSite: {
                    value:"Site Web Cefii", 
                    src: "https://cefii.fr/",
                  },
                  linkAuthor: {
                    value:"Repo GitHub", 
                    src: "https://github.com/AlexPawlonski/ProjetWPFleuriste",
                  },
                }
              }
            },
          ],
        },
        {
          title:"Me contacter",
          value:"contact",
          color: "red",
          id: 4,
          data:{
            dataLink:{
              title: "Réseaux cosiaux",
              data: [
                {
                  logo: {
                    src: logoGit, 
                    alt:"Logo GitHub"
                  }, 
                  link:{
                    url: "https://github.com/AlexPawlonski",
                    value: "Alex Pawlonski"
                  }
                },
                {
                  logo: {
                    src: logoLinkeDin,
                    alt:"Logo LinkeDin"
                  }, 
                  link:{
                    url: "https://www.linkedin.com/in/alex-pawlonski-4b38381b2",
                    value: "@AlexPawlonski"
                  }
                },
              ]
            },
            dataContact: {
              title: "Contact",
              data: {
                phone: "0626079610",
                mail: "apawlonski8@gmail.com",
                },
            },
          }
        },
      ]}/>
      <Footer data={{
        logo: {
          src: logoW, 
          alt:"Logo Alex PAWLONSKI"
        },
        info: {
          title: "Développeur web junior en recherche d'emploi",
          text: [
            "Si ce site vous a convaincu pour une future une collaboration n'hésitez pas à me contacter, je me devrai de vous répondre et de vous rencontrer au cours d’un entretien Visio que vous conviendrez à l’avance, en raison de la situation sanitaire",
          ],
        }, 
        name: "Alex PAWLONSKI",
        location: "35 bis rue d'anjou 49220 Erdre en anjou",
        phone: "0626079610",
        mail: "apawlonski8@gmail.com"
      }} />
    </div>
  );
}
export default App;
