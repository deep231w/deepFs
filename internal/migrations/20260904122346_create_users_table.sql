-- +goose Up
CREATE TABLE IF NOT EXISTS users (
    id              SERIAL PRIMARY KEY ,
    name            VARCHAR(20) NOT NULL,
    email           VARCHAR(255) NOT NULL UNIQUE,
    picture         TEXT,
    verified_email  BOOLEAN NOT NULL,
    created_at      TIMESTAMP WITH  TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- +goose Down
DROP TABLE IF EXISTS users;
