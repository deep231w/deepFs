-- +goose Up
INSERT INTO providers (provider_name) 
VALUES
    ('google_drive'),
    ('onedrive'),
    ('dropbox')
ON CONFLICT (provider_name) DO NOTHING;

-- +goose Down
DELETE FROM providers
WHERE provider_name IN (
    'google_drive',
    'onedrive',
    'dropbox'
);
