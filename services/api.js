import axios from 'axios';

export const apiUrl = axios.create({
    baseURL: 'https://vduughytxyvoiqewxnkp.supabase.co/rest/v1',
    headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdXVnaHl0eHl2b2lxZXd4bmtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjQ2MzkwMywiZXhwIjoxOTgyMDM5OTAzfQ.v6S8fGg5cnFmV3z7eS1imj6DglUCfJe_jeRalve_2dQ',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdXVnaHl0eHl2b2lxZXd4bmtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjQ2MzkwMywiZXhwIjoxOTgyMDM5OTAzfQ.v6S8fGg5cnFmV3z7eS1imj6DglUCfJe_jeRalve_2dQ'
    }
    
});

export const apiUrlPost = axios.create({
    baseURL: 'https://vduughytxyvoiqewxnkp.supabase.co/rest/v1',
    headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdXVnaHl0eHl2b2lxZXd4bmtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjQ2MzkwMywiZXhwIjoxOTgyMDM5OTAzfQ.v6S8fGg5cnFmV3z7eS1imj6DglUCfJe_jeRalve_2dQ',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdXVnaHl0eHl2b2lxZXd4bmtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjQ2MzkwMywiZXhwIjoxOTgyMDM5OTAzfQ.v6S8fGg5cnFmV3z7eS1imj6DglUCfJe_jeRalve_2dQ',
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
    }
})
