create table if not exists ingredient
(
  id int auto_increment not null
    primary key,
  name varchar(255) charset utf8mb4 null
);

create table if not exists recipe
(
  id int auto_increment not null primary key,
  name        varchar(255) charset utf8mb4 null,
  description varchar(255) charset utf8mb4 null,
  duration     int          null,
  update_time  date         null,
  nb_people    int          null
);

create table if not exists recipe_has_ingredient
(
  id_recipe     int          not null,
  id_ingredient int          not null,
  quantity      int          null,
  unit          varchar(255) charset utf8mb4 null,
  primary key (id_ingredient, id_recipe),
  constraint FK_recipe_has_ingredient_ingredient
    foreign key (id_ingredient) references ingredient (id)
      on delete cascade,
  constraint FK_recipe_has_ingredient_recipe
    foreign key (id_recipe) references recipe (id)
      on delete cascade
);

create table if not exists step
(
  id int auto_increment not null
    primary key,
  step_order  int          null,
  description varchar(255) charset utf8mb4 null,
  id_recipe int not null,
  constraint FK_step_recipe_id_recipe
    foreign key (id_recipe) references recipe (id)
      on DELETE cascade
);