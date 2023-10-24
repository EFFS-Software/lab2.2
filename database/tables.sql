-- Active: 1698106069092@@localhost@5432@postgres

do $$
BEGIN 
    DROP TABLE if exists tbl_brands cascade;
    CREATE Table if not exists 
        tbl_brands(id SERIAL PRIMARY KEY,
        nombre_marca VARCHAR(100));

    DROP TABLE if exists tbl_models cascade;
    CREATE Table
    if not exists tbl_models(
        id SERIAL PRIMARY KEY,
        nombre_modelo VARCHAR(100)
    );

    DROP TABLE if exists tbl_cars cascade; 
    CREATE Table if not exists
        tbl_cars (
            id SERIAL PRIMARY KEY,
            idMarca int REFERENCES tbl_brands(id),
            idModelo VARCHAR(100),
            color VARCHAR(50),
            anio INTEGER);
end;
$$

-- INSERT INTO
--     tbl_cars (marca, modelo, color, anio)
-- VALUES ('Mazda', '626', 'Rojo', 1981);

-- INSERT INTO
--     tbl_cars (marca, modelo, color, anio)
-- VALUES (
--         'Nissan',
--         'Sentra',
--         'Blanco',
--         1986
--     );

-- INSERT INTO
--     tbl_cars (marca, modelo, color, anio)
-- VALUES ('Kia', 'Sephia', 'Azul', 2001);

-- SELECT *from tbl_cars;