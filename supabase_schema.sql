-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create LeadStatus enum
CREATE TYPE lead_status AS ENUM (
  'new', 
  'contacted', 
  'follow_up', 
  'interested', 
  'meeting_scheduled', 
  'proposal_sent', 
  'converted', 
  'not_interested',
  'cold_lead'
);

-- Create ActivityType enum
CREATE TYPE activity_type AS ENUM (
  'lead_created', 
  'email_sent', 
  'status_changed', 
  'note_added'
);

-- Create school_leads table
CREATE TABLE IF NOT EXISTS school_leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  school_name TEXT NOT NULL,
  principal_name TEXT,
  contact_person_name TEXT,
  email TEXT NOT NULL,
  mobile TEXT,
  website TEXT,
  city TEXT,
  state TEXT,
  notes TEXT,
  status lead_status DEFAULT 'new',
  email_sent BOOLEAN DEFAULT FALSE,
  email_sent_at TIMESTAMPTZ,
  last_email_template TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create email_templates table
CREATE TABLE IF NOT EXISTS email_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  key TEXT NOT NULL UNIQUE,
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create lead_activities table
CREATE TABLE IF NOT EXISTS lead_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID NOT NULL REFERENCES school_leads(id) ON DELETE CASCADE,
  type activity_type NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE school_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;

-- RLS Policies for school_leads
CREATE POLICY "Allow authenticated users to view all school leads" 
ON school_leads 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to insert school leads" 
ON school_leads 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update school leads" 
ON school_leads 
FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete school leads" 
ON school_leads 
FOR DELETE 
USING (auth.role() = 'authenticated');

-- RLS Policies for email_templates
CREATE POLICY "Allow authenticated users to view all templates" 
ON email_templates 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to insert templates" 
ON email_templates 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update templates" 
ON email_templates 
FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete templates" 
ON email_templates 
FOR DELETE 
USING (auth.role() = 'authenticated');

-- RLS Policies for lead_activities
CREATE POLICY "Allow authenticated users to view all activities" 
ON lead_activities 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to insert activities" 
ON lead_activities 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Seed default templates
INSERT INTO email_templates (name, key, subject, body_html, is_default) VALUES
('Introduction', 'introduction', 'A quick idea for {{school_name}}', '<p>Dear {{principal_name}},</p><p>My name is [Your Name] from DentPixel - we specialize in creating modern, user-friendly websites for schools like {{school_name}} in {{city}}.</p><p>I''d love to share a quick idea that could help improve your school''s online presence and make it easier for parents to find the information they need.</p><p>Would you be open to a brief discussion about how we can make your website work harder for your school?</p><p>Looking forward to connecting!</p><p>Best,<br>DentPixel Team</p>', true),
('Website Audit', 'website_audit', 'A few observations about {{school_name}}''s website', '<p>Dear {{principal_name}},</p><p>I was recently looking at {{school_name}}''s website and wanted to share a few quick, friendly observations that might help improve the experience for your parents and visitors:</p><ul><li>Mobile responsiveness on different devices</li><li>Admissions information accessibility</li><li>Parent portal access</li><li>Photo gallery organization</li></ul><p>Would you like a free, no-obligation website review with specific recommendations for improvements?</p><p>Best,<br>DentPixel Team</p>', false),
('Portfolio Showcase', 'portfolio_showcase', 'Recent school website projects we''ve completed', '<p>Dear {{principal_name}},</p><p>We wanted to share some of our recent school website projects that might give you an idea of what''s possible for {{school_name}}:</p><ul><li>Mobile-first design for on-the-go parents</li><li>Easy-to-use admission inquiry forms</li><li>Interactive photo and video galleries</li><li>Faculty and staff directories</li><li>Real-time notice board system</li></ul><p>Would you like to see a quick demo of any of these features?</p><p>Best,<br>DentPixel Team</p>', false),
('Follow Up', 'follow_up', 'Just following up', '<p>Hi {{contact_person_name}},</p><p>I hope your week is going well! I just wanted to circle back to our recent conversation about {{school_name}}''s website.</p><p>Would you be interested in a quick 10-minute call to discuss any questions you might have?</p><p>Best,<br>DentPixel Team</p>', false),
('Final Follow Up', 'final_follow_up', 'Last follow-up from DentPixel', '<p>Dear {{principal_name}},</p><p>I hope this message finds you well. Just wanted to check in one last time about {{school_name}}''s website.</p><p>If this isn''t a priority right now, no worries at all. I completely understand how busy school leadership can be.</p><p>If you''d like to revisit this conversation at any point in the future, please don''t hesitate to reach out!</p><p>Best,<br>DentPixel Team</p>', false),
('Meeting Request', 'meeting_request', 'Let''s schedule a quick call about {{school_name}}''s website', '<p>Dear {{principal_name}},</p><p>Thank you for your interest in DentPixel! I''m excited to discuss how we can help with {{school_name}}''s website.</p><p>I have a few times available this week for a quick call:</p><ul><li>Tuesday at 2pm</li><li>Wednesday at 10am</li><li>Thursday at 3pm</li></ul><p>Would any of these times work for you? If not, please let me know what works best and I''ll adjust my schedule.</p><p>Best,<br>DentPixel Team</p>', false),
('Proposal Follow Up', 'proposal_follow_up', 'Following up on the website proposal for {{school_name}}', '<p>Dear {{principal_name}},</p><p>I hope you''ve had a chance to review the proposal I sent for {{school_name}}''s website.</p><p>I just wanted to check if you have any questions, or if there''s anything you''d like me to clarify?</p><p>I''d be happy to walk you through any part of it in a quick call.</p><p>Best,<br>DentPixel Team</p>', false),
('Re-engagement', 'reengagement', 'Checking in about {{school_name}}''s website', '<p>Dear {{principal_name}},</p><p>I hope your school year is going well! I wanted to circle back since we last spoke about {{school_name}}''s website.</p><p>We have some exciting new services and portfolio projects that I think you might find interesting.</p><p>Would you like to revisit the conversation about upgrading your school''s online presence?</p><p>Best,<br>DentPixel Team</p>', false);
