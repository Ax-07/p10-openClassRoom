## Ajout aria-label
    - dans le fichier Home/index sur les liens dans le footer
    - dans le fichier Select/index sur le boutton collapse
    - dans le fichier Modal/index sur le boutton close
## Menu 
### (probleme navigation)
    - ajout des ids sur les sections correspondant aux liens du menu.
## Home
### probleme affichage dernier evenement
    - on recupérait "const {last} = useData()", mais "last" n'est pas renvoyé par le context. il faut récuperer "data" puis calculer le dernier event.
## Slider
### probleme avec les keys
    - ajout d'une div englobant le slider et les description, dans lequel on definit une clé unique ( ici la date de l'event). on modifie egalement les key des input de la pagination avec la meme cle que le slider. 
### probleme avec les dots
    - j'ai sorti la pagination du mappage du slider, sinon on ajoute le mappage complet pour chaque iterations des events.  
    - j'ai modifier la gestion du slider, pour que la boucle infini fonctionne correctement.
    - j'ai modifier l'utilisation du useEffect pour que lorsqu'on click sur un dot le timer recommence a 0 ou si byDateDesc est modifier.
### probleme avec la date afficher
    - dans le fichier helper/date/index, j'ai ajouter +1 a getMouth pour refleter le range de 1 à 12 et non de 0 à 11.
## Events
### probleme avec le filtrage des données
    - le filtre ne prennait pas en compte le type d'event, j'ai ajouter "setFilteredEvents" qui filtre les events par type.
## Form
### probleme onSuccess
    - j'ai ajouter onSuccess() apres setSendin(false) sinon il n'est jamais appelé et le test veut le vérifier.
### probleme test "await screen.findByText("Envoyer");"
    - j'ai modifier le timeOut de la promesse de mockContactApi
# !!! findByText a un timeOut de 1000ms !!!
    - et chatgpt ou copilote me l'a pas dit!!!!! putain d'IA de merde!!!! 
