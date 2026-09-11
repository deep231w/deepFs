-- +goose Up
CREATE TABLE IF NOT EXISTS file_chunks(
    id          SERIAL PRIMARY KEY,
    file_id     INTEGER NOT NULL REFERENCES files(id),
    chunk_size  INTEGER NOT NULL,
    chunk_index TEXT NOT NULL,
    storage_id  INTEGER NOT NULL REFERENCES token_storage(id),
    created_at  TIMESTAMP WITH  TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
;

-- +goose Down
DROP TABLE IF EXISTS file_chunks;
