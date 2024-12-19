import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, AlertTriangle, Users, Bug, ThumbsDown, UserX, Spam, DollarSign, RotateCcw, UserMinus, Bot, HandCoins, Ban, MessageSquare, UserPlus, BookOpen, Swords, FileWarning, Scale } from "lucide-react";

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
  // ... Continue with all rules following the same pattern
];

const Rules = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="rules-container">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Server Rules</h1>
        <p className="intro-text">
          Sebelum melanjutkan ke channel lain, penting nya untuk membaca dan memahami aturan di Discord dan Server Aethar craft.
          Melanggar aturan dapat mengakibatkan hukuman tergantung pada aturan yang di langgar.
        </p>
        
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="rule-card">
              <h2 className="rule-title">
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