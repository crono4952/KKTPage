/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `selected_service` (text, required)
      - `company_name` (text, optional)
      - `problems` (text, required)
      - `additional_info` (text, optional)
      - `language` (text, required)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for public insert access (since this is a contact form)
    - Add policy for authenticated users to read all requests
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  selected_service text NOT NULL,
  company_name text,
  problems text NOT NULL,
  additional_info text,
  language text NOT NULL DEFAULT 'en',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation requests (public contact form)
CREATE POLICY "Anyone can submit consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all consultation requests
CREATE POLICY "Authenticated users can read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email 
  ON consultation_requests(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at 
  ON consultation_requests(created_at DESC);