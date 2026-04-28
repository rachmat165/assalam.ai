window.PORTAL_DATA = {
  badgeTypes: [
    { label: 'Live', color: 'green', description: 'Unit/fitur yang sedang aktif real-time' },
    { label: 'Agentic AI', color: 'purple', description: 'Dijalankan penuh oleh Agentic AI — otonom' },
    { label: 'AI Auto', color: 'green', description: 'Otomatis berbasis rules/AI tanpa perlu approval' },
    { label: 'AI Analytics', color: 'amber', description: 'AI untuk analitik dan insight, bukan eksekusi' },
    { label: 'Action Needed', color: 'red', description: 'Memerlukan tindakan manusia segera' },
    { label: 'Review Needed', color: 'amber', description: 'Menunggu review/approval manusia' },
  ],
  sections: [
    {
      label: '🏠 Dashboard Direktorat DPK',
      link: '/dpk/dashboard',
      badge: { text: 'Live', color: 'green' },
      children: [
        { label: 'Executive Summary & KPI Real-time', link: '/dpk/dashboard/executive-summary', description: 'Target DPK, ROAS aktual, CoF, FDR — update setiap 15 menit' },
        { label: 'ROAS Dashboard (Live)', link: '/dpk/dashboard/roas-live', description: 'Return on Ad Spend per platform per produk — real-time', badge: { text: 'AI Live', color: 'purple' } },
        { label: 'Alert & Notifikasi AI Agent', link: '/dpk/dashboard/alerts', description: 'Notifikasi dari Paperclip: anggaran, anomali, approval pending' },
        { label: 'Laporan Harian Agentic AI', link: '/dpk/dashboard/daily-report', description: 'Laporan naratif otomatis Claude — setiap pukul 07.00 WIB' },
        { label: 'Performance Heatmap Bulanan', link: '/dpk/dashboard/heatmap', description: 'Visualisasi KPI seluruh unit Direktorat DPK' },
      ],
    },
    {
      label: '💰 Penghimpunan Dana Syariah',
      link: '/dpk/funding',
      children: [
        {
          label: 'Tabungan Syariah',
          link: '/dpk/funding/tabungan',
          children: [
            { label: 'Overview Produk Tabungan', link: '/dpk/funding/tabungan/overview', description: 'Ringkasan seluruh produk tabungan, nisbah aktual, DPK total' },
            { label: 'Tabungan Wadiah Reguler', link: '/dpk/funding/tabungan/wadiah-reguler', description: 'Akad wadiah yad dhamanah | Fatwa DSN No.2 | PSAK 101' },
            { label: 'TabunganKu Syariah', link: '/dpk/funding/tabungan/tabunganku', description: 'Program OJK TabunganKu — wadiah, bebas biaya, inklusi keuangan' },
            { label: 'Tabungan Mudharabah Berjangka', link: '/dpk/funding/tabungan/mudharabah-berjangka', description: 'Akad mudharabah muthlaqah | PSAK 105 | Nisbah kompetitif' },
            { label: 'Tabungan Rencana & Target', link: '/dpk/funding/tabungan/rencana', description: 'Goal-based saving: Rumah, Pendidikan, Pernikahan — AI tracker' },
            { label: 'Tabungan Haji & Umroh (ONH)', link: '/dpk/funding/tabungan/haji-umroh', description: 'Integrasi SISKOHAT Kemenag | Auto-payment DP | Waiting list AI' },
            { label: 'Digital Onboarding & e-KYC AI', link: '/dpk/funding/tabungan/ekyc', description: 'Pipeline KYC: OCR KTP → Face Match → Liveness → Account Open', badge: { text: 'Agentic AI', color: 'purple' } },
          ],
        },
        {
          label: 'Deposito Syariah',
          link: '/dpk/funding/deposito',
          children: [
            { label: 'Overview Produk Deposito', link: '/dpk/funding/deposito/overview', description: 'Total deposito, breakdown tenor, top deposan, nisbah aktual' },
            { label: 'Deposito Mudharabah Muthlaqah', link: '/dpk/funding/deposito/muthlaqah', description: 'Investasi tidak terikat | Nisbah AI-optimized | PSAK 105' },
            { label: 'Deposito Mudharabah Muqayyadah', link: '/dpk/funding/deposito/muqayyadah', description: 'Investasi terikat untuk proyek spesifik | DPS approval workflow' },
            { label: 'Institutional & Corporate Deposits', link: '/dpk/funding/deposito/institutional', description: 'CRM AI korporasi, RM support, proposal pricing, negosiasi nisbah' },
            { label: 'Deposit Pricing AI', link: '/dpk/funding/deposito/pricing-ai', description: 'ALM-linked nisbah optimizer — update real-time dari Treasury', badge: { text: 'AI Auto', color: 'green' } },
          ],
        },
        {
          label: 'Giro Syariah & Cash Management',
          link: '/dpk/funding/giro',
          children: [
            { label: 'Overview Giro Syariah', link: '/dpk/funding/giro/overview' },
            { label: 'Giro Wadiah Perorangan', link: '/dpk/funding/giro/wadiah-perorangan', description: 'Akad wadiah yad dhamanah | Real-time balance | QRIS' },
            { label: 'Giro Wadiah Institusi & Korporasi', link: '/dpk/funding/giro/wadiah-institusi', description: 'Giro korporasi, yayasan, pemerintah — cash management terintegrasi' },
            { label: 'Disbursement & Payment Hub', link: '/dpk/funding/giro/payment-hub', description: 'Pembayaran massal: payroll, vendor, supplier via BI-FAST & RTGS', badge: { text: 'AI Auto', color: 'green' } },
          ],
        },
        {
          label: 'Analytics & Laporan DPK',
          link: '/dpk/funding/analytics',
          children: [
            { label: 'FDR Monitor Real-time', link: '/dpk/funding/analytics/fdr' },
            { label: 'Cost of Fund (CoF) Tracker', link: '/dpk/funding/analytics/cof' },
            { label: 'Pertumbuhan DPK YoY', link: '/dpk/funding/analytics/growth' },
            { label: 'Laporan Regulasi OJK (LBPRS)', link: '/dpk/funding/analytics/lbprs' },
            { label: 'Concentration Risk Monitor', link: '/dpk/funding/analytics/concentration' },
          ],
        },
      ],
    },
    {
      label: '🌱 Wellbeing Products & Inovasi',
      link: '/dpk/wellbeing',
      children: [
        {
          label: 'Produk Sosial & Filantropi Syariah',
          link: '/dpk/wellbeing/sosial',
          children: [
            { label: 'ZIS Banking (Zakat, Infaq, Sedekah)', link: '/dpk/wellbeing/sosial/zis', description: 'Platform ZIS terintegrasi BAZNAS/LAZ | Auto-kalkulasi 2.5% | PSAK 109', badge: { text: 'Agentic AI', color: 'purple' } },
            { label: 'Platform Waqaf Produktif', link: '/dpk/wellbeing/sosial/waqaf', description: 'Nazhir digital | Sukuk Waqaf | Produktivitas aset waqaf AI | POJK 14/2021' },
            { label: 'Financial Wellness & Literasi AI', link: '/dpk/wellbeing/sosial/wellness', description: 'Personal finance health score | AI coaching | Goal tracker', badge: { text: 'Agentic AI', color: 'purple' } },
            { label: 'Program CSR & Sosial Bank', link: '/dpk/wellbeing/sosial/csr' },
          ],
        },
        {
          label: 'Produk Digital & Fintech Partnership',
          link: '/dpk/wellbeing/digital',
          children: [
            { label: 'Super App Syariah (iOS/Android)', link: '/dpk/wellbeing/digital/superapp', description: 'Mobile banking terintegrasi: tabungan, ZIS, QRIS, BI-FAST, transfer' },
            { label: 'Open Banking & API Marketplace', link: '/dpk/wellbeing/digital/openbanking', description: 'API RESTful untuk fintech partner | Sandbox | Monetisasi API' },
            { label: 'Pay Later Syariah & BNPL Halal', link: '/dpk/wellbeing/digital/paylater', description: 'Akad murabahah cicilan | AI credit scoring | Limit management', badge: { text: 'Agentic AI', color: 'purple' } },
            { label: 'QRIS & Payment Ecosystem', link: '/dpk/wellbeing/digital/qris' },
            { label: 'Digital Savings Jar & Goals', link: '/dpk/wellbeing/digital/goals' },
          ],
        },
        {
          label: 'R&D Produk Baru',
          link: '/dpk/wellbeing/rd',
          children: [
            { label: 'Pipeline Inovasi Produk', link: '/dpk/wellbeing/rd/pipeline', description: 'Tahap riset → konsep → DPS → uji coba → OJK → go-live' },
            { label: 'Market Intelligence AI', link: '/dpk/wellbeing/rd/market-intelligence', badge: { text: 'AI Analytics', color: 'amber' } },
            { label: 'DPS Review Workflow', link: '/dpk/wellbeing/rd/dps-workflow', description: 'Fatwa DSN matching AI + DPS manual review' },
            { label: 'Uji Coba Terbatas (POJK 1/2023)', link: '/dpk/wellbeing/rd/pilot', description: 'Manajemen pilot: ruang lingkup, skenario, nasabah pilot' },
            { label: 'Regulatory Filing ke OJK', link: '/dpk/wellbeing/rd/regulatory-filing', description: 'Dokumen permohonan OJK — AI packager + tracking status' },
            { label: 'Arsip Produk (Sejarah)', link: '/dpk/wellbeing/rd/archive' },
          ],
        },
      ],
    },
    {
      label: '📱 Agentic AI Marketing ★',
      link: '/dpk/marketing',
      badge: { text: 'Full Agentic', color: 'purple' },
      children: [
        {
          label: 'Campaign Aktif',
          link: '/dpk/marketing/campaigns',
          badge: { text: 'Live', color: 'green' },
          children: [
            { label: 'Semua Campaign (Overview)', link: '/dpk/marketing/campaigns/all' },
            { label: 'Instagram & Facebook Ads', link: '/dpk/marketing/campaigns/meta', badge: { text: 'Live', color: 'green' }, children: [
              { label: 'Campaign Dashboard Meta', link: '/dpk/marketing/campaigns/meta/dashboard' },
              { label: 'Ad Sets & Targeting', link: '/dpk/marketing/campaigns/meta/adsets' },
              { label: 'Konten Aktif (Carousel/Feed/Story)', link: '/dpk/marketing/campaigns/meta/content' },
              { label: 'Audience Insights', link: '/dpk/marketing/campaigns/meta/audience' },
              { label: 'ROAS Meta Breakdown', link: '/dpk/marketing/campaigns/meta/roas' },
            ] },
            { label: 'TikTok Ads', link: '/dpk/marketing/campaigns/tiktok', badge: { text: 'Live', color: 'green' }, children: [
              { label: 'Campaign Dashboard TikTok', link: '/dpk/marketing/campaigns/tiktok/dashboard' },
              { label: 'Spark Ads & In-Feed', link: '/dpk/marketing/campaigns/tiktok/spark' },
              { label: 'Influencer Pipeline', link: '/dpk/marketing/campaigns/tiktok/influencer' },
              { label: 'Video Performance', link: '/dpk/marketing/campaigns/tiktok/video' },
              { label: 'ROAS TikTok Breakdown', link: '/dpk/marketing/campaigns/tiktok/roas' },
            ] },
            { label: 'YouTube & Google Ads', link: '/dpk/marketing/campaigns/google', children: [
              { label: 'Campaign Dashboard Google', link: '/dpk/marketing/campaigns/google/dashboard' },
              { label: 'Search Ads & Keywords', link: '/dpk/marketing/campaigns/google/search' },
              { label: 'YouTube Pre-roll', link: '/dpk/marketing/campaigns/google/youtube' },
              { label: 'Display Network', link: '/dpk/marketing/campaigns/google/display' },
              { label: 'ROAS Google Breakdown', link: '/dpk/marketing/campaigns/google/roas' },
            ] },
            { label: 'Content Calendar (30 Hari)', link: '/dpk/marketing/campaigns/calendar', description: 'Jadwal periodik otomatis AI — aware hari besar Islam' },
          ],
        },
        {
          label: 'Creative Studio AI',
          link: '/dpk/marketing/creative',
          badge: { text: 'Agentic AI', color: 'purple' },
          children: [
            { label: 'Buat Brief Baru ➕', link: '/dpk/marketing/creative/new-brief', description: 'Mulai pipeline Agentic AI: brief → konten → deploy' },
            { label: 'Antrian Produksi Konten', link: '/dpk/marketing/creative/queue', description: 'Status pipeline: copywriting → desain → video → DPS review' },
            { label: 'Copywriter AI', link: '/dpk/marketing/creative/copywriter', children: [
              { label: 'Draft Konten Pending Review', link: '/dpk/marketing/creative/copywriter/pending' },
              { label: 'Approved Copy Archive', link: '/dpk/marketing/creative/copywriter/approved' },
              { label: 'Brand Voice Guidelines', link: '/dpk/marketing/creative/copywriter/guidelines' },
            ] },
            { label: 'Visual Design AI', link: '/dpk/marketing/creative/design', children: [
              { label: 'Asset Generator', link: '/dpk/marketing/creative/design/generator' },
              { label: 'Asset Library', link: '/dpk/marketing/creative/design/library' },
              { label: 'Brand Guardrails Config', link: '/dpk/marketing/creative/design/guardrails' },
              { label: 'Template Bank', link: '/dpk/marketing/creative/design/templates' },
            ] },
            { label: 'Video & Reels Creator AI', link: '/dpk/marketing/creative/video', children: [
              { label: 'Video Generator', link: '/dpk/marketing/creative/video/generator' },
              { label: 'Video Library', link: '/dpk/marketing/creative/video/library' },
              { label: 'Voiceover Settings', link: '/dpk/marketing/creative/video/voiceover' },
            ] },
            { label: 'DPS Compliance Queue', link: '/dpk/marketing/creative/dps-queue', description: 'Konten menunggu clearance DPS Compliance Agent + DPS manual', badge: { text: 'Review Needed', color: 'amber' } },
            { label: 'Rejected & Revision Log', link: '/dpk/marketing/creative/rejected' },
          ],
        },
      ],
    },
    {
      label: '👥 Layanan & Retensi Nasabah DPK',
      link: '/dpk/layanan',
      children: [
        { label: 'AI Chatbot Management', link: '/dpk/layanan/chatbot', badge: { text: 'Live 24/7', color: 'green' }, children: [
          { label: 'Live Conversations Monitor', link: '/dpk/layanan/chatbot/live' },
          { label: 'Eskalasi Pending (Human Agent)', link: '/dpk/layanan/chatbot/escalation', badge: { text: 'Action Needed', color: 'red' } },
          { label: 'Chatbot Performance (CSAT, FCR)', link: '/dpk/layanan/chatbot/performance' },
          { label: 'RAG Knowledge Base Editor', link: '/dpk/layanan/chatbot/knowledge-base', description: 'Update FAQ, produk, fatwa DSN dalam knowledge base chatbot' },
          { label: 'Intent Analytics', link: '/dpk/layanan/chatbot/intents' },
          { label: 'Channel Settings', link: '/dpk/layanan/chatbot/channels' },
        ] },
      ],
    },
    {
      label: '📋 Kepatuhan & Regulasi',
      link: '/dpk/compliance',
      children: [
        { label: 'DPS Compliance Center', link: '/dpk/compliance/dps', children: [
          { label: 'DPS Approval Queue', link: '/dpk/compliance/dps/queue', badge: { text: 'Review Needed', color: 'amber' } },
          { label: 'DPS Compliance Log', link: '/dpk/compliance/dps/log' },
          { label: 'Fatwa DSN-MUI Database', link: '/dpk/compliance/dps/fatwa-db', description: '180+ fatwa DSN yang digunakan DPS Compliance Agent' },
          { label: 'DPS Periodic Reports', link: '/dpk/compliance/dps/reports' },
        ] },
        { label: 'OJK Regulatory Reporting', link: '/dpk/compliance/ojk', children: [
          { label: 'LBPRS Bulanan', link: '/dpk/compliance/ojk/lbprs' },
          { label: 'Laporan Produk Baru', link: '/dpk/compliance/ojk/produk-baru' },
          { label: 'Status Filing OJK', link: '/dpk/compliance/ojk/filing-status' },
        ] },
        { label: 'APU-PPT (AML/KYC)', link: '/dpk/compliance/aml', children: [
          { label: 'PPATK Screening Log', link: '/dpk/compliance/aml/ppatk' },
          { label: 'CDD/EDD Cases', link: '/dpk/compliance/aml/cdd' },
          { label: 'STR/LTKM/LTKT', link: '/dpk/compliance/aml/str' },
        ] },
        { label: 'Audit Trail AI Agent', link: '/dpk/compliance/audit-trail', description: 'Log lengkap setiap tindakan Paperclip AI Agent untuk audit OJK' },
        { label: 'Checklist Go-Live', link: '/dpk/compliance/checklist', description: 'Pre-go-live checklist per unit — validasi DPS & Compliance Officer' },
      ],
    },
  ],
};
