insert into ingredient (name)
values ('Abricot'),
       ('Baguette'),
       ('Cabillaud'),
       ('Dés de jambon'),
       ('Faux-filet'),
       ('Glaçon'),
       ('Huile'),
       ('Jus de banane'),
       ('Ketchup'),
       ('Lait en poudre'),
       ('M&Ms'),
       ('Nutella'),
       ('Oignon'),
       ('Pâte à Pizza'),
       ('Quinoa'),
       ('Raclette'),
       ('Saké'),
       ('Tabasco'),
       ('Vache qui rit'),
       ('Wasabi'),
       ('Yaourt'),
       ('Zuccata');

insert into recipe (name, description, preparation_time, cooking_time, nb_people, creation_date)
values ('Pizza Fruitée', 'Une pizza aux fruits', 15, 10, 1, now()),
       ('Mixture étrange', 'Un mélange surprenant qui fait fondre le palais (littéralement)', 5, 0, 4, now()),
       ('Sandwich du futur', 'Une sandwich qui ne sera sans doute pas commercialisé avec quelques années', 10, 0, 1, now());

insert into recipe_has_ingredient (id_recipe, id_ingredient, quantity, unit)
values (1, 14, 1, ' '),
       (1, 9, 1, 'louche'),
       (1, 1, 12, ' '),
       (1, 22, 4, ' '),
       (1, 13, 4, ' '),
       (1, 19, 8, 'portions'),
       (2, 17, 1, 'litre'),
       (2, 10, 3, 'cuillères à soupe'),
       (2, 8, 1, 'verre'),
       (2, 7, 2, 'verres'),
       (2, 21, 1, 'pot'),
       (3, 2, 1, ' '),
       (3, 12, 2, 'cuillères'),
       (3, 3, 1, ' '),
       (3, 5, 1, ' '),
       (3, 6, 4, ' ');

insert into step (step_order, description, id_recipe)
values (1, 'Etaler la pate à Pizza', 1),
       (2, 'Ajouter les ingrédients sur la pate', 1),
       (3, 'Mettre au four thermostat 12', 1),
       (1, 'Ajouter tous les ingrédients dans une marmite', 2),
       (2, 'Mixer le tout', 2),
       (1, 'Couper le pain dans le sens de la longueur', 3),
       (2, 'Faire cuire le cabillaud', 3),
       (3, 'Ajouter tous les ingrédients dans le pain', 3);
