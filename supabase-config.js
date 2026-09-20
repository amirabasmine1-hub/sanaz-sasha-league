// ================================
// SUPABASE CONFIG
// لیگ تخته ساناز و ساشا
// ================================

// آدرس پروژه Supabase
const SUPABASE_URL = "https://ldjnkemwakuktqlicrgf.supabase.co";

// کلید Publishable
const SUPABASE_KEY = "sb_publishable_4GqTZUbB6poSY_LQ0_zIBQ_QF7Pj7Wy";

// ساخت اتصال
window.supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("✅ اتصال Supabase آماده است");
