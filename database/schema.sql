-- Enable PostGIS extension for spatial/boundary mapping
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. Users Table (Buyers, Sellers, Verified Professionals)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_role VARCHAR(50) DEFAULT 'buyer', -- 'buyer', 'seller', 'admin'
    is_kyc_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Parcels Table (Land Listings & Spatial Boundaries)
CREATE TABLE parcels (
    parcel_id SERIAL PRIMARY KEY,
    title_number VARCHAR(100) UNIQUE NOT NULL,
    owner_id INT REFERENCES users(user_id),
    county VARCHAR(100) NOT NULL,
    sub_county VARCHAR(100) NOT NULL,
    size_acres DECIMAL(10, 4) NOT NULL,
    land_use VARCHAR(100), -- 'Agricultural', 'Residential', 'Commercial'
    asking_price DECIMAL(12, 2) NOT NULL,
    land_score INT CHECK (land_score BETWEEN 0 AND 100),
    gps_boundary GEOMETRY(Polygon, 4326), -- PostGIS boundary coordinates
    is_verified BOOLEAN DEFAULT FALSE,
    status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'active', 'pending_escrow', 'sold'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Title Verification Logs (NLC Registry Integration)
CREATE TABLE title_verifications (
    verification_id SERIAL PRIMARY KEY,
    title_number VARCHAR(100) NOT NULL,
    parcel_id INT REFERENCES parcels(parcel_id),
    registry_status VARCHAR(50), -- 'Valid', 'Encumbered', 'Fake'
    registered_owner VARCHAR(255),
    encumbrances TEXT,
    rates_arrears DECIMAL(12, 2) DEFAULT 0.00,
    verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Escrow Transactions Table (M-Pesa & Secure Payments)
CREATE TABLE escrow_transactions (
    transaction_id SERIAL PRIMARY KEY,
    parcel_id INT REFERENCES parcels(parcel_id),
    buyer_id INT REFERENCES users(user_id),
    seller_id INT REFERENCES users(user_id),
    agreed_price DECIMAL(12, 2) NOT NULL,
    deposit_amount DECIMAL(12, 2) NOT NULL, -- 10% deposit
    mpesa_receipt VARCHAR(100),
    escrow_status VARCHAR(50) DEFAULT 'awaiting_deposit', -- 'deposit_received', 'transfer_confirmed', 'completed', 'disputed'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);