-- +goose Up
CREATE TABLE IF NOT EXISTS token_storage(
    id                  SERIAL  PRIMARY KEY,
    user_id             INTEGER NOT NULL REFERENCES users(id),
    provider_id         INTEGER NOT NULL REFERENCES providers(id),
    id_of_provider      TEXT ,
    access_token        TEXT,
    refresh_token       TEXT,
    email_id            VARCHAR(255),
    name_of_provider    TEXT NOT NULL,
    created_at          TIMESTAMP WITH  TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
;

-- +goose Down
DROP TABLE IF EXISTS token_storage;
