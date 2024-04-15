# Cahier de Recette - Plan de Test End-to-End du Parcours Visiteur
- ## header
    - ### nav
- ## slider 
    - **Given** En arrivant sur la page
    - **When** Le slider est créé
    - **Then** une carte de la liste est affichée avec le titre "World economic forum", le mois "janvier" et la description "Oeuvre à la coopération entre le secteur public et le privé.".
- ## Événements
    - **Scenario 1**
        - ***Given*** En arrivant sur la page
        - ***When*** Les événements sont créés
        - ***Then*** une liste de cartes d'événements est affichée avec le mois "avril".
    - **Scenario 2**
        - ***Given*** En arrivant sur la page
        - ***When*** une erreur se produit
        - ***Then*** un message d'erreur est affiché.
    - **Scenario 3**
        - ***Given*** En arrivant sur la page
        - ***When*** nous sélectionnons une catégorie
        - ***Then*** une liste filtrée est affichée, où "Forum #productCON" n'est pas présent mais "Conférence #productCON" est présent.
    - **Scenario 4**
        - ***Given*** En arrivant sur la page
        - ***When*** nous cliquons sur un événement
        - ***Then*** le détail de l'événement est affiché, y compris la période "24-25-26 Février" et la prestation "1 site web dédié".
- ## Formulaire

# Cahier de Recette - Plan de Test End-to-End du Parcours Visiteur

| Section | Scénario | Given | When | Then |
|---------|----------|-------|------|------|
| Header  | Nav      |       |      |      |
| Slider  |          | En arrivant sur la page | Le slider est créé | une carte de la liste est affichée avec le titre "World economic forum", le mois "janvier" et la description "Oeuvre à la coopération entre le secteur public et le privé." |
| Événements | Scénario 1 | En arrivant sur la page | Les événements sont créés | une liste de cartes d'événements est affichée avec le mois "avril". |
| Événements | Scénario 2 | En arrivant sur la page | une erreur se produit | un message d'erreur est affiché. |
| Événements | Scénario 3 | En arrivant sur la page | nous sélectionnons une catégorie | une liste filtrée est affichée, où "Forum #productCON" n'est pas présent mais "Conférence #productCON" est présent. |
| Événements | Scénario 4 | En arrivant sur la page | nous cliquons sur un événement | le détail de l'événement est affiché, y compris la période "24-25-26 Février" et la prestation "1 site web dédié". |