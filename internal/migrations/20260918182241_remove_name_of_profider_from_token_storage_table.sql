-- +goose Up
ALTER TABLE token_storage 
    DROP COLUMN name_of_provider;

-- +goose Down
ALTER TABLE token_storage
    ADD COLUMN name_of_provider;
