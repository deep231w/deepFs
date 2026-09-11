-- +goose Up
CREATE TABLE IF NOT EXISTS files(
    id              SERIAL NOT NULL PRIMARY KEY,
    user_id         INTEGER NOT NULL REFERENCES users(id),
    file_name       TEXT NOT NULL,
    file_type       TEXT NOT NULL,
    file_type_id    INTEGER ,
    created_at      TIMESTAMP WITH  TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- +goose Down
DROP TABLE IF EXISTS files;
