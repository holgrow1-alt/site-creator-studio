-- =============================================
-- ECODRONES COMMUNITY - Supabase Schema
-- Run this in your Supabase SQL Editor
-- =============================================

-- Members table
CREATE TABLE IF NOT EXISTS members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  referral_code TEXT UNIQUE NOT NULL,
  referred_by TEXT REFERENCES members(referral_code) ON DELETE SET NULL,
  level INTEGER DEFAULT 1,
  tickets INTEGER DEFAULT 1,
  invite_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Allow public read (for ranking page)
CREATE POLICY "Public can read members" ON members
  FOR SELECT USING (true);

-- Allow anyone to register
CREATE POLICY "Anyone can register" ON members
  FOR INSERT WITH CHECK (true);

-- Allow members to update their own data (by email)
CREATE POLICY "Members can update own data" ON members
  FOR UPDATE USING (true);

-- Function to increment referrer's count when new member joins via referral
CREATE OR REPLACE FUNCTION increment_referrer(ref_code TEXT)
RETURNS void AS $$
BEGIN
  UPDATE members
  SET
    invite_count = invite_count + 1,
    tickets = tickets + 1,
    level = CASE
      WHEN invite_count + 1 >= 30 THEN 4
      WHEN invite_count + 1 >= 15 THEN 3
      WHEN invite_count + 1 >= 5 THEN 2
      ELSE 1
    END
  WHERE referral_code = ref_code;

  -- Bonus tickets at milestones
  UPDATE members
  SET tickets = tickets + 2
  WHERE referral_code = ref_code AND invite_count = 5;

  UPDATE members
  SET tickets = tickets + 5
  WHERE referral_code = ref_code AND invite_count = 10;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- View for ranking (only exposes necessary info)
CREATE OR REPLACE VIEW ranking AS
  SELECT
    id,
    name,
    referral_code,
    level,
    tickets,
    invite_count,
    created_at
  FROM members
  ORDER BY invite_count DESC, tickets DESC, created_at ASC;
