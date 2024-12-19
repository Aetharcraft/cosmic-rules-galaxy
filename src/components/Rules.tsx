import { ScrollArea } from "@/components/ui/scroll-area";
import { FileWarning } from "lucide-react";

const rules = {
  gameRules: [
    {
      title: "1. TIDAK MENGGUNAKAN CHEAT ATAU MODIFIKASI ILEGAL",
      content: "Penggunaan cheat, modifikasi ilegal, atau program pihak ketiga yang memberikan keuntungan tidak diperbolehkan di server. Ini termasuk hack client, auto-clicker, atau script yang memanipulasi permainan untuk keuntungan pribadi."
    },
    {
      title: "3. LARANGAN MEMANFAATKAN BUG ATAU CELAH",
      content: "Dilarang keras memanfaatkan bug atau celah dalam permainan untuk mendapatkan keuntungan yang tidak seharusnya. Jika menemukan bug, segera laporkan kepada staff atau admin server agar dapat diperbaiki."
    },
    {
      title: "4. TIDAK DI PERBOLEHKAN PENCURIAN DAN GRIEFING",
      content: "Larangan mencuri barang atau item milik pemain lain tanpa izin, serta merusak atau menghancurkan bangunan, properti dan hiasan tanpa izin."
    },
    {
      title: "11. DILARANG MENGGUNAKAN BOT ATAU PROGRAM OTOMATIS",
      content: "Penggunaan bot atau program otomatis untuk mengotomatiskan tugas dalam permainan atau chat sangat dilarang. Ini mencakup penggunaan macro atau skrip yang memberikan keuntungan tidak adil."
    },
    {
      title: "17. TIDAK DIPERBOLEHKAN MENGGUNAKAN MULTI-ACCOUNT",
      content: "Penggunaan beberapa akun untuk tujuan curang, seperti untuk memanipulasi sistem, mendapatkan keuntungan yang tidak adil, atau menghindari sanksi sangat dilarang. Setiap pemain hanya diperbolehkan memiliki satu akun di server."
    }
  ],
  chatRules: [
    {
      title: "2. SOPAN DAN HORMATI PEMAIN LAIN",
      content: "Selalu bersikap sopan dan hormati pemain lain dalam segala bentuk interaksi, baik di chat maupun dalam permainan. Gunakan bahasa yang baik, hindari penghinaan, dan jangan memulai konflik yang dapat mengganggu kenyamanan orang lain."
    },
    {
      title: "7. LARANGAN SPAMMING DAN IKLAN",
      content: "Larangan mengirim pesan berulang-ulang (spamming) atau mempromosikan produk, layanan, atau server lain tanpa izin."
    },
    {
      title: "13. LARANGAN KONTEN DEWASA",
      content: "Dilarang membagikan atau mendiskusikan konten yang mengandung unsur dewasa, pornografi, atau hal-hal yang tidak pantas. Ini termasuk gambar, video, dan diskusi yang berhubungan."
    },
    {
      title: "16. LARANGAN MENGGUNAKAN BAHASA KASAR",
      content: "Dilarang menggunakan bahasa yang kasar atau ofensif dalam semua bentuk komunikasi, baik di chat maupun suara."
    }
  ],
  communityRules: [
    {
      title: "5. LARANGAN DISKRIMINASI",
      content: "Dilarang keras melakukan segala bentuk diskriminasi terhadap pemain lain berdasarkan ras, agama, jenis kelamin, orientasi seksual, kewarganegaraan, atau latar belakang pribadi lainnya. Setiap pemain berhak mendapatkan perlakuan yang adil dan hormat tanpa memandang perbedaan mereka."
    },
    {
      title: "6. LARANGAN PELECEHAN",
      content: "Pelecehan dalam bentuk apa pun, baik secara verbal, maupun melalui chat. Ini termasuk namun tidak terbatas pada pelecehan seksual, penghinaan, ancaman, atau perilaku intimidatif terhadap pemain lain."
    },
    {
      title: "19. LARANGAN MENGANCAM ATAU MELAKUKAN KEKERASAN",
      content: "Ancaman kekerasan terhadap pemain lain, baik dalam bentuk fisik maupun verbal, tidak akan ditoleransi. Hal ini termasuk ancaman terhadap kehidupan nyata atau kekerasan dalam permainan."
    }
  ],
  transactionRules: [
    {
      title: "8. LARANGAN REAL MONEY TRADING [ RMT ]",
      content: "Melakukan transaksi jual beli barang atau layanan dalam permainan menggunakan uang sungguhan tidak diperbolehkan. Real Money Trading (RMT) bertentangan dengan kebijakan server dan dapat merugikan pengalaman bermain bagi semua pemain. Semua bentuk transaksi keuangan yang terjadi harus mematuhi ketentuan yang ditetapkan oleh penyedia server. Pelanggaran terhadap larangan ini dapat mengakibatkan sanksi tegas, termasuk penghapusan akun dan tindakan hukum sesuai dengan peraturan yang berlaku."
    },
    {
      title: "9. TIDAK ADA REFFUND",
      content: "Semua transaksi yang dilakukan di dalam store kami bersifat final dan tidak dapat dikembalikan. Kami tidak menerima permintaan pengembalian dana untuk pembelian apa pun, termasuk item, rank, atau layanan yang di sediakan. Namun, dalam keadaan tertentu, seperti kehilangan akun atau masalah teknis yang serius, Anda dapat mengajukan permohonan untuk evaluasi lebih lanjut. Kami menghargai pemahaman dan kerjasama Anda dalam hal ini."
    },
    {
      title: "12. PATUHI ETIKA DALAM BERTRANSAKSI",
      content: "Saat melakukan transaksi di dalam server, pastikan untuk bertransaksi secara adil dan transparan. Jangan mengubah kesepakatan setelah transaksi dilakukan, dan selalu hargai kesepakatan yang telah dibuat."
    }
  ],
  accountRules: [
    {
      title: "10. PEMALSUAN IDENTITAS ATAU BERPURA-PURA SEBAGAI ORANG LAIN",
      content: "Penggunaan nama atau identitas palsu untuk tujuan menipu, menyembunyikan identitas asli, atau berpura-pura sebagai pemain lain sangat dilarang. Jika Anda tertangkap melakukan pemalsuan identitas, sanksi tegas akan diberikan, termasuk kemungkinan pemblokiran akun."
    },
    {
      title: "15. LARANGAN MEMPERDAGANGKAN AKUN",
      content: "Dilarang memperdagangkan, menjual, atau memberikan akun kepada orang lain. Setiap pemain bertanggung jawab penuh atas akun mereka masing-masing."
    }
  ]
};

const Rules = () => {
  const publishDate = "19-12-2024";
  
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
        
        <div className="space-y-12">
          {/* Game Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Game Rules</h2>
            <div className="space-y-6">
              {rules.gameRules.map((rule, index) => (
                <div 
                  key={index} 
                  className="rule-card group hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="rule-title group-hover:text-primary transition-colors">
                    {rule.title}
                  </h3>
                  <p className="rule-content">{rule.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Chat Rules</h2>
            <div className="space-y-6">
              {rules.chatRules.map((rule, index) => (
                <div 
                  key={index} 
                  className="rule-card group hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="rule-title group-hover:text-primary transition-colors">
                    {rule.title}
                  </h3>
                  <p className="rule-content">{rule.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Community Rules</h2>
            <div className="space-y-6">
              {rules.communityRules.map((rule, index) => (
                <div 
                  key={index} 
                  className="rule-card group hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="rule-title group-hover:text-primary transition-colors">
                    {rule.title}
                  </h3>
                  <p className="rule-content">{rule.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Transaction Rules</h2>
            <div className="space-y-6">
              {rules.transactionRules.map((rule, index) => (
                <div 
                  key={index} 
                  className="rule-card group hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="rule-title group-hover:text-primary transition-colors">
                    {rule.title}
                  </h3>
                  <p className="rule-content">{rule.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Account Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Account Rules</h2>
            <div className="space-y-6">
              {rules.accountRules.map((rule, index) => (
                <div 
                  key={index} 
                  className="rule-card group hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="rule-title group-hover:text-primary transition-colors">
                    {rule.title}
                  </h3>
                  <p className="rule-content">{rule.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Rules;