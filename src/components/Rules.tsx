import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, AlertTriangle, Users, Bug, Ban, UserX, BellRing, DollarSign, RotateCcw, UserMinus, Bot, HandCoins, MessageSquare, UserPlus, BookOpen, Swords, FileWarning, Scale } from "lucide-react";

const rules = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "1. TIDAK MENGGUNAKAN CHEAT ATAU MODIFIKASI ILEGAL",
    content: "Penggunaan cheat, modifikasi ilegal, atau program pihak ketiga yang memberikan keuntungan tidak diperbolehkan di server. Ini termasuk hack client, auto-clicker, atau script yang memanipulasi permainan untuk keuntungan pribadi."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "2. SOPAN DAN HORMATI PEMAIN LAIN",
    content: "Selalu bersikap sopan dan hormati pemain lain dalam segala bentuk interaksi, baik di chat maupun dalam permainan. Gunakan bahasa yang baik, hindari penghinaan, dan jangan memulai konflik yang dapat mengganggu kenyamanan orang lain."
  },
  {
    icon: <Bug className="w-5 h-5" />,
    title: "3. LARANGAN MEMANFAATKAN BUG ATAU CELAH",
    content: "Dilarang keras memanfaatkan bug atau celah dalam permainan untuk mendapatkan keuntungan yang tidak seharusnya. Jika menemukan bug, segera laporkan kepada staff atau admin server agar dapat diperbaiki."
  },
  {
    icon: <Ban className="w-5 h-5" />,
    title: "4. DILARANG BERPERILAKU TIDAK SOPAN",
    content: "Perilaku yang tidak sopan, termasuk tetapi tidak terbatas pada, pelecehan, ancaman, atau intimidasi terhadap pemain lain tidak akan ditoleransi."
  },
  {
    icon: <UserX className="w-5 h-5" />,
    title: "5. DILARANG MENGGANGGU PERMAINAN ORANG LAIN",
    content: "Mengganggu permainan orang lain, termasuk tetapi tidak terbatas pada, trolling, griefing, atau tindakan yang merugikan pengalaman bermain orang lain adalah dilarang."
  },
  {
    icon: <BellRing className="w-5 h-5" />,
    title: "6. PENTINGNYA MELAPORKAN MASALAH",
    content: "Jika Anda menemukan masalah, bug, atau perilaku yang tidak pantas, harap laporkan kepada staff atau admin server secepatnya."
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "7. DILARANG MENJUAL AKUN",
    content: "Menjual, membeli, atau memperdagangkan akun adalah dilarang dan dapat mengakibatkan pemblokiran permanen."
  },
  {
    icon: <RotateCcw className="w-5 h-5" />,
    title: "8. HORMATI KEPUTUSAN STAFF",
    content: "Keputusan staff adalah final. Jika Anda memiliki masalah dengan keputusan tersebut, harap bicarakan dengan cara yang sopan."
  },
  {
    icon: <UserMinus className="w-5 h-5" />,
    title: "9. DILARANG MENGGUNAKAN NAMA YANG TIDAK PANTAS",
    content: "Nama pengguna yang mengandung kata-kata kasar, ofensif, atau tidak pantas tidak akan diterima."
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "10. HORMATI BOT DAN FUNGSI SERVER",
    content: "Mengganggu atau mencoba memanipulasi bot server adalah dilarang."
  },
  {
    icon: <HandCoins className="w-5 h-5" />,
    title: "11. DILARANG MENGGUNAKAN ALAT BANTU",
    content: "Penggunaan alat bantu atau program yang memberikan keuntungan tidak adil dalam permainan adalah dilarang."
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "12. JANGAN SPAM",
    content: "Mengirim pesan spam, baik di chat maupun di saluran suara, tidak diperbolehkan."
  },
  {
    icon: <UserPlus className="w-5 h-5" />,
    title: "13. DILARANG MENGUNDANG ORANG TANPA IZIN",
    content: "Mengundang orang ke server tanpa izin dari staff adalah dilarang."
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "14. PENTINGNYA MEMBACA ATURAN",
    content: "Sebelum bermain, penting untuk membaca dan memahami semua aturan yang berlaku."
  },
  {
    icon: <Swords className="w-5 h-5" />,
    title: "15. DILARANG MENGGUNAKAN NAMA SERVER LAIN",
    content: "Menggunakan nama server lain dalam konteks promosi atau iklan adalah dilarang."
  },
  {
    icon: <FileWarning className="w-5 h-5" />,
    title: "16. HORMATI PRIVASI ORANG LAIN",
    content: "Menghormati privasi pemain lain dan tidak membagikan informasi pribadi tanpa izin."
  },
  {
    icon: <Scale className="w-5 h-5" />,
    title: "17. DILARANG MENGGUNAKAN KATA-KATA KASAR",
    content: "Menggunakan kata-kata kasar atau ofensif dalam chat tidak akan ditoleransi."
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "18. DILARANG MENGGUNAKAN ALAT YANG TIDAK DIIZINKAN",
    content: "Menggunakan alat atau program yang tidak diizinkan dalam permainan adalah dilarang."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "19. DILARANG MENGGUNAKAN MULTI-ACCOUNT",
    content: "Menggunakan lebih dari satu akun untuk tujuan yang tidak sah adalah dilarang."
  },
];

const Rules = () => {
  const publishDate = "15 April 2024";
  
  return (
    <ScrollArea className="h-screen">
      <div className="rules-container">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary relative">
          <span className="absolute inset-0 animate-pulse bg-primary/20 blur-xl rounded-full"></span>
          Server Rules
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
          <FileWarning className="w-4 h-4" />
          <p>Terbit: {publishDate}</p>
        </div>
        
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div 
              key={index} 
              className="rule-card group hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300"
            >
              <h2 className="rule-title group-hover:text-primary transition-colors">
                {rule.icon}
                {rule.title}
              </h2>
              <p className="rule-content">{rule.content}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Rules;
