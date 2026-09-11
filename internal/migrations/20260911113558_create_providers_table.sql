-- +goose Up
CREATE TABLE IF NOT EXISTS providers(
    id              SERIAL PRIMARY KEY,
    provider_name   TEXT NOT NULL,
    created_at      TIMESTAMP WITH  TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- +goose Down
DROP TABLE IF EXISTS providers;
