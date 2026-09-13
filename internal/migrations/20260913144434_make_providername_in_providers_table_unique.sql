-- +goose Up
ALTER TABLE providers
ADD CONSTRAINT providers_provider_name_unique
UNIQUE (provider_name);

-- +goose Down
ALTER TABLE providers
DROP CONSTRAINT providers_provider_name_unique;
